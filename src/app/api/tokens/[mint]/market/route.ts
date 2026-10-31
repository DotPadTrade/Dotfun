import { currentNetworkRaw } from "@/lib/network-env";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { resolveServerNetworkConfig, getConnection } from "@/lib/connection";
import { fetchTokenMarket, aggregateCandles, activityWindows, candleSecondsFor } from "@/lib/token/trades";

export const dynamic = "force-dynamic";

/**
 * GET /api/tokens/[mint]/market — live token analytics (bounded, on-chain).
 *
 * Decodes recent real swaps over the token's venue (bonding curve or pool),
 * classifies buy/sell, aggregates REAL-trade candles for the requested
 * interval, and derives wallet intelligence. Every metric comes from on-chain
 * data; unavailable metrics are reported as unavailable — never fabricated.
 *
 * A short module cache (15s) bounds RPC usage per mint so page polling stays
 * gentle on the provider while remaining genuinely live.
 */

const querySchema = z.object({
  interval: z.enum(["1m", "5m", "15m", "1h", "4h", "1d"]).default("5m"),
  maxTx: z.coerce.number().int().min(5).max(20).default(20),
});
// rev 5 — activity windows (5m/1h/6h/24h) from decoded swaps

const CACHE_TTL_MS = 15_000;
const cache = new Map<string, { expiresAt: number; payload: unknown }>();

export async function GET(req: NextRequest, ctx: { params: Promise<{ mint: string }> }) {
  const { mint } = await ctx.params;
  // Bounded mint shape (base58 pubkey).
  if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) {
    return NextResponse.json({ error: "invalid_mint" }, { status: 400 });
  }
  const parsed = querySchema.safeParse({
    interval: new URL(req.url).searchParams.get("interval") ?? undefined,
    maxTx: new URL(req.url).searchParams.get("maxTx") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json({ error: "validation_failed" }, { status: 400 });
  }
  const interval = parsed.data.interval;
  if (candleSecondsFor(interval) == null) {
    return NextResponse.json({ error: "invalid_interval" }, { status: 400 });
  }

  // Trades payload is interval-independent — cache it; candles derive per
  // interval from the same bounded trade set.
  const cacheKey = `${mint}:${parsed.data.maxTx}`;
  const cached = cache.get(cacheKey);
  const now = Date.now();
  let tradesPayload: unknown;
  if (cached && cached.expiresAt > now) {
    tradesPayload = cached.payload;
  } else {
    const cfg = resolveServerNetworkConfig(currentNetworkRaw());
    const connection = getConnection(cfg);
    tradesPayload = await fetchTokenMarket(connection, mint, {
      maxTx: parsed.data.maxTx,
      interval: "5m",
    });
    cache.set(cacheKey, { expiresAt: now + CACHE_TTL_MS, payload: tradesPayload });
    if (cache.size > 50) {
      // Bounded cache: drop the oldest entry (insertion order).
      const oldest = cache.keys().next().value;
      if (oldest) cache.delete(oldest);
    }
  }

  const snapshot = tradesPayload as {
    venue: unknown;
    trades: { blockTime: number | null; priceSol: number | null; solAmount: number | null; kind: string }[];
    wallets: unknown;
    holders: unknown;
    topBuyers: unknown;
    topSellers: unknown;
    earlyBuyers: unknown;
    creatorActivity: unknown;
    coverageFrom: number | null;
    coverageTo: number | null;
    coverageNote: string;
    warnings: string[];
  };

  // Candles for the requested interval, aggregated uniformly from the cached
  // real-trade set (real executions only; unknown/unpriced trades excluded).
  const candles = aggregateCandles(snapshot.trades as never, candleSecondsFor(interval) ?? 300);

  // Activity windows (5m/1h/6h/24h) derived from the same decoded swaps —
  // each window carries its own swap count so sparse coverage is explicit.
  const activity = activityWindows(
    snapshot.trades as never,
    Math.floor(Date.now() / 1000),
  );

  return NextResponse.json(
    {
      mint,
      interval,
      venue: snapshot.venue,
      candles,
      activity,
      trades: snapshot.trades,
      wallets: snapshot.wallets,
      holders: snapshot.holders,
      topBuyers: snapshot.topBuyers,
      topSellers: snapshot.topSellers,
      earlyBuyers: snapshot.earlyBuyers,
      creatorActivity: snapshot.creatorActivity,
      coverageFrom: snapshot.coverageFrom,
      coverageTo: snapshot.coverageTo,
      coverageNote: snapshot.coverageNote,
      warnings: snapshot.warnings,
    },
    { headers: { "cache-control": "no-store" } },
  );
}
