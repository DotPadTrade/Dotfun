/**
 * Explicit, user-initiated export of a generated vanity keypair.
 *
 * Security: this is the ONLY path by which the secret key leaves memory —
 * a browser download triggered by the user, never automatic, never a network
 * call. The file uses the Solana CLI keypair format (a 64-byte JSON array)
 * so it can be imported into standard tooling. The UI must warn clearly
 * before calling this.
 */
import type { Keypair } from "@solana/web3.js";

export function exportKeypairJson(kp: Keypair): void {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify(Array.from(kp.secretKey));
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `vanity-mint-${kp.publicKey.toBase58()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Confirm the user understands what they are exporting. */
export function confirmKeypairExport(publicKey: string): boolean {
  return window.confirm(
    `This file contains the SECRET KEY that fully controls the mint address ${publicKey}.\n\n` +
      "Anyone with this file can spend or mint with it. Never share it, never commit it, " +
      "and store it offline if you keep it.\n\nDownload the keypair file?",
  );
}