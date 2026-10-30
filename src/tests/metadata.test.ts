import { describe, expect, it } from "vitest";
import {
  tokenMetadataSchema,
  validateArtwork,
  validateMetadataUri,
  buildOffchainMetadata,
  parseTokenSocials,
  resolveMetadataHttpUrl,
  ARTWORK_CONSTRAINTS,
  METADATA_URI_MAX,
  PUMP_COMBINED_URI_MAX,
} from "@/lib/metadata";
import { decodeMetadataUri } from "@/lib/token/onchain-metadata";

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

describe("parseTokenSocials (scanner normalization)", () => {
  it("reads standard top-level fields", () => {
    const s = parseTokenSocials({
      name: "Dot",
      website: "https://dotpad.xyz",
      twitter: "https://x.com/dotpad",
      telegram: "https://t.me/dotpad",
    });
    expect(s).toEqual({
      website: "https://dotpad.xyz",
      twitter: "https://x.com/dotpad",
      telegram: "https://t.me/dotpad",
    });
  });

  it("reads the legacy DotPad `social` object and Metaplex `extensions`", () => {
    const legacy = parseTokenSocials({ social: { website: "https://a.example", twitter: "@a", telegram: "https://t.me/a" } });
    expect(legacy).toEqual({ website: "https://a.example", twitter: "https://x.com/a", telegram: "https://t.me/a" });
    const ext = parseTokenSocials({ extensions: { website: "https://b.example", twitter: "https://x.com/b" } });
    expect(ext).toEqual({ website: "https://b.example", twitter: "https://x.com/b", telegram: null });
  });

  it("falls back to external_url as the website", () => {
    const s = parseTokenSocials({ external_url: "https://c.example" });
    expect(s.website).toBe("https://c.example");
  });

  it("drops unsafe protocols and malformed values instead of rendering them", () => {
    const s = parseTokenSocials({
      website: "javascript:alert(1)",
      twitter: "not-a-url",
      telegram: "",
    });
    expect(s).toEqual({ website: null, twitter: null, telegram: null });
  });

  it("returns nulls for missing metadata and never throws on junk", () => {
    expect(parseTokenSocials(null)).toEqual({ website: null, twitter: null, telegram: null });
    expect(parseTokenSocials("garbage")).toEqual({ website: null, twitter: null, telegram: null });
    expect(parseTokenSocials([1, 2, 3])).toEqual({ website: null, twitter: null, telegram: null });
    expect(parseTokenSocials({ name: "no socials here" })).toEqual({ website: null, twitter: null, telegram: null });
  });

  it("keeps valid top-level values over an empty legacy social object", () => {
    const s = parseTokenSocials({ twitter: "https://x.com/correct", social: { twitter: "" } });
    expect(s.twitter).toBe("https://x.com/correct");
  });
});

describe("resolveMetadataHttpUrl", () => {
  it("maps ipfs:// URIs and bare CIDs through the gateway", () => {
    expect(resolveMetadataHttpUrl("ipfs://QmTest")).toBe("https://ipfs.io/ipfs/QmTest");
    expect(resolveMetadataHttpUrl("ipfs://ipfs/QmTest")).toBe("https://ipfs.io/ipfs/QmTest");
    expect(resolveMetadataHttpUrl("QmTest", "gateway.example")).toBe("https://gateway.example/ipfs/QmTest");
  });

  it("passes https/http URIs through and rejects junk", () => {
    expect(resolveMetadataHttpUrl("https://example.com/m.json")).toBe("https://example.com/m.json");
    expect(resolveMetadataHttpUrl("javascript:alert(1)")).toBeNull();
    expect(resolveMetadataHttpUrl("")).toBeNull();
  });
});

describe("decodeMetadataUri (Metaplex metadata account)", () => {
  function buildMetadataAccount(fields: { name: string; symbol: string; uri: string }): Uint8Array {
    const encoder = new TextEncoder();
    const parts: Uint8Array[] = [new Uint8Array([1])]; // key = KeyV1
    parts.push(new Uint8Array(32)); // update authority
    parts.push(new Uint8Array(32)); // mint
    for (const value of [fields.name, fields.symbol, fields.uri]) {
      const bytes = encoder.encode(value);
      const len = new Uint8Array(4);
      new DataView(len.buffer).setUint32(0, bytes.length, true);
      parts.push(len, bytes);
    }
    const total = parts.reduce((n, p) => n + p.length, 0);
    const buf = new Uint8Array(total);
    let offset = 0;
    for (const p of parts) {
      buf.set(p, offset);
      offset += p.length;
    }
    return buf;
  }

  it("extracts the metadata uri from the on-chain account layout", () => {
    const uri = "https://ipfs.io/ipfs/QmDotPadMetadata";
    const data = buildMetadataAccount({ name: "Dot Token", symbol: "DOT", uri });
    expect(decodeMetadataUri(data)).toBe(uri);
  });

  it("returns null for truncated or junk account data", () => {
    expect(decodeMetadataUri(new Uint8Array(10))).toBeNull();
    expect(decodeMetadataUri(new Uint8Array(0))).toBeNull();
  });
});


describe("offchain metadata builder", () => {
  it("writes social links as standard top-level fields (Pump.fun/LaunchLab convention)", () => {
    const m = buildOffchainMetadata(
      {
        name: "Dot",
        symbol: "DOT",
        description: "",
        website: "https://dotpad.example",
        twitter: "@dotpad",
        telegram: "https://t.me/dotpad",
      },
      "https://img/x.png",
    );
    expect(m.image).toBe("https://img/x.png");
    expect(m.website).toBe("https://dotpad.example");
    expect(m.external_url).toBe("https://dotpad.example");
    expect(m.twitter).toBe("https://x.com/dotpad");
    expect(m.telegram).toBe("https://t.me/dotpad");
    // The legacy non-standard `social` object must no longer be written.
    expect("social" in m).toBe(false);
    expect("description" in m).toBe(false);
  });

  it("omits social fields the user left empty", () => {
    const m = buildOffchainMetadata({ name: "Dot", symbol: "DOT" }, "https://img/x.png");
    expect("website" in m).toBe(false);
    expect("twitter" in m).toBe(false);
    expect("telegram" in m).toBe(false);
    expect("external_url" in m).toBe(false);
  });

  it("never writes unsafe social values", () => {
    const m = buildOffchainMetadata(
      {
        name: "Dot",
        symbol: "DOT",
        website: "javascript:alert(1)",
        twitter: "not a real handle!!",
        telegram: "data:text/html,bad",
      },
      "https://img/x.png",
    );
    expect("website" in m).toBe(false);
    expect("external_url" in m).toBe(false);
    expect("twitter" in m).toBe(false);
    expect("telegram" in m).toBe(false);
  });
});

describe("tokenMetadataSchema social validation", () => {
  it("accepts handles and legit URLs for twitter/telegram", () => {
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", twitter: "@dotpad" }).success).toBe(true);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", twitter: "https://x.com/dotpad" }).success).toBe(true);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", telegram: "@dotpadofficial" }).success).toBe(true);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", website: "https://dotpad.xyz" }).success).toBe(true);
  });

  it("rejects unsafe or malformed social values", () => {
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", twitter: "javascript:alert(1)" }).success).toBe(false);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", twitter: "https://evil.com/dotpad" }).success).toBe(false);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", telegram: "ftp://t.me/x" }).success).toBe(false);
    expect(tokenMetadataSchema.safeParse({ name: "D", symbol: "DOT", website: "not-a-url" }).success).toBe(false);
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
    const uri = "https://ipfs.io/ipfs/" + "x".repeat(50);
    expect(uri.length).toBe(71);
    expect(validateMetadataUri(uri).ok).toBe(true);
    expect(validateMetadataUri(uri, METADATA_URI_MAX).ok).toBe(true);
    expect(validateMetadataUri(uri, PUMP_COMBINED_URI_MAX).ok).toBe(false);
    expect(
      validateMetadataUri(
        "https://ipfs.io/ipfs/QmYyQSoTLcPVZZPPHfZKKneRndLpSwXxfxGW8ZdYyNYv66",
        PUMP_COMBINED_URI_MAX,
      ).ok,
    ).toBe(true);
  });
});
