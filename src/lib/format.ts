/** Small shared helpers for dashboard data display. */

/** Relative time like "3m ago". Input: Date | ISO string | epoch ms. */
export function timeAgo(input: string | number | Date): string {
  const t = typeof input === "number" ? input : new Date(input).getTime();
  if (Number.isNaN(t)) return "unknown";
  const s = Math.max(0, Math.floor((Date.now() - t) / 1000));
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export function shortAddress(addr: string | null | undefined, size = 4): string {
  if (!addr) return "—";
  if (addr.length <= size * 2 + 3) return addr;
  return `${addr.slice(0, size)}…${addr.slice(-size)}`;
}

/**
 * Verified bonding-curve progress (0–100) derived ONLY from on-chain
 * snapshots stored in the registry. Returns null when no verified data
 * exists — callers must render "unavailable", never a fabricated number.
 *
 * LaunchLab pool snapshot: realB vs totalFundRaisingB (quote raised vs
 * threshold). Pump curve snapshots expose raw reserve fields; without the
 * protocol's verified sell allocation we do not invent a percentage.
 */
export function curveProgress(curveState: unknown): number | null {
  if (!curveState || typeof curveState !== "object") return null;
  const raw = curveState as Record<string, unknown>;
  const realB = Number(raw.realB);
  const threshold = Number(raw.totalFundRaisingB);
  if (Number.isFinite(realB) && Number.isFinite(threshold) && threshold > 0) {
    return Math.max(0, Math.min(100, (realB / threshold) * 100));
  }
  return null;
}

export function formatCompact(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export function abbreviateWallet(addr: string): string {
  return shortAddress(addr, 4);
}
