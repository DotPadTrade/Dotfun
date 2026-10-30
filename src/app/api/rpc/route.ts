import { NextRequest, NextResponse } from "next/server";
import {
  BROWSER_RPC_BODY_LIMIT_BYTES,
  isJsonRpcPayload,
  payloadMethodsAllowed,
  PerIpRateLimiter,
} from "@/lib/rpc-proxy-policy";

/**
 * POST /api/rpc — server-side Solana RPC proxy for the browser.
 *
 * Forwards JSON-RPC to ALCHEMY_SOLANA_RPC_URL (configured server-side; the key
 * never appears in the request path, response, or logs). The browser launch
 * flow (blockhash → sign in wallet → submit → confirm-poll → account read)
 * is pure HTTP JSON-RPC, so the wallet-adapter connection can safely point
 * here. Signing stays in the browser wallet.
 *
 * Guards: POST only, JSON-RPC shape, strict method allowlist (blocks
 * expensive indexing calls), bounded body size, per-IP rate limiting
 * (60 req/min; 429 + Retry-After when exceeded), upstream timeout, no-store.
 * The provider is never exposed in errors; failures degrade to honest 502s.
 */
export const dynamic = "force-dynamic";

const UPSTREAM_TIMEOUT_MS = 15_000;
/** Per-IP fixed-window limit: generous for the launch flow, tight enough to
 * stop a single client from draining the shared provider quota. */
const RATE_LIMIT = 60;
const RATE_WINDOW_MS = 60_000;

const limiter = new PerIpRateLimiter(RATE_LIMIT, RATE_WINDOW_MS);

function clientIp(req: NextRequest): string {
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    ""
  );
}

export async function GET() {
  return NextResponse.json(
    { error: "method_not_allowed", message: "POST JSON-RPC requests only." },
    { status: 405 },
  );
}

export async function POST(req: NextRequest) {
  // 0) Per-IP rate limit (honest 429 with Retry-After; never silently dropped).
  const ip = clientIp(req);
  if (!limiter.allow(ip)) {
    const retryAfter = limiter.retryAfterSeconds();
    return NextResponse.json(
      {
        error: "rate_limited",
        message: "Too many RPC requests from this client. Retry shortly.",
      },
      { status: 429, headers: { "retry-after": String(retryAfter) } },
    );
  }

  // 1) Upstream must be configured (server-side only; never exposed).
  const upstream = process.env.ALCHEMY_SOLANA_RPC_URL?.trim() || "";
  if (!upstream) {
    return NextResponse.json(
      { error: "rpc_proxy_not_configured", message: "No server-side RPC provider configured." },
      { status: 503 },
    );
  }

  // 2) Bounded body, JSON only.
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (contentLength > BROWSER_RPC_BODY_LIMIT_BYTES) {
    return NextResponse.json(
      { error: "payload_too_large", message: "RPC request body exceeds the allowed size." },
      { status: 413 },
    );
  }
  let body: unknown;
  try {
    const text = await req.text();
    if (text.length > BROWSER_RPC_BODY_LIMIT_BYTES) {
      return NextResponse.json(
        { error: "payload_too_large", message: "RPC request body exceeds the allowed size." },
        { status: 413 },
      );
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: "Request body must be JSON." },
      { status: 400 },
    );
  }

  // 3) JSON-RPC shape + strict method allowlist.
  if (!isJsonRpcPayload(body) || !payloadMethodsAllowed(body)) {
    return NextResponse.json(
      {
        error: "method_not_allowed",
        message: "RPC method not permitted for browser requests.",
      },
      { status: 403 },
    );
  }

  // 4) Forward to the configured provider (server-side; key never echoed).
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    const upstreamHeaders: Record<string, string> = { "content-type": "application/json" };
    const authHeader = req.headers.get("authorization");
    if (authHeader) upstreamHeaders.authorization = authHeader;
    const upstreamRes = await fetch(upstream, {
      method: "POST",
      headers: upstreamHeaders,
      body: JSON.stringify(body),
      cache: "no-store",
      signal: controller.signal,
    });
    const text = await upstreamRes.text();
    return new NextResponse(text, {
      status: upstreamRes.status,
      headers: {
        "content-type": upstreamRes.headers.get("content-type") ?? "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    // Never include the upstream URL/credentials in the error.
    return NextResponse.json(
      { error: "rpc_upstream_unreachable", message: "RPC provider did not respond in time." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timer);
  }
}