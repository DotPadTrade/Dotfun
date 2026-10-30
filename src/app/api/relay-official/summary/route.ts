import { NextResponse } from "next/server";
import { z } from "zod";
import { resolveServerNetworkConfig, getConnection } from "@/lib/connection";
import { getRelayOfficialConfig } from "@/lib/relay-official/config";
import { getRelayOfficialStore } from "@/lib/relay-official/store";
import { buildTreasurySummary } from "@/lib/relay-official/summary";
import { indexTreasuryActivity } from "@/lib/relay-official/indexer";
import { adaptConnection } from "@/lib/relay-official/rpc-adapter";
import { jsonHeaders, mutationRejected, publicApiGuard } from "@/lib/relay-official/api-guard";
import {
  REFRESH_MIN_INTERVAL_MS,
  REFRESH_STATE_KEY,
  shouldRunRefresh,
} from "@/lib/relay-official/refresh-gate";
import { logSafeDetail, publicInvalidRoles } from "@/lib/relay-official/sanitize";

/**
 * GET /api/relay-official/summary — public, read-only treasury overview.
 *
 * Read-only by construction: this endpoint contains no transfer, buyback,
 * burn, or configuration logic, and rejects every non-GET method. The
 * optional `refresh` parameter only triggers the read-only on-chain indexer
 * (RPC reads + idempotent cache writes), never a transaction.
 *
 * Caching: responses are explicitly not cached (balances move).
 * Rate limiting: per-IP fixed window (bounded anonymous load).
 */

const querySchema = z.object({
  refresh: z
    .enum(["1", "true", "0", "false"])
    .optional()
    .transform((v) => v === "1" || v === "true"),
});

export const dynamic = "force-dynamic";

/** Per-process throttle anchor + single-flight flag (see refresh-gate.ts). */
let lastRefreshAt = 0;
let refreshInFlight = false;

export async function GET(req: Request) {
  const guard = publicApiGuard(req);
  if (guard) return guard;

  const url = new URL(req.url);
  const parsed = querySchema.safeParse({
    refresh: url.searchParams.get("refresh") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_parameters" },
      { status: 400, headers: jsonHeaders() },
    );
  }

  const config = getRelayOfficialConfig();
  const store = getRelayOfficialStore();
  if (!store && config.anyWalletConfigured) {
    return NextResponse.json(
      { error: "database_not_configured" },
      { status: 503, headers: jsonHeaders() },
    );
  }

  // Optional read-only refresh (bounded scan + idempotent cache writes).
  // Gated on the RELAY_OFFICIAL_ENABLED master switch, a per-process time
  // throttle and single-flight flag (exact within this process), plus a
  // DB-backed timestamp gate shared by every instance through the existing
  // RelayOfficialIndexState table — so N production instances do not all
  // start redundant scans for the same visitor refresh. The DB gate is
  // best-effort dedupe, not a distributed lock; overlapping scans remain
  // safe because indexing is idempotent (see refresh-gate.ts).
  const now = Date.now();
  let dbLastRunAt: Date | null = null;
  if (store) {
    try {
      dbLastRunAt = (await store.getIndexState(REFRESH_STATE_KEY))?.lastRunAt ?? null;
    } catch (err) {
      // Gate check is best-effort: a DB outage falls back to the per-process
      // throttle; the indexer run itself contains and records the failure.
      console.error("[api/relay-official/summary] refresh gate read failed:", logSafeDetail(err));
      dbLastRunAt = null;
    }
  }
  if (
    parsed.data.refresh &&
    shouldRunRefresh({
      enabled: config.enabled,
      anyWalletConfigured: config.anyWalletConfigured,
      hasStore: store !== null,
      inFlight: refreshInFlight,
      localLastRunAt: lastRefreshAt,
      dbLastRunAt,
      now,
    })
  ) {
    lastRefreshAt = now;
    refreshInFlight = true;
    // Claim the shared refresh window first: a scan that fails still counts
    // as "recently attempted" so request bursts cannot hammer the RPC.
    try {
      await store!.setIndexState(REFRESH_STATE_KEY, {
        lastRunAt: new Date(now),
        lastStatus: "ok",
        lastError: null,
      });
    } catch (err) {
      console.error("[api/relay-official/summary] refresh claim failed:", logSafeDetail(err));
    }
    const networkCfg = resolveServerNetworkConfig(config.network);
    const connection = adaptConnection(getConnection(networkCfg));
    try {
      await indexTreasuryActivity({ connection, store: store!, config });
    } catch (err) {
      console.error("[api/relay-official/summary] index error:", logSafeDetail(err));
      // Contained: the summary still renders from stored data.
      try {
        await store!.setIndexState(REFRESH_STATE_KEY, {
          lastStatus: "error",
          lastError: logSafeDetail(err),
        });
      } catch {
        // index-state write failure is already contained by the indexer.
      }
    } finally {
      refreshInFlight = false;
    }
  }

  try {
    const networkCfg = resolveServerNetworkConfig(config.network);
    const connection = adaptConnection(getConnection(networkCfg));
    const summary = await buildTreasurySummary({ balanceConnection: connection, store, config });
    return NextResponse.json(
      // Public form: which roles are misconfigured — never the raw env value.
      { ...summary, invalid: publicInvalidRoles(config) },
      { headers: jsonHeaders() },
    );
  } catch (err) {
    console.error("[api/relay-official/summary] error:", logSafeDetail(err));
    return NextResponse.json(
      { error: "summary_unavailable" },
      { status: 503, headers: jsonHeaders() },
    );
  }
}

/** Explicit: this API never accepts mutating requests. */
export async function POST(req: Request) {
  return mutationRejected(req);
}