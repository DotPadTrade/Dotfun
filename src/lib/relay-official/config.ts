import { PublicKey } from "@solana/web3.js";
import type { ClusterId } from "../constants";

/**
 * Explicit placeholder for RELAY_OFFICIAL_MINT before the official token is
 * announced. Treated exactly like an unset value everywhere: never displayed
 * as a real address, never enables copying, and never listed as a
 * misconfiguration. Replace it in the environment with the real mint address
 * once the official token is launched and verified.
 */
export const RELAY_OFFICIAL_MINT_PLACEHOLDER = "REPLACE_WITH_OFFICIAL_RELAY_MINT";


/**
 * Server-only configuration for the official $RELAY treasury dashboard.
 *
 * Contains PUBLIC addresses and non-secret policy values only. There are no
 * private keys, seed phrases, or signing credentials here — signing stays in
 * the wallet / signing-service components described in
 * docs/RELAY_OFFICIAL_TOKEN_BUYBACK_IMPLEMENTATION_PLAN.md.
 *
 * Until the owner finalizes the wallets, every value is an unset placeholder;
 * the dashboard renders honest "configuration needed" states for anything
 * missing rather than inventing data.
 */

export const RELAY_OFFICIAL_ROLES = ["W1", "W2", "W3", "W4"] as const;
export type RelayOfficialRole = (typeof RELAY_OFFICIAL_ROLES)[number];

export const RELAY_OFFICIAL_ROLE_META: Record<
  RelayOfficialRole,
  { label: string; description: string }
> = {
  W1: {
    label: "Creator-fee receiver",
    description:
      "Official $RELAY creator-fee recipient (recorded at token launch). Receives verified creator-fee collections.",
  },
  W2: {
    label: "Buyback treasury",
    description:
      "Dedicated buyback treasury. Holds only the approved buyback allocation; executes verified buybacks and burns.",
  },
  W3: {
    label: "Operations & reserve",
    description:
      "Operations and reserve treasury. Holds the ops, reserve, and growth allocations.",
  },
  W4: {
    label: "Development wallet",
    description:
      "Separate development wallet. Not connected to the creator-fee allocation system; listed for transparency only.",
  },
};

export interface RelayOfficialWalletConfig {
  role: RelayOfficialRole;
  label: string;
  description: string;
  /** Public address, or null while the placeholder is unfinalized. */
  address: string | null;
}

function readAddress(
  envValue: string | undefined,
): { address: string | null; invalid: string | null } {
  const raw = envValue?.trim() ?? "";
  if (!raw) return { address: null, invalid: null };
  try {
    // Validation only — public keys, never secrets.
    new PublicKey(raw);
    return { address: raw, invalid: null };
  } catch {
    return { address: null, invalid: raw };
  }
}

export interface RelayOfficialConfig {
  network: ClusterId;
  wallets: RelayOfficialWalletConfig[];
  /** Official $RELAY mint, or null until launched/recorded. */
  mint: string | null;
  /** True when at least one treasury wallet is configured. */
  anyWalletConfigured: boolean;
  /**
   * Addresses present but not valid base58 public keys (misconfiguration —
   * distinct from pending configuration; surfaced on the dashboard).
   */
  invalid: { role: RelayOfficialRole | "MINT"; value: string }[];
  /** Master switch (RELAY_OFFICIAL_ENABLED, default off). */
  enabled: boolean;
}

/** Load the current configuration. Pure over the provided env; no side effects. */
export function getRelayOfficialConfig(
  env: Partial<
    Pick<
      NodeJS.ProcessEnv,
      | "RELAY_OFFICIAL_CREATOR_WALLET"
      | "RELAY_OFFICIAL_BUYBACK_TREASURY"
      | "RELAY_OFFICIAL_OPS_TREASURY"
      | "RELAY_OFFICIAL_DEV_WALLET"
      | "RELAY_OFFICIAL_MINT"
      | "RELAY_OFFICIAL_NETWORK"
      | "RELAY_OFFICIAL_ENABLED"
      | "NEXT_PUBLIC_RELAYPAD_NETWORK"
    >
  > = process.env as Partial<
    Pick<
      NodeJS.ProcessEnv,
      | "RELAY_OFFICIAL_CREATOR_WALLET"
      | "RELAY_OFFICIAL_BUYBACK_TREASURY"
      | "RELAY_OFFICIAL_OPS_TREASURY"
      | "RELAY_OFFICIAL_DEV_WALLET"
      | "RELAY_OFFICIAL_MINT"
      | "RELAY_OFFICIAL_NETWORK"
      | "RELAY_OFFICIAL_ENABLED"
      | "NEXT_PUBLIC_RELAYPAD_NETWORK"
    >
  >,
): RelayOfficialConfig {
  const sources: Record<RelayOfficialRole, string | undefined> = {
    W1: env.RELAY_OFFICIAL_CREATOR_WALLET,
    W2: env.RELAY_OFFICIAL_BUYBACK_TREASURY,
    W3: env.RELAY_OFFICIAL_OPS_TREASURY,
    W4: env.RELAY_OFFICIAL_DEV_WALLET,
  };
  const invalid: RelayOfficialConfig["invalid"] = [];
  const wallets = RELAY_OFFICIAL_ROLES.map((role) => {
    const read = readAddress(sources[role]);
    if (read.invalid) invalid.push({ role, value: read.invalid });
    return {
      role,
      label: RELAY_OFFICIAL_ROLE_META[role].label,
      description: RELAY_OFFICIAL_ROLE_META[role].description,
      address: read.address,
    };
  });
  const mintReadRaw = env.RELAY_OFFICIAL_MINT?.trim() ?? "";
  // The explicit placeholder is an intentional "not announced yet" marker —
  // treated exactly like an unset value so the treasury dashboard and the
  // public token section stay consistent (never a misconfiguration).
  const mintRead =
    mintReadRaw && mintReadRaw !== RELAY_OFFICIAL_MINT_PLACEHOLDER
      ? readAddress(mintReadRaw)
      : { address: null, invalid: null };
  if (mintRead.invalid) invalid.push({ role: "MINT", value: mintRead.invalid });
  return {
    network: relayOfficialNetworkFrom(env),
    wallets,
    mint: mintRead.address,
    anyWalletConfigured: wallets.some((w) => w.address !== null),
    invalid,
    enabled: env.RELAY_OFFICIAL_ENABLED === "true" || env.RELAY_OFFICIAL_ENABLED === "1",
  };
}

function relayOfficialNetworkFrom(
  env: Partial<
    Pick<NodeJS.ProcessEnv, "RELAY_OFFICIAL_NETWORK" | "NEXT_PUBLIC_RELAYPAD_NETWORK">
  >,
): ClusterId {
  if (env.RELAY_OFFICIAL_NETWORK === "mainnet-beta") return "mainnet-beta";
  if (!env.RELAY_OFFICIAL_NETWORK && env.NEXT_PUBLIC_RELAYPAD_NETWORK === "mainnet-beta") {
    return "mainnet-beta";
  }
  return "devnet";
}