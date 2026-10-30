import { describe, expect, it, vi, afterEach } from "vitest";
import {
  getRelayOfficialConfig,
  RELAY_OFFICIAL_MINT_PLACEHOLDER,
} from "@/lib/relay-official/config";
import {
  officialTokenView,
  networkLabelFor,
  type OfficialTokenView,
} from "@/lib/relay-official/token-display";
import { copyText, type CopyResult } from "@/components/official/copy-text";

/* ---------------------------------------------------------------- fixtures */

const W1 = "52Y2w7NXvFk4zUsVGXaq3ai8xBVNV8FX7aME2Vpz2tH";
const RELAY_MINT = "Re1ayMintAddressAAAAAAAAAAAAAAAAAAAAAAAAAAA";

function viewFromConfig(
  env: Record<string, string | undefined>,
): OfficialTokenView {
  return officialTokenView(getRelayOfficialConfig(env));
}

/* ------------------------------------------------- config: placeholder aware */

describe("getRelayOfficialConfig — mint placeholder handling", () => {
  it("treats the exact placeholder value exactly like an unset mint", () => {
    const config = getRelayOfficialConfig({
      DOTPAD_OFFICIAL_MINT: RELAY_OFFICIAL_MINT_PLACEHOLDER,
    });
    expect(config.mint).toBeNull();
    expect(config.invalid.some((i) => i.role === "MINT")).toBe(false);
  });

  it("treats a missing mint as unconfigured (no invalid entry)", () => {
    const config = getRelayOfficialConfig({});
    expect(config.mint).toBeNull();
    expect(config.invalid.some((i) => i.role === "MINT")).toBe(false);
  });

  it("still flags a genuinely invalid mint value as a misconfiguration", () => {
    const config = getRelayOfficialConfig({
      DOTPAD_OFFICIAL_MINT: "not-a-valid-base58-address!!!",
    });
    expect(config.mint).toBeNull();
    expect(config.invalid).toEqual([
      { role: "MINT", value: "not-a-valid-base58-address!!!" },
    ]);
  });

  it("accepts a valid configured mint", () => {
    const config = getRelayOfficialConfig({ DOTPAD_OFFICIAL_MINT: RELAY_MINT });
    expect(config.mint).toBe(RELAY_MINT);
    expect(config.invalid.some((i) => i.role === "MINT")).toBe(false);
  });
});

/* --------------------------------------------- official token view model */

describe("officialTokenView — placeholder state", () => {
  it("renders the exact placeholder with the required badge, message and disabled copy (unset)", () => {
    const view = viewFromConfig({ RELAY_OFFICIAL_NETWORK: "mainnet-beta" });
    expect(view.status).toBe("placeholder");
    expect(view.displayValue).toBe("REPLACE_WITH_OFFICIAL_RELAY_MINT");
    expect(view.displayValue).toBe(RELAY_OFFICIAL_MINT_PLACEHOLDER);
    expect(view.badgeLabel).toBe("CA NOT OFFICIAL YET");
    expect(view.message).toBe(
      "The official $DOT token has not been announced yet.",
    );
    expect(view.copyable).toBe(false);
    expect(view.mint).toBeNull();
    expect(view.explorerHref).toBeNull();
    expect(view.networkLabel).toBe("Solana Mainnet");
  });

  it("renders the identical honest state when the placeholder is explicitly configured", () => {
    const explicit = viewFromConfig({
      DOTPAD_OFFICIAL_MINT: RELAY_OFFICIAL_MINT_PLACEHOLDER,
      RELAY_OFFICIAL_NETWORK: "mainnet-beta",
    });
    const unset = viewFromConfig({ RELAY_OFFICIAL_NETWORK: "mainnet-beta" });
    expect(explicit).toEqual(unset);
  });

  it("never renders a token explorer link for the placeholder", () => {
    const view = viewFromConfig({ RELAY_OFFICIAL_NETWORK: "mainnet-beta" });
    expect(view.explorerHref).toBeNull();
    expect(JSON.stringify(view)).not.toContain("explorer.solana.com");
  });
});
describe("officialTokenView — invalid configuration state", () => {
  it("disables copy and shows a clear error without exposing the raw value", () => {
    const view = viewFromConfig({
      DOTPAD_OFFICIAL_MINT: "%%definitely-not-valid%%",
      RELAY_OFFICIAL_NETWORK: "mainnet-beta",
    });
    expect(view.status).toBe("invalid");
    expect(view.badgeLabel).toBe("INVALID CONFIGURATION");
    expect(view.copyable).toBe(false);
    expect(view.message).toContain("DOTPAD_OFFICIAL_MINT");
    expect(view.message).toContain("not a valid Solana address");
    // The raw invalid value must never be rendered publicly.
    expect(JSON.stringify(view)).not.toContain("definitely-not-valid");
    expect(view.explorerHref).toBeNull();
  });
});

describe("officialTokenView — configured (valid) state", () => {
  it("displays the complete address and enables copying", () => {
    const view = viewFromConfig({
      DOTPAD_OFFICIAL_MINT: RELAY_MINT,
      RELAY_OFFICIAL_NETWORK: "mainnet-beta",
    });
    expect(view.status).toBe("configured");
    expect(view.displayValue).toBe(RELAY_MINT);
    expect(view.mint).toBe(RELAY_MINT);
    expect(view.copyable).toBe(true);
    // Honest badge: a syntactically valid address is NOT proof of official status.
    expect(view.badgeLabel).toBe("NOT YET VERIFIED");
    expect(view.message).toContain("explicitly verified");
  });

  it("links the network-aware explorer only for a configured mint", () => {
    const mainnet = viewFromConfig({
      DOTPAD_OFFICIAL_MINT: RELAY_MINT,
      RELAY_OFFICIAL_NETWORK: "mainnet-beta",
    });
    expect(mainnet.explorerHref).toBe(
      `https://explorer.solana.com/address/${RELAY_MINT}`,
    );
    const devnet = viewFromConfig({
      DOTPAD_OFFICIAL_MINT: RELAY_MINT,
      RELAY_OFFICIAL_NETWORK: "devnet",
    });
    expect(devnet.explorerHref).toBe(
      `https://explorer.solana.com/address/${RELAY_MINT}?cluster=devnet`,
    );
  });
});

describe("networkLabelFor", () => {
  it("maps clusters to human labels", () => {
    expect(networkLabelFor("mainnet-beta")).toBe("Solana Mainnet");
    expect(networkLabelFor("devnet")).toBe("Solana Devnet");
  });
});

/* ------------------------------------------------------ copy functionality */

describe("copyText — clipboard with fallback", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("uses the async Clipboard API when available", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { clipboard: { writeText } });
    const result: CopyResult = await copyText(RELAY_MINT);
    expect(result).toBe("copied");
    expect(writeText).toHaveBeenCalledWith(RELAY_MINT);
  });

  it("falls back to execCommand when the Clipboard API is unavailable", async () => {
    vi.stubGlobal("navigator", {});
    const execCommand = vi.fn().mockReturnValue(true);
    const textarea: Record<string, unknown> = {
      style: {},
      setAttribute: vi.fn(),
      select: vi.fn(),
    };
    vi.stubGlobal("document", {
      body: { appendChild: vi.fn(), removeChild: vi.fn() },
      createElement: vi.fn().mockReturnValue(textarea),
      execCommand,
    });
    const result = await copyText(RELAY_MINT);
    expect(result).toBe("copied-fallback");
    expect(execCommand).toHaveBeenCalledWith("copy");
    expect(textarea.value).toBe(RELAY_MINT);
  });

  it("reports a failure when both paths fail so the UI can show a helpful error", async () => {
    vi.stubGlobal("navigator", {
      clipboard: { writeText: vi.fn().mockRejectedValue(new Error("denied")) },
    });
    vi.stubGlobal("document", {
      body: { appendChild: vi.fn(), removeChild: vi.fn() },
      createElement: vi.fn().mockReturnValue({
        style: {},
        setAttribute: vi.fn(),
        select: vi.fn(),
      }),
      execCommand: vi.fn().mockReturnValue(false),
    });
    const result = await copyText(RELAY_MINT);
    expect(result).toBe("failed");
  });

  it("never copies a truncated display text", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { clipboard: { writeText } });
    await copyText(W1);
    expect(writeText).toHaveBeenCalledWith(W1); // full address, no truncation
  });
});

