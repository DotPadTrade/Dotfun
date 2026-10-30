import { z } from "zod";

/**
 * Shared token metadata validation. Runs identically on the client (form UX)
 * and on the server (upload API) so malicious or malformed payloads are
 * rejected in both places.
 */

export const TOKEN_SYMBOL_MAX = 10; // LaunchLab hard cap; Pump allows 10 too

export const tokenMetadataSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(64, "Name must be 64 characters or fewer"),
  symbol: z
    .string()
    .trim()
    .min(1, "Symbol is required")
    .max(TOKEN_SYMBOL_MAX, `Symbol must be ${TOKEN_SYMBOL_MAX} characters or fewer`)
    .regex(/^[A-Za-z0-9]+$/, "Symbol must be alphanumeric"),
  description: z
    .string()
    .trim()
    .max(1000, "Description must be 1000 characters or fewer")
    .optional()
    .or(z.literal("")),
  website: z.string().trim().url().optional().or(z.literal("")),
  twitter: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),
  telegram: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),
});

export type TokenMetadataInput = z.infer<typeof tokenMetadataSchema>;

export interface ArtworkFileConstraints {
  maxBytes: number;
  allowedMime: string[];
}

export const ARTWORK_CONSTRAINTS: ArtworkFileConstraints = {
  maxBytes: 10 * 1024 * 1024, // 10 MB
  allowedMime: ["image/png", "image/jpeg", "image/webp", "image/gif"],
};

export function validateArtwork(
  sizeBytes: number,
  mime: string,
  constraints: ArtworkFileConstraints = ARTWORK_CONSTRAINTS,
): { ok: true } | { ok: false; reason: string } {
  if (sizeBytes <= 0) return { ok: false, reason: "Artwork file is empty" };
  if (sizeBytes > constraints.maxBytes) {
    return {
      ok: false,
      reason: `Artwork exceeds the ${(constraints.maxBytes / 1024 / 1024).toFixed(0)} MB limit`,
    };
  }
  if (!constraints.allowedMime.includes(mime)) {
    return {
      ok: false,
      reason: `Unsupported type ${mime}. Allowed: ${constraints.allowedMime.join(", ")}`,
    };
  }
  return { ok: true };
}

/**
 * Build the off-chain metadata JSON. Returns null description when omitted so
 * consumers can drop the key rather than store empty strings.
 */
export function buildOffchainMetadata(
  input: TokenMetadataInput,
  imageUrl: string,
): Record<string, unknown> {
  const meta: Record<string, unknown> = {
    name: input.name,
    symbol: input.symbol,
    image: imageUrl,
  };
  if (input.description) meta.description = input.description;
  const socials: Record<string, string> = {};
  if (input.website) socials.website = input.website;
  if (input.twitter) socials.twitter = input.twitter;
  if (input.telegram) socials.telegram = input.telegram;
  if (Object.keys(socials).length > 0) meta.social = socials;
  return meta;
}

/**
 * Default on-chain metadata URI cap, enforced by the upload API and by
 * adapters that have no tighter route-specific limit. Measured anchors
 * (Solana packet limit = 1,232 bytes): LaunchLab bundled create+buy with a
 * 400-character URI serializes to 1209 bytes (23 bytes of headroom) and
 * Pump.fun create-only with a 400-character URI to 1218 bytes (14 bytes of
 * headroom), so 400 remains safe for every path except Pump.fun's bundled
 * create+buy, which has its own cap below.
 */
export const METADATA_URI_MAX = 400;

/**
 * Pump.fun's bundled create+buy transaction (legacy wire format,
 * compute-unit instruction, 26 accounts) measures 1231/1232 bytes with a
 * 70-character gateway URI — every additional URI byte overflows the packet.
 * Only the default ipfs.io gateway shape (~67 characters) fits; longer URIs
 * must use the create-only path.
 */
export const PUMP_COMBINED_URI_MAX = 70;

/** Validate a metadata URI returned by an uploader before it is used on-chain. */
export function validateMetadataUri(
  uri: string,
  maxUriLength: number = METADATA_URI_MAX,
): { ok: true } | { ok: false; reason: string } {
  if (uri.length === 0) return { ok: false, reason: "Metadata URI is empty" };
  if (uri.length > maxUriLength) {
    return {
      ok: false,
      reason: `Metadata URI is ${uri.length} chars; keep it under ${maxUriLength} so the mint transaction stays within Solana's 1,232-byte transaction size limit.`,
    };
  }
  if (!/^https?:\/\//i.test(uri) && !uri.startsWith("ipfs://") && !uri.startsWith("data:")) {
    return { ok: false, reason: "Metadata URI must be http(s), ipfs, or data URI" };
  }
  return { ok: true };
}
