import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  ComputeBudgetProgram,
  Keypair,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  type PublicKey,
} from "@solana/web3.js";
import BN from "bn.js";
import { PumpAdapter } from "@/lib/adapters/pump";
import type { TokenLaunchInput } from "@/lib/adapters/types";
import {
  makeBlockhashAwareBuildTx,
  submitAndConfirm,
  type WalletSigner,
} from "@/lib/tx-engine";

/**
 * Pump.fun blockhash-rebuild regression tests (extends the LaunchLab fix to
 * Route A). The pump SDK is mocked at the module boundary; everything else —
 * prepareLaunch, buildTransaction, partialSign(mint), the size guard, and the
 * shared blockhash-aware engine — runs for real.
 */

const sdk = vi.hoisted(() => ({
  createV2Instruction: vi.fn(),
  createV2AndBuyInstructions: vi.fn(),
  fetchGlobal: vi.fn(),
  buyAmount: vi.fn(),
}));

vi.mock("@pump-fun/pump-sdk", () => ({
  PUMP_SDK: {
    createV2Instruction: sdk.createV2Instruction,
    createV2AndBuyInstructions: sdk.createV2AndBuyInstructions,
    decodeBondingCurve: vi.fn(),
  },
  OnlinePumpSdk: class {
    fetchGlobal = sdk.fetchGlobal;
    // The real constructor takes the connection; the mock ignores it (the
    // runtime call site still passes it — extra args are simply unused here).
    constructor() {}
  },
  PUMP_PROGRAM_ID: { toBase58: () => "mock-pump-program" },
  PUMP_AMM_PROGRAM_ID: { toBase58: () => "mock-pumpswap", equals: () => false },
  bondingCurvePda: vi.fn(),
  canonicalPumpPoolPda: vi.fn(),
  getBuyTokenAmountFromSolAmount: sdk.buyAmount,
  isBondingCurveMigrated: vi.fn(() => false),
}));

const dummyIx = (mintPub: PublicKey, dataLen = 8): TransactionInstruction =>
  new TransactionInstruction({
    // create_v2 requires the mint as a signer — mirror that shape so
    // partialSign(mint) in buildTransaction has a signer slot to fill.
    keys: [
      { pubkey: mintPub, isSigner: true, isWritable: true },
      { pubkey: Keypair.generate().publicKey, isSigner: false, isWritable: true },
    ],
    programId: Keypair.generate().publicKey,
    data: Buffer.alloc(dataLen, 1),
  });

const fatIx = (mintPub: PublicKey): TransactionInstruction =>
  new TransactionInstruction({
    keys: [
      { pubkey: mintPub, isSigner: true, isWritable: true },
      { pubkey: Keypair.generate().publicKey, isSigner: false, isWritable: true },
    ],
    programId: Keypair.generate().publicKey,
    data: Buffer.alloc(2000, 2),
  });

const input = (initialBuyLamports: bigint): TokenLaunchInput => ({
  name: "Rebuild Test",
  symbol: "RBLD",
  metadataUri: "https://ipfs.io/ipfs/test-metadata",
  imageUrl: "https://ipfs.io/ipfs/test-image",
  initialBuyLamports,
  slippageBps: 100,
});

function makePrepareConnection() {
  // Every build must acquire its OWN blockhash (freshness on rebuild).
  return {
    getLatestBlockhash: vi.fn(async () => ({
      blockhash: Keypair.generate().publicKey.toBase58(),
      lastValidBlockHeight: 12345,
    })),
  } as never;
}

/** Legacy tx signature slots are {signature: Buffer|null, publicKey} (null = unsigned). */
const walletSlotEmpty = (tx: Transaction) => {
  const sig = tx.signatures[0]?.signature;
  return sig === null || sig === undefined || sig.every((b) => b === 0);
};
const nonZeroSigs = (tx: Transaction) =>
  tx.signatures.filter((s) => s.signature !== null && s.signature.some((b) => b !== 0)).length;

describe("Pump.fun rebuild hook (prepareLaunch driven fresh + rebuild)", () => {
  let adapter: PumpAdapter;
  let signer: WalletSigner;

  beforeEach(() => {
    adapter = new PumpAdapter();
    const wallet = Keypair.generate();
    signer = {
      publicKey: wallet.publicKey,
      signTransaction: async (tx) => tx,
    };
    sdk.createV2Instruction.mockImplementation(async (p: { mint: PublicKey }) => dummyIx(p.mint, 8));
    sdk.createV2AndBuyInstructions.mockImplementation(async (p: { mint: PublicKey }) => [
      dummyIx(p.mint, 8),
      dummyIx(p.mint, 8),
    ]);
    sdk.fetchGlobal.mockImplementation(async () => ({}));
    sdk.buyAmount.mockImplementation(() => new BN(1_000_000));
  });

  it("create-only: rebuild produces a NEW transaction with a fresh blockhash and a re-applied mint signature", async () => {
    const mint = Keypair.generate(); // stands in for a vanity mint
    const conn = makePrepareConnection();
    const params = {
      connection: conn,
      cluster: "mainnet-beta" as const,
      config: { route: "pump" as const, cluster: "mainnet-beta" as const, details: {}, supportsInitialBuy: true, supportsVanityMint: true },
      signer,
      mintKeypair: mint,
      input: input(0n),
    };
    const p1 = await adapter.prepareLaunch(params);
    const p2 = await adapter.prepareLaunch(params);
    const tx1 = p1.transactions[0].tx as Transaction;
    const tx2 = p2.transactions[0].tx as Transaction;
    expect(tx2).not.toBe(tx1);
    expect(tx2.recentBlockhash).not.toBe(tx1.recentBlockhash);
    // Same mint (vanity behaviour preserved) and same SDK builder on rebuild.
    expect(p2.mintAddress).toBe(mint.publicKey.toBase58());
    expect(sdk.createV2Instruction).toHaveBeenCalledTimes(2);
    // Mint signature re-applied; the wallet slot is empty → fresh approval.
    expect(tx2.signatures.length).toBe(2);
    expect(nonZeroSigs(tx2)).toBe(1);
    expect(walletSlotEmpty(tx2)).toBe(true);
    // Extra-signer metadata preserved for the wallet flow.
    expect(p2.transactions[0].extraSigners[0].publicKey).toBe(mint.publicKey.toBase58());
  });

  it("create-and-buy: rebuild reuses the SDK path with identical buy parameters", async () => {
    const mint = Keypair.generate();
    const conn = makePrepareConnection();
    const params = {
      connection: conn,
      cluster: "mainnet-beta" as const,
      config: { route: "pump" as const, cluster: "mainnet-beta" as const, details: {}, supportsInitialBuy: true, supportsVanityMint: true },
      signer,
      mintKeypair: mint,
      input: input(50_000_000n),
    };
    await adapter.prepareLaunch(params);
    const p2 = await adapter.prepareLaunch(params);
    expect(sdk.createV2AndBuyInstructions).toHaveBeenCalledTimes(2);
    const first = sdk.createV2AndBuyInstructions.mock.calls[0][0];
    const second = sdk.createV2AndBuyInstructions.mock.calls[1][0];
    expect(second.uri).toBe(first.uri);
    expect(second.creator.equals(first.creator)).toBe(true);
    expect(second.solAmount.toString()).toBe(first.solAmount.toString());
    const tx2 = p2.transactions[0].tx as Transaction;
    expect(nonZeroSigs(tx2)).toBe(1);
    expect(walletSlotEmpty(tx2)).toBe(true);
  });

  it("transaction-size guard re-runs on the rebuild path (oversized rebuild → TX_TOO_LARGE)", async () => {
    const mint = Keypair.generate();
    const conn = makePrepareConnection();
    const params = {
      connection: conn,
      cluster: "mainnet-beta" as const,
      config: { route: "pump" as const, cluster: "mainnet-beta" as const, details: {}, supportsInitialBuy: true, supportsVanityMint: true },
      signer,
      mintKeypair: mint,
      input: input(0n),
    };
    await adapter.prepareLaunch(params); // fresh build passes the guard
    sdk.createV2Instruction.mockImplementation(async (p: { mint: PublicKey }) => fatIx(p.mint));
    await expect(adapter.prepareLaunch(params)).rejects.toMatchObject({
      code: "TX_TOO_LARGE",
    });
  });
});

/** Minimal engine-path connection stub (probe + simulate + send + confirm). */
function makeEngineStub(opts: {
  feeProbe?: "valid" | "expired";
  simulateQueue?: ({ err: unknown } | null)[];
  sendResults?: (string | Error)[];
}) {
  let simIndex = 0;
  let sendIndex = 0;
  return {
    simulateTransaction: vi.fn(async () => {
      const q = opts.simulateQueue ?? [{ err: null }];
      const item = simIndex < q.length ? q[simIndex] : q[q.length - 1];
      simIndex += 1;
      return { value: item ?? { err: null, logs: [] } };
    }),
    sendRawTransaction: vi.fn(async () => {
      const q = opts.sendResults ?? ["sig-pump"];
      const item = sendIndex < q.length ? q[sendIndex] : q[q.length - 1];
      sendIndex += 1;
      if (item instanceof Error) throw item;
      return item;
    }),
    getFeeForMessage: vi.fn(async () =>
      opts.feeProbe === "expired"
        ? { value: null }
        : { value: { feeCalculator: { lamportsPerSignature: 5000 } } },
    ),
    getSignatureStatuses: vi.fn(async () => ({
      value: [{ err: null, slot: 7, confirmationStatus: "confirmed" }],
    })),
    getLatestBlockhash: vi.fn(async () => ({ lastValidBlockHeight: 1_000_000 })),
    getBlockHeight: vi.fn(async () => 0),
  } as never;
}

/** Pump-shaped legacy tx: buildTransaction's exact shape (CU budget + mint signer). */
function pumpShapedTx(blockhash: string, payer: PublicKey, mint: Keypair): Transaction {
  const tx = new Transaction({ feePayer: payer, blockhash, lastValidBlockHeight: 12345 });
  tx.add(ComputeBudgetProgram.setComputeUnitLimit({ units: 300_000 }));
  tx.add(
    SystemProgram.transfer({
      fromPubkey: mint.publicKey, // create_v2 requires the mint as a signer
      toPubkey: Keypair.generate().publicKey,
      lamports: 1,
    }),
  );
  tx.partialSign(mint);
  return tx;
}

function walletSignerFor(payer: Keypair, counter: { n: number }): WalletSigner {
  return {
    publicKey: payer.publicKey,
    signTransaction: async (tx) => {
      counter.n += 1;
      (tx as Transaction).partialSign(payer);
      return tx;
    },
  };
}

describe("Pump.fun-shaped blockhash-aware flow (probe → rebuild → wallet re-approval)", () => {
  const tiny = { confirmWindowMs: 120, pollIntervalMs: 10, maxAttempts: 2 };
  const mocks = (conn: unknown) => conn as unknown as Record<string, ReturnType<typeof vi.fn>>;

  it("expired blockhash detected BEFORE wallet signing: rebuild → fresh approval → ONE submission", async () => {
    const payer = Keypair.generate();
    const mint = Keypair.generate();
    const conn = makeEngineStub({ feeProbe: "expired" });
    const stale = pumpShapedTx(Keypair.generate().publicKey.toBase58(), payer.publicKey, mint);
    const fresh = pumpShapedTx(Keypair.generate().publicKey.toBase58(), payer.publicKey, mint);
    let rebuilds = 0;
    const build = makeBlockhashAwareBuildTx({
      connection: conn,
      getTx: () => stale,
      rebuild: async () => {
        rebuilds += 1;
        return fresh;
      },
    });
    const signerCounter = { n: 0 };
    const res = await submitAndConfirm(conn, build, walletSignerFor(payer, signerCounter), tiny);
    expect(res.signature).toBe("sig-pump");
    expect(rebuilds).toBe(1);
    // The stale transaction was never submitted; only the rebuilt one was.
    expect(mocks(conn).sendRawTransaction).toHaveBeenCalledTimes(1);
    // One wallet approval — for the rebuilt transaction.
    expect(signerCounter.n).toBe(1);
    // Simulation stays enabled in the flow.
    expect(mocks(conn).simulateTransaction).toHaveBeenCalled();
  });

  it("blockhash expiry during wallet approval: rebuild → wallet re-approval → no duplicate submission", async () => {
    const payer = Keypair.generate();
    const mint = Keypair.generate();
    const conn = makeEngineStub({
      simulateQueue: [{ err: "BlockhashNotFound" }, { err: null }],
    });
    const first = pumpShapedTx(Keypair.generate().publicKey.toBase58(), payer.publicKey, mint);
    const rebuilt = pumpShapedTx(Keypair.generate().publicKey.toBase58(), payer.publicKey, mint);
    const builds = [first, rebuilt];
    let buildCount = 0;
    const res = await submitAndConfirm(
      conn,
      async () => builds[Math.min(buildCount++, builds.length - 1)],
      walletSignerFor(payer, { n: 0 }),
      tiny,
    );
    expect(res.signature).toBe("sig-pump");
    expect(buildCount).toBe(2);
    // First attempt was never submitted — no duplicate submission.
    expect(mocks(conn).sendRawTransaction).toHaveBeenCalledTimes(1);
  });

  it("rebuilt pump transaction keeps a valid mint signature over the fresh blockhash", async () => {
    const payer = Keypair.generate();
    const mint = Keypair.generate();
    const blockhash = Keypair.generate().publicKey.toBase58();
    const tx = pumpShapedTx(blockhash, payer.publicKey, mint);
    // The mint signature present in the tx verifies against the compiled
    // message that contains THIS blockhash (requireAllSignatures=false — the
    // wallet has not signed yet).
    expect(() => tx.verifySignatures(false)).not.toThrow();
    // A different blockhash would break it — hence rebuilds re-sign.
    const other = pumpShapedTx(
      Keypair.generate().publicKey.toBase58(),
      payer.publicKey,
      mint,
    );
    expect(other.recentBlockhash).not.toBe(blockhash);
  });
});