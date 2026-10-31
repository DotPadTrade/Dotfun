/**
 * Solana network selection — DotPad variable first, legacy RelayPad variable
 * as a fallback (Phase 1 of the naming migration).
 *
 * - `NEXT_PUBLIC_DOTPAD_NETWORK` (new) takes priority.
 * - `NEXT_PUBLIC_RELAYPAD_NETWORK` (legacy) is used only when the new
 *   variable is unset, so existing deployments keep working unchanged.
 *
 * Works identically in client and server bundles: `NEXT_PUBLIC_*` values are
 * inlined at build time wherever these literals appear, and the server reads
 * the real environment at runtime.
 *
 * Migration note: migrating hosting to `NEXT_PUBLIC_DOTPAD_NETWORK` requires
 * a production REBUILD — client bundles only pick up `NEXT_PUBLIC_*` values
 * at build time, not at runtime.
 */
import type { ClusterId } from "./constants";

/** Pure resolver: new value first, legacy fallback, anything unrecognized → devnet. */
export function resolveClusterFromEnv(
  dotpadNetwork: string | undefined,
  legacyNetwork: string | undefined,
): ClusterId {
  const a = dotpadNetwork?.trim();
  const b = legacyNetwork?.trim();
  const raw = a || b || "";
  return raw === "mainnet-beta" ? "mainnet-beta" : "devnet";
}

/** The effective raw network value (new name first, legacy fallback). */
export function currentNetworkRaw(): string | undefined {
  const a = process.env.NEXT_PUBLIC_DOTPAD_NETWORK?.trim();
  if (a) return a;
  return process.env.NEXT_PUBLIC_RELAYPAD_NETWORK?.trim() || undefined;
}

/** The active cluster for the running app (new name first, legacy fallback). */
export function currentNetworkCluster(): ClusterId {
  return resolveClusterFromEnv(
    process.env.NEXT_PUBLIC_DOTPAD_NETWORK,
    process.env.NEXT_PUBLIC_RELAYPAD_NETWORK,
  );
}
