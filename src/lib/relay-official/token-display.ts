import type { ClusterId } from "../constants";
import { explorerUrl } from "../constants";
import {
  RELAY_OFFICIAL_MINT_PLACEHOLDER,
  type RelayOfficialConfig,
} from "./config";

/**
 * View model for the public "Official $RELAY Token" section.
 *
 * Pure and server/client-safe: derived entirely from the official-token
 * configuration (the single source of truth used by the treasury dashboard).
 *
 * Honesty rules encoded here:
 * - A missing or explicit-placeholder mint renders the exact placeholder
 *   string with a "CA NOT OFFICIAL YET" badge and copying disabled.
 * - A configured value that is not a valid Solana public address renders an
 *   error state with copying disabled; the raw invalid value is never exposed.
 * - A configured VALID Solana public address enables copying, but the badge
 *   stays "NOT YET VERIFIED": a syntactically valid address does not prove
 *   the token is the official $RELAY. Official status requires explicit
 *   verification (future on-chain verification step).
 */

export const OFFICIAL_TOKEN_NAME = "RelayPad";
export const OFFICIAL_TOKEN_SYMBOL = "$RELAY";

export type OfficialTokenStatus = "placeholder" | "invalid" | "configured";

export interface OfficialTokenView {
  status: OfficialTokenStatus;
  network: ClusterId;
  networkLabel: string;
  /** Exact string rendered in the CA row. */
  displayValue: string;
  /** The real mint address — only when status is "configured". */
  mint: string | null;
  copyable: boolean;
  badgeLabel: string;
  message: string;
  /** Network-aware explorer link — only for a configured valid mint. */
  explorerHref: string | null;
}

export function networkLabelFor(cluster: ClusterId): string {
  return cluster === "mainnet-beta" ? "Solana Mainnet" : "Solana Devnet";
}

export function officialTokenView(
  config: RelayOfficialConfig,
): OfficialTokenView {
  const networkLabel = networkLabelFor(config.network);
  const mintInvalid = config.invalid.find((entry) => entry.role === "MINT");

  if (config.mint) {
    return {
      status: "configured",
      network: config.network,
      networkLabel,
      displayValue: config.mint,
      mint: config.mint,
      copyable: true,
      badgeLabel: "NOT YET VERIFIED",
      message:
        "Valid Solana address format. Official status is confirmed only after the mint has been explicitly verified on-chain.",
      explorerHref: explorerUrl(config.network, "address", config.mint),
    };
  }

  if (mintInvalid) {
    return {
      status: "invalid",
      network: config.network,
      networkLabel,
      // The raw invalid value is never exposed publicly.
      displayValue: RELAY_OFFICIAL_MINT_PLACEHOLDER,
      mint: null,
      copyable: false,
      badgeLabel: "INVALID CONFIGURATION",
      message:
        "RELAY_OFFICIAL_MINT is set but is not a valid Solana address. Fix the configuration to enable the official address display.",
      explorerHref: null,
    };
  }

  // Unset or the explicit placeholder — the official token has not been
  // announced yet. Renders the exact placeholder string, never as an address.
  return {
    status: "placeholder",
    network: config.network,
    networkLabel,
    displayValue: RELAY_OFFICIAL_MINT_PLACEHOLDER,
    mint: null,
    copyable: false,
    badgeLabel: "CA NOT OFFICIAL YET",
    message: "The official $RELAY token has not been announced yet.",
    explorerHref: null,
  };
}
