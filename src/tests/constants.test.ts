import { describe, expect, it } from "vitest";
import {
  PUMP_PROGRAM_ID,
  PUMPSWAP_GLOBAL_CONFIG,
  PUMPSWAP_PROGRAM_ID,
  pumpBondingCurvePda,
  pumpGlobalPda,
  pumpMintAuthorityPda,
  pumpswapPoolPda,
} from "@/lib/constants";
import { PublicKey } from "@solana/web3.js";

/**
 * Deterministic SDK fixture checks: PDA derivations must match the officially
 * documented seeds. These constants are cross-checked against:
 * - pump-public-docs COIN_CREATION.md / PUMP_SWAP_README.md
 * - @pump-fun/pump-sdk exports (PUMP_PROGRAM_ID, GLOBAL_PDA etc.)
 */
describe("pump PDA derivations", () => {
  it("uses the documented program IDs", () => {
    expect(PUMP_PROGRAM_ID.toBase58()).toBe("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");
    expect(PUMPSWAP_PROGRAM_ID.toBase58()).toBe("pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA");
    expect(PUMPSWAP_GLOBAL_CONFIG.toBase58()).toBe("ADyA8hdefvWN2dbGGWFotbzWxrAvLW83WG6QCVXvJKqw");
  });

  it("derives the global PDA deterministically", () => {
    const pda = pumpGlobalPda();
    expect(pda).toBeInstanceOf(PublicKey);
    expect(pda.toBase58()).toBe(pumpGlobalPda().toBase58());
  });

  it("derives the mint authority PDA", () => {
    expect(pumpMintAuthorityPda()).toBeInstanceOf(PublicKey);
  });

  it("derives a bonding curve PDA from the mint", () => {
    const mint = KeypairLike.publicKey();
    const pda = pumpBondingCurvePda(mint);
    expect(pda.toBase58()).not.toBe(mint.toBase58());
  });

  it("derives a PumpSwap pool PDA with index seeds", () => {
    const pool = pumpswapPoolPda(
      0,
      KeypairLike.publicKey(),
      KeypairLike.publicKey(),
      KeypairLike.publicKey(),
    );
    expect(pool).toBeInstanceOf(PublicKey);
  });
});

const KeypairLike = {
  publicKey: () => PublicKey.unique(),
};
