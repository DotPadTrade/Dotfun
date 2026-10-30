import { describe, expect, it } from "vitest";
import type { Connection } from "@solana/web3.js";
import { PublicKey } from "@solana/web3.js";
import {
  estimateDifficulty,
  isValidVanityPattern,
  matchesPattern,
  searchVanityKeypair,
  verifyMintMatchesVanity,
  type VanityPattern,
} from "@/lib/vanity/vanity-core";
import {
  decodePoolSlice,
  fetchPumpswapPools,
  lastPumpswapRpcStats,
  resetPumpswapCaches,
} from "@/lib/discovery/pumpswap";

describe("vanity pattern validation", () => {
  it("accepts base58 patterns up to 8 chars", () => {
    expect(isValidVanityPattern("R")).toBe(true);
    expect(isValidVanityPattern("RLYPAD")).toBe(true);
    expect(isValidVanityPattern("0OIl")).toBe(false); // non-base58 chars
    expect(isValidVanityPattern("")).toBe(false);
    expect(isValidVanityPattern("123456789")).toBe(false); // > 8
  });
});

describe("pattern matching", () => {
  const p: VanityPattern = { kind: "prefix", value: "RLY" };
  it("matches prefixes", () => {
    expect(matchesPattern("RLYabcd", p)).toBe(true);
    expect(matchesPattern("abcdRLY", p)).toBe(false);
  });
  it("matches suffixes and contains", () => {
    expect(matchesPattern("abcdRLY", { kind: "suffix", value: "RLY" })).toBe(true);
    expect(matchesPattern("abRLYcd", { kind: "contains", value: "RLY" })).toBe(true);
  });
});

describe("difficulty estimation", () => {
  it("grows honestly with pattern length", () => {
    const one = estimateDifficulty("A");
    const two = estimateDifficulty("AB");
    expect(two.expectedAttempts).toBeGreaterThan(one.expectedAttempts * 30);
    expect(two.expectedAttempts).toBeLessThan(one.expectedAttempts * 36);
  });
});

describe("bounded search", () => {
  it("respects maxAttempts and cancellation", () => {
    const res = searchVanityKeypair({ kind: "prefix", value: "ZZZZZZZZ" }, {
      maxAttempts: 3000,
      isCancelled: () => false,
      batchSize: 1000,
    });
    expect(res.keypair).toBeNull();
    expect(res.attempts).toBe(3000);
  });

  it("stops when cancelled", () => {
    const res = searchVanityKeypair({ kind: "prefix", value: "ZZZZZZZZ" }, {
      maxAttempts: 1_000_000,
      isCancelled: () => true,
      batchSize: 1000,
    });
    expect(res.attempts).toBe(0);
  });

  it("finds a match for an easy pattern and verifies round-trip", () => {
    const res = searchVanityKeypair({ kind: "prefix", value: "R" }, {
      maxAttempts: 5000,
      isCancelled: () => false,
      batchSize: 500,
    });
    expect(res.keypair).not.toBeNull();
    if (res.keypair) {
      expect(res.keypair.publicKey.toBase58().startsWith("R")).toBe(true);
      expect(verifyMintMatchesVanity(res.keypair.secretKey, res.keypair.publicKey.toBase58())).toBe(true);
    }
  });

  it("finds a case-insensitive suffix match and verifies it against the real key", () => {
    const res = searchVanityKeypair(
      { kind: "suffix", value: "aB", caseInsensitive: true },
      { maxAttempts: 200_000, isCancelled: () => false, batchSize: 1000 },
    );
    expect(res.keypair).not.toBeNull();
    if (res.keypair) {
      const addr = res.keypair.publicKey.toBase58();
      // The real address must genuinely contain the pattern in some case.
      expect(addr.toLowerCase().endsWith("ab")).toBe(true);
      // Round-trip: the secret key really controls that exact address.
      expect(verifyMintMatchesVanity(res.keypair.secretKey, addr)).toBe(true);
    }
  });
});

describe("pumpswap discovery RPC volume", () => {
  it("decodePoolSlice works with the trimmed 160-byte slice", () => {
    // Build a minimal 160-byte buffer with the four pubkeys we decode.
    const buf = Buffer.alloc(160);
    const put = (off: number, b58: string) =>
      buf.set(new PublicKey(b58).toBuffer(), off);
    put(0, "So11111111111111111111111111111111111111112"); // baseMint
    put(32, "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"); // quoteMint
    put(96, "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"); // baseVault
    put(128, "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"); // quoteVault
    const dec = decodePoolSlice(buf);
    expect(dec).not.toBeNull();
    expect(dec!.baseMint).toBe("So11111111111111111111111111111111111111112");
    expect(dec!.quoteMint).toBe("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
    expect(dec!.baseVault).toBe("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R");
    expect(dec!.quoteVault).toBe("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");
  });

  it("reuses the pool list within its TTL and caches immutable mint decimals", async () => {
    resetPumpswapCaches();
    const { PublicKey: PK } = await import("@solana/web3.js");

    // Build one synthetic 261-byte "pool account" (only the first 160 decoded
    // bytes matter; dataSize filter is applied server-side).
    const acct = Buffer.alloc(261);
    acct.set(new PK("So11111111111111111111111111111111111111112").toBuffer(), 43 + 0); // baseMint
    acct.set(new PK("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v").toBuffer(), 43 + 32); // quoteMint
    acct.set(new PK("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R").toBuffer(), 43 + 96); // baseVault
    acct.set(new PK("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb").toBuffer(), 43 + 128); // quoteVault

    let gpaCalls = 0;
    let multiCalls = 0;
    let multiKeys = 0;
    const conn = {
      getProgramAccounts: async () => {
        gpaCalls++;
        // Mimic the RPC's dataSlice: the returned data starts at offset 43
        // and is 160 bytes long (what decodePoolSlice expects).
        return [{ pubkey: new PK("JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"), account: { data: acct.subarray(43, 43 + 160) } }];
      },
      getMultipleAccountsInfo: async (keys: PublicKey[]) => {
        multiCalls++;
        multiKeys += keys.length;
        return keys.map((k) => {
          const key = k.toBase58();
          // Vaults get token-account-shaped data (amount u64 LE @64, 165 bytes);
          // mints get mint-shaped data (decimals u8 @44, 82 bytes).
          if (key === "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R" || key === "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb") {
            const d = Buffer.alloc(72);
            d.writeBigUInt64LE(1_000_000n, 64);
            return { data: d };
          }
          const d = Buffer.alloc(45);
          d[44] = 6;
          return { data: d };
        });
      },
    } as unknown as Connection;

    const t0 = 1_700_000_000_000;
    const feed1 = await fetchPumpswapPools(conn, { now: t0 });
    const s1 = lastPumpswapRpcStats();
    expect(feed1.ok).toBe(true);
    expect(feed1.tokens).toHaveLength(1);
    expect(gpaCalls).toBe(1);
    expect(s1.gpaCalls).toBe(1);
    expect(s1.poolListFromCache).toBe(false);
    // Cold run: 1 multi call for vaults + 1 for mints (single pool).
    expect(multiCalls).toBe(2);
    expect(multiKeys).toBe(4); // 2 vaults + 2 mints
    expect(feed1.tokens[0].priceQuote).toBe(1); // 1e6 base (6 dec) / 1e6 quote (6 dec)
    expect(feed1.tokens[0].liquidityQuote).toBe(1);

    // Second run inside the TTL: no GPA scan, no mint re-fetch (immutable).
    const feed2 = await fetchPumpswapPools(conn, { now: t0 + 60_000 });
    const s2 = lastPumpswapRpcStats();
    expect(feed2.ok).toBe(true);
    expect(feed2.tokens).toHaveLength(1);
    expect(s2.poolListFromCache).toBe(true);
    expect(s2.gpaCalls).toBe(0);
    expect(gpaCalls).toBe(1); // unchanged — scan skipped
    expect(multiCalls).toBe(3); // only the vault batch ran again
    expect(multiKeys).toBe(6); // run1: 2 vaults + 2 mints; run2: +2 vaults (mints cached)
  });

  it("a failing provider (e.g. Alchemy 429) yields a contained error feed, never a throw", async () => {
    // Isolation guarantee for launch flows: discovery failures stay inside
    // the discovery layer (ok:false + error text) and cannot propagate as
    // exceptions into any shared module used by launch preparation.
    resetPumpswapCaches();
    const throwing = {
      getProgramAccounts: async () => {
        throw new Error("429 Too Many Requests: compute units per second capacity exceeded");
      },
    } as unknown as Connection;
    const feed = await fetchPumpswapPools(throwing, { now: 1_700_000_000_000 });
    expect(feed.ok).toBe(false);
    expect(feed.tokens).toHaveLength(0);
    expect(feed.error).toContain("429");
  });
});
