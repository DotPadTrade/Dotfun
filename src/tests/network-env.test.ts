import { describe, expect, it, afterEach, vi } from "vitest";
import { resolveClusterFromEnv, currentNetworkCluster, currentNetworkRaw } from "@/lib/network-env";

describe("resolveClusterFromEnv (Phase 1 dual-read)", () => {
  it("uses the new DOTPAD variable alone", () => {
    expect(resolveClusterFromEnv("mainnet-beta", undefined)).toBe("mainnet-beta");
    expect(resolveClusterFromEnv("devnet", undefined)).toBe("devnet");
  });

  it("falls back to the legacy RelayPad variable when the new one is unset", () => {
    expect(resolveClusterFromEnv(undefined, "mainnet-beta")).toBe("mainnet-beta");
    expect(resolveClusterFromEnv(undefined, "devnet")).toBe("devnet");
  });

  it("the new DOTPAD variable wins when both are set", () => {
    expect(resolveClusterFromEnv("devnet", "mainnet-beta")).toBe("devnet");
    expect(resolveClusterFromEnv("mainnet-beta", "devnet")).toBe("mainnet-beta");
  });

  it("defaults to devnet when neither variable is set", () => {
    expect(resolveClusterFromEnv(undefined, undefined)).toBe("devnet");
  });

  it("treats empty new values as unset and falls back to legacy", () => {
    expect(resolveClusterFromEnv("", "mainnet-beta")).toBe("mainnet-beta");
    expect(resolveClusterFromEnv("  ", "devnet")).toBe("devnet");
  });

  it("a set-but-unrecognized new value wins over legacy and resolves to devnet", () => {
    expect(resolveClusterFromEnv("garbage", "mainnet-beta")).toBe("devnet");
  });

  it("tolerates surrounding whitespace", () => {
    expect(resolveClusterFromEnv(" mainnet-beta ", undefined)).toBe("mainnet-beta");
  });
});

describe("currentNetworkCluster / currentNetworkRaw (process.env dual-read)", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("prefers the new DOTPAD variable", () => {
    vi.stubEnv("NEXT_PUBLIC_DOTPAD_NETWORK", "mainnet-beta");
    vi.stubEnv("NEXT_PUBLIC_RELAYPAD_NETWORK", "devnet");
    expect(currentNetworkCluster()).toBe("mainnet-beta");
    expect(currentNetworkRaw()).toBe("mainnet-beta");
  });

  it("falls back to the legacy RelayPad variable", () => {
    vi.stubEnv("NEXT_PUBLIC_RELAYPAD_NETWORK", "mainnet-beta");
    expect(currentNetworkCluster()).toBe("mainnet-beta");
    expect(currentNetworkRaw()).toBe("mainnet-beta");
  });

  it("treats an empty new variable as unset", () => {
    vi.stubEnv("NEXT_PUBLIC_DOTPAD_NETWORK", "");
    vi.stubEnv("NEXT_PUBLIC_RELAYPAD_NETWORK", "devnet");
    expect(currentNetworkCluster()).toBe("devnet");
    expect(currentNetworkRaw()).toBe("devnet");
  });

  it("returns undefined when neither variable is set", () => {
    vi.stubEnv("NEXT_PUBLIC_DOTPAD_NETWORK", undefined);
    vi.stubEnv("NEXT_PUBLIC_RELAYPAD_NETWORK", undefined);
    expect(currentNetworkRaw()).toBeUndefined();
    expect(currentNetworkCluster()).toBe("devnet");
  });
});
