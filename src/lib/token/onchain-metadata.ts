/**
 * On-chain token metadata reader for CA scans.
 *
 * Resolves a mint's Metaplex metadata account (PDA of
 * `metadata/<program>/<mint>`), decodes the `uri` field with a minimal
 * dependency-free layout decoder, fetches the off-chain JSON through an IPFS
 * gateway when needed, and extracts normalized social links.
 *
 * Honesty rules: any failure (no metadata account, unreadable URI, gateway or
 * network error) returns nulls — social links are never fabricated, and the
 * on-chain metadata itself is never modified.
 */
import { PublicKey, Connection } from "@solana/web3.js";
import { getConnection, resolveServerNetworkConfig } from "../connection";
import { parseTokenSocials, resolveMetadataHttpUrl, type TokenSocials } from "../metadata";

// Re-export so consumers can type against the socials shape from this module.
export type { TokenSocials } from "../metadata";

export const METADATA_PROGRAM_ID = new PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");

/**
 * Extract the `uri` field from a Metaplex Metadata account's raw data.
 * Layout: key(u8) updateAuthority(32) mint(32) name(borsh string)
 * symbol(borsh string) uri(borsh string) … — borsh strings are u32 LE length
 * followed by UTF-8 bytes.
 */
export function decodeMetadataUri(data: Uint8Array): string | null {
  try {
    let offset = 1 + 32 + 32; // key + update authority + mint
    const readString = (): string | null => {
      if (offset + 4 > data.length) return null;
      const len = new DataView(data.buffer, data.byteOffset + offset, 4).getUint32(0, true);
      offset += 4;
      if (offset + len > data.length) return null;
      const value = Buffer.from(data.slice(offset, offset + len)).toString("utf8").replace(/\0+$/, "").trim();
      offset += len;
      return value;
    };
    readString(); // name
    readString(); // symbol
    return readString(); // uri
  } catch {
    return null;
  }
}

export function metadataPdaFor(mint: PublicKey): PublicKey {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("metadata", "utf8"), METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer()],
    METADATA_PROGRAM_ID,
  )[0];
}

async function fetchJsonWithTimeout(url: string, timeoutMs = 6000): Promise<unknown | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, { signal: controller.signal, headers: { accept: "application/json" } });
    clearTimeout(timer);
    if (!res.ok) return null;
    return (await res.json()) as unknown;
  } catch {
    return null;
  }
}

/**
 * Read social links for a mint: on-chain metadata → URI → off-chain JSON →
 * normalized socials. Nulls mean "not available", never fabricated data.
 */
export async function fetchTokenSocials(
  mint: string,
  options: { gatewayHost?: string } = {},
): Promise<TokenSocials> {
  const empty: TokenSocials = { website: null, twitter: null, telegram: null };
  let mintKey: PublicKey;
  try {
    mintKey = new PublicKey(mint);
  } catch {
    return empty;
  }
  try {
    const cfg = resolveServerNetworkConfig(process.env.NEXT_PUBLIC_RELAYPAD_NETWORK);
    const connection: Connection = getConnection(cfg);
    const account = await connection.getAccountInfo(metadataPdaFor(mintKey), "confirmed");
    if (!account || !account.data || account.data.length === 0) return empty;
    const uri = decodeMetadataUri(account.data);
    if (!uri) return empty;
    const httpUrl = resolveMetadataHttpUrl(uri, options.gatewayHost ?? process.env.PINATA_GATEWAY ?? "ipfs.io");
    if (!httpUrl) return empty;
    const json = await fetchJsonWithTimeout(httpUrl);
    return parseTokenSocials(json);
  } catch {
    return empty;
  }
}

/** Fetch + normalize socials directly from a known off-chain metadata URI. */
export async function fetchSocialsFromUri(
  metadataUri: string,
  options: { gatewayHost?: string } = {},
): Promise<TokenSocials> {
  const httpUrl = resolveMetadataHttpUrl(metadataUri, options.gatewayHost ?? process.env.PINATA_GATEWAY ?? "ipfs.io");
  if (!httpUrl) return { website: null, twitter: null, telegram: null };
  const json = await fetchJsonWithTimeout(httpUrl);
  return parseTokenSocials(json);
}
