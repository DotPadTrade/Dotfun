import { beforeEach, describe, expect, it, vi } from "vitest";
import { PublicKey, type Connection } from "@solana/web3.js";
import {
  fetchPumpswapPools,
  lastPumpswapRpcStats,
  resetPumpswapCaches,
} from "@/lib/discovery/pumpswap";

/**
 * PumpSwap pool provider regression tests (pumpfun.pool fix).
 *
 * Live evidence (2026-10): the getProgramAccounts scan over the PumpSwap AMM
 * program (~9.6k pools) is rejected by throughput-limited providers with 429
 * on every attempt while cheaper RPCs succeed — hence the tiered fallback to
 * the documented public cluster endpoint. Pool identity: WSOL can sit on
 * either side of a pair, so the discovered token is the non-WSOL side
 * (verified against live accounts: the vault at slice+96 holds the base
 * side, the vault at slice+128 holds the quote side).
 */

const WSOL = "So11111111111111111111111111111111111111112";
const TOKEN = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const POOL_ADDR = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4";
const VAULT_BASE = "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"; // slice+96 (base side vault)
const VAULT_QUOTE = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"; // slice+128 (quote side vault)

const ALCHEMY_429 = new Error(
  '429 Too Many Requests: {"jsonrpc":"2.0","error":{"code":429,"message":"Your app has exceeded its compute units per second capacity"}}',
);

/**
 * One synthetic 261-byte pool account. baseMint sits at slice+0 (abs 43),
 * quoteMint at slice+32 (abs 75), the base-side vault at slice+96 and the
 * quote-side vault at slice+128 — the verified on-chain layout.
 */
function syntheticPoolSlice(baseMint: string, quoteMint: string) {
  const acct = Buffer.alloc(261);
  acct.set(new PublicKey(baseMint).toBuffer(), 43 + 0);
  acct.set(new PublicKey(quoteMint).toBuffer(), 43 + 32);
  acct.set(new PublicKey(VAULT_BASE).toBuffer(), 43 + 96);
  acct.set(new PublicKey(VAULT_QUOTE).toBuffer(), 43 + 128);
  return {
    pubkey: new PublicKey(POOL_ADDR),
    account: { data: acct.subarray(43, 43 + 160) },
  };
}

/**
 * Connection stub: the GPA returns the synthetic pool (or throws); the
 * balance batches return the configured amounts for the two vault slots
 * (base-side vault amount, quote-side vault amount) and 6 decimals for mints.
 */
function stubConn(opts: {
  gpa?: () => Promise<unknown>;
  baseVaultAmount?: bigint;
  quoteVaultAmount?: bigint;
}) {
  const baseVaultAmount = opts.baseVaultAmount ?? 2_000_000n;
  const quoteVaultAmount = opts.quoteVaultAmount ?? 1_000_000n;
  return {
    getProgramAccounts: vi.fn(opts.gpa ?? (async () => [syntheticPoolSlice(WSOL, TOKEN)])),
    getMultipleAccountsInfo: vi.fn(async (keys: PublicKey[]) =>
      keys.map((k) => {
        const key = k.toBase58();
        if (key === VAULT_BASE) {
          const d = Buffer.alloc(72);
          d.writeBigUInt64LE(baseVaultAmount, 64);
          return { data: d };
        }
        if (key === VAULT_QUOTE) {
          const d = Buffer.alloc(72);
          d.writeBigUInt64LE(quoteVaultAmount, 64);
          return { data: d };
        }
        const d = Buffer.alloc(45);
        d[44] = 6;
        return { data: d };
      }),
    ),
  } as unknown as Connection;
}

const mocks = (conn: unknown) => conn as unknown as Record<string, ReturnType<typeof vi.fn>>;

beforeEach(() => {
  resetPumpswapCaches();
});

describe("pumpfun.pool provider — tiered pool-list acquisition", () => {
  it("configured provider succeeds → pools returned, fallback never used", async () => {
    const primary = stubConn({});
    const fallback = stubConn({});
    const feed = await fetchPumpswapPools(primary, {
      fallbackConnection: fallback,
      now: 1_700_000_000_000,
    });
    expect(feed.ok).toBe(true);
    expect(feed.error).toBeNull();
    expect(feed.tokens).toHaveLength(1);
    expect(feed.tokens[0].mint).toBe(TOKEN); // the non-WSOL side
    expect(feed.tokens[0].source).toBe("pumpfun.pool");
    expect(feed.tokens[0].status).toBe("pool");
    expect(feed.tokens[0].poolAddress).toBe(POOL_ADDR);
    expect(mocks(primary).getProgramAccounts).toHaveBeenCalledTimes(1);
    expect(mocks(fallback).getProgramAccounts).not.toHaveBeenCalled();
    expect(lastPumpswapRpcStats().pools).toBe(1);
  });

  it("token identity resolves correctly when WSOL is on the quote side", async () => {
    // Arrangement B: token as baseMint (slice+0), WSOL as quoteMint.
    const primary = stubConn({
      gpa: async () => [syntheticPoolSlice(TOKEN, WSOL)],
      baseVaultAmount: 1_000_000n, // base-side vault holds the token
      quoteVaultAmount: 2_000_000n, // quote-side vault holds WSOL
    });
    const feed = await fetchPumpswapPools(primary, { now: 1_700_000_000_000 });
    expect(feed.ok).toBe(true);
    expect(feed.tokens).toHaveLength(1);
    expect(feed.tokens[0].mint).toBe(TOKEN);
    expect(feed.tokens[0].quoteSymbol).toBe("SOL");
    // price = quote/token = 2e6/1e6 (both 6 decimals in the fixture).
    expect(feed.tokens[0].priceQuote).toBe(2);
    expect(feed.tokens[0].liquidityQuote).toBe(2);
  });

  it("configured provider 429 (Alchemy CU limit) → public-endpoint fallback returns the pools", async () => {
    const primary = stubConn({ gpa: async () => Promise.reject(ALCHEMY_429) });
    const fallback = stubConn({});
    const feed = await fetchPumpswapPools(primary, {
      fallbackConnection: fallback,
      now: 1_700_000_000_000,
    });
    expect(feed.ok).toBe(true);
    expect(feed.error).toBeNull();
    expect(feed.tokens).toHaveLength(1);
    expect(feed.tokens[0].mint).toBe(TOKEN);
    expect(feed.tokens[0].priceQuote).toBe(2); // 2e6 WSOL / 1e6 token (6 dec each)
    expect(feed.tokens[0].liquidityQuote).toBe(2);
    expect(mocks(primary).getProgramAccounts).toHaveBeenCalledTimes(1);
    expect(mocks(fallback).getProgramAccounts).toHaveBeenCalledTimes(1);
  });

  it("both tiers fail → contained error feed (ok:false, never a throw, no fabricated pools)", async () => {
    const primary = stubConn({ gpa: async () => Promise.reject(ALCHEMY_429) });
    const fallback = stubConn({ gpa: async () => Promise.reject(new Error("connection interrupted")) });
    const feed = await fetchPumpswapPools(primary, {
      fallbackConnection: fallback,
      now: 1_700_000_000_000,
    });
    expect(feed.ok).toBe(false);
    expect(feed.tokens).toHaveLength(0);
    expect(String(feed.error).length).toBeGreaterThan(0);
    expect(lastPumpswapRpcStats().pools).toBe(0);
  });

  it("no fallback connection configured → behaves exactly as before (contained failure)", async () => {
    const primary = stubConn({ gpa: async () => Promise.reject(ALCHEMY_429) });
    const feed = await fetchPumpswapPools(primary, { now: 1_700_000_000_000 });
    expect(feed.ok).toBe(false);
    expect(feed.tokens).toHaveLength(0);
    expect(String(feed.error)).toContain("429");
  });
});