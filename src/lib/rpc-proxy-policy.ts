/**
 * Policy for the server-side browser RPC proxy (/api/rpc).
 *
 * Purpose: let the browser use a dedicated endpoint without exposing the
 * Alchemy key. Requests are forwarded server-side to
 * ALCHEMY_SOLANA_RPC_URL. Signing NEVER happens on the server — the proxy
 * only carries JSON-RPC (the wallet signs in the browser as before).
 *
 * Security posture:
 * - Strict method allowlist: covers everything the browser launch flow needs
 *   (blockhash, submit, confirm-polling, account reads, simulation, fees)
 *   while blocking expensive indexing calls (getProgramAccounts, getLogs, …)
 *   so anonymous traffic cannot burn the provider's compute units.
 * - POST only, bounded body size, upstream timeout, no response caching.
 * - Never echoes the upstream URL or credentials in responses or errors.
 */

const ALLOWED_BROWSER_RPC_METHODS: ReadonlySet<string> = new Set([
  // Read + health (wallet adapter handshake / UI)
  "getHealth",
  "getVersion",
  "getEpochInfo",
  "getBlockHeight",
  "getSlot",
  // Launch flow: blockhash
  "getLatestBlockhash",
  "getFeeForMessage",
  "getMinimumBalanceForRentExemption",
  // Launch flow: simulate + submit + confirm-poll (tx-engine, HTTP-only)
  "simulateTransaction",
  "sendTransaction",
  "getSignatureStatuses",
  // Post-confirm account read + wallet/UI reads
  "getAccountInfo",
  "getMultipleAccounts",
  "getBalance",
  "getTransaction",
  "getTokenAccountsByOwner",
  "getTokenSupply",
]);

export function isAllowedBrowserRpcMethod(method: string): boolean {
  return ALLOWED_BROWSER_RPC_METHODS.has(method);
}

/** JSON-RPC request shape: single object or batch array. */
export type JsonRpcRequest = { jsonrpc?: string; id?: unknown; method?: string; params?: unknown };

export function isJsonRpcPayload(body: unknown): body is JsonRpcRequest | JsonRpcRequest[] {
  if (Array.isArray(body)) {
    return body.length > 0 && body.every((e) => e && typeof e === "object");
  }
  return !!body && typeof body === "object";
}

/** All methods in the payload must be allowed (batch = every entry). */
export function payloadMethodsAllowed(body: JsonRpcRequest | JsonRpcRequest[]): boolean {
  const entries = Array.isArray(body) ? body : [body];
  return entries.every(
    (e) => typeof e.method === "string" && isAllowedBrowserRpcMethod(e.method),
  );
}

export const BROWSER_RPC_BODY_LIMIT_BYTES = 64 * 1024;

/**
 * Fixed-window per-IP rate limiter for the RPC proxy.
 *
 * Bounds anonymous browser traffic so a single client cannot exhaust the
 * server-side provider quota (Alchemy CU/s) for everyone else. In-memory by
 * design: on serverless platforms each instance limiter is per-process —
 * platform-level WAF/rate limiting should be layered on top in production.
 *
 * Honest behavior: rejected requests receive HTTP 429 with Retry-After.
 */
export class PerIpRateLimiter {
  private readonly buckets = new Map<string, { count: number; resetAt: number }>();

  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
  ) {}

  /** Returns true when the request is allowed; records it otherwise. */
  allow(ip: string, now: number = Date.now()): boolean {
    if (!ip) return true; // no identifiable IP — do not block blindly
    const bucket = this.buckets.get(ip);
    if (!bucket || now >= bucket.resetAt) {
      this.buckets.set(ip, { count: 1, resetAt: now + this.windowMs });
      return true;
    }
    if (bucket.count < this.limit) {
      bucket.count += 1;
      return true;
    }
    return false;
  }

  /** Seconds until the oldest retry may succeed (for Retry-After). */
  retryAfterSeconds(now: number = Date.now()): number {
    let maxResetAt = 0;
    for (const b of this.buckets.values()) if (b.resetAt > maxResetAt) maxResetAt = b.resetAt;
    if (maxResetAt <= now) return 0;
    return Math.ceil((maxResetAt - now) / 1000);
  }

  /** Test hook: drop expired buckets to bound memory. */
  prune(now: number = Date.now()): void {
    for (const [ip, b] of this.buckets) if (now >= b.resetAt) this.buckets.delete(ip);
  }

  clear(): void {
    this.buckets.clear();
  }
}