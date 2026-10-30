import { describe, expect, it } from "vitest";
import {
  tokenMetadataSchema,
  validateArtwork,
  validateMetadataUri,
  buildOffchainMetadata,
  ARTWORK_CONSTRAINTS,
  METADATA_URI_MAX,
  PUMP_COMBINED_URI_MAX,
} from "@/lib/metadata";

describe("token metadata validation", () => {
  it("rejects symbols over 10 chars (LaunchLab hard cap)", () => {
    const r = tokenMetadataSchema.safeParse({
      name: "T",
      symbol: "ELEVENCHARS",
    });
    expect(r.success).toBe(false);
  });

  it("rejects non-alphanumeric symbols", () => {
    const r = tokenMetadataSchema.safeParse({ name: "T", symbol: "AB-C" });
    expect(r.success).toBe(false);
  });

  it("accepts a valid minimal form", () => {
    const r = tokenMetadataSchema.safeParse({ name: "Relay", symbol: "RLY" });
    expect(r.success).toBe(true);
  });

  it("enforces the URL rule for website links", () => {
    const r = tokenMetadataSchema.safeParse({
      name: "Relay",
      symbol: "RLY",
      website: "not-a-url",
    });
    expect(r.success).toBe(false);
  });
});

describe("artwork validation", () => {
  it("rejects oversized files", () => {
    const r = validateArtwork(ARTWORK_CONSTRAINTS.maxBytes + 1, "image/png");
    expect(r.ok).toBe(false);
  });
  it("rejects disallowed mime types", () => {
    const r = validateArtwork(1000, "application/pdf");
    expect(r.ok).toBe(false);
  });
  it("accepts a valid png", () => {
    const r = validateArtwork(1000, "image/png");
    expect(r.ok).toBe(true);
  });
});

describe("metadata uri validation", () => {
  it("accepts https and ipfs URIs", () => {
    expect(validateMetadataUri("https://ipfs.io/ipfs/abc").ok).toBe(true);
    expect(validateMetadataUri("ipfs://abc").ok).toBe(true);
  });
  it("rejects empty and overly long URIs", () => {
    expect(validateMetadataUri("").ok).toBe(false);
    expect(validateMetadataUri("https://a.com/" + "x".repeat(500)).ok).toBe(false);
  });
  it("supports route-aware URI caps (P0.1)", () => {
    // 71 chars — one past the derived maximum for Pump.fun's bundled
    // create+buy path (1231/1232 wire bytes at a 70-character URI).
    const uri = "https://ipfs.io/ipfs/" + "x".repeat(50);
    expect(uri.length).toBe(71);
    expect(validateMetadataUri(uri).ok).toBe(true); // default cap (400)
    expect(validateMetadataUri(uri, METADATA_URI_MAX).ok).toBe(true);
    expect(validateMetadataUri(uri, PUMP_COMBINED_URI_MAX).ok).toBe(false);
    // The default gateway shape (~67 chars) still passes the tight cap.
    expect(
      validateMetadataUri(
        "https://ipfs.io/ipfs/QmYyQSoTLcPVZZPPHfZKKneRndLpSwXxfxGW8ZdYyNYv66",
        PUMP_COMBINED_URI_MAX,
      ).ok,
    ).toBe(true);
  });
});

describe("offchain metadata builder", () => {
  it("includes socials only when provided", () => {
    const m = buildOffchainMetadata(
      { name: "Relay", symbol: "RLY", description: "", twitter: "@relaypad" },
      "https://img/x.png",
    );
    expect(m.image).toBe("https://img/x.png");
    expect(m.social).toEqual({ twitter: "@relaypad" });
    expect("description" in m).toBe(false);
  });
});
