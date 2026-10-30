/**
 * Build RelayPad brand assets from the recovered originals.
 *
 * Inputs (brand-assets-originals/):
 *   relay-symbol-original.jpg  — 2048×2127 official Relay symbol on dark bg
 *   relay-banner-original.jpg  — 2048×682 official RELAY wordmark banner
 *
 * Outputs:
 *   public/relaypad-logo.png            — square opaque tile (symbol on sampled dark bg)
 *   public/relaypad-logo-transparent.png— square transparent tile (chroma-keyed symbol)
 *   public/relaypad-banner.jpg          — wordmark banner, re-encoded at q92
 *   src/app/icon.png                    — favicon (symbol centered on dark tile)
 *
 * The green chroma-key keeps official Relay green pixels and turns the dark
 * JPEG background transparent, with soft partial alpha at antialiased edges.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const originals = path.join(root, "brand-assets-originals");
const pub = path.join(root, "public");
const appDir = path.join(root, "src", "app");

fs.mkdirSync(pub, { recursive: true });

const symbolPath = path.join(originals, "relay-symbol-original.jpg");
const bannerPath = path.join(originals, "relay-banner-original.jpg");

// ---------------------------------------------------------------------------
// 1. Locate the symbol inside the original frame via green-dominance scan.
const { data, info } = await sharp(symbolPath)
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

let minX = W, minY = H, maxX = -1, maxY = -1;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * C;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (g >= 80 && g - Math.max(r, b) >= 25) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
if (maxX < 0) throw new Error("No green symbol pixels found in symbol original.");
console.log(`symbol bbox: x ${minX}..${maxX}, y ${minY}..${maxY}`);

const PAD = 24;
const left = Math.max(0, minX - PAD);
const top = Math.max(0, minY - PAD);
const cropW = Math.min(W, maxX + PAD) - left;
const cropH = Math.min(H, maxY + PAD) - top;

// Sample the dark background colour from the top-left corner of the original.
const bgR = data[0], bgG = data[1], bgB = data[2];
const bgHex =
  "#" + [bgR, bgG, bgB].map((v) => v.toString(16).padStart(2, "0")).join("");
console.log(`sampled bg: ${bgHex}`);

// ---------------------------------------------------------------------------
// 2. Chroma-keyed transparent symbol.
const { data: crop, info: cropInfo } = await sharp(symbolPath)
  .extract({ left, top, width: cropW, height: cropH })
  .raw()
  .toBuffer({ resolveWithObject: true });
const cw = cropInfo.width, ch = cropInfo.height, cc = cropInfo.channels;
const keyed = Buffer.alloc(cw * ch * 4);
for (let p = 0; p < cw * ch; p++) {
  const i = p * cc;
  const r = crop[i], g = crop[i + 1], b = crop[i + 2];
  const gd = g - Math.max(r, b); // green dominance
  let a;
  if (gd <= 8) a = 0;
  else if (gd >= 30) a = 255;
  else a = Math.round(((gd - 8) / 22) * 255);
  keyed[p * 4] = r;
  keyed[p * 4 + 1] = g;
  keyed[p * 4 + 2] = b;
  keyed[p * 4 + 3] = a;
}
const keyedSymbol = sharp(keyed, {
  raw: { width: cw, height: ch, channels: 4 },
});

// ---------------------------------------------------------------------------
// 3. Square tiles + favicon, symbol centred on 512×512 canvases.
const TILE = 512;
const INNER = 420; // symbol box inside the tile
const FIT = { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } };

await keyedSymbol
  .clone()
  .resize(TILE, TILE, FIT)
  .png()
  .toFile(path.join(pub, "relaypad-logo-transparent.png"));

// Composite inputs must be plain buffers held in variables (sharp rejects
// unresolved/pending inputs inside composite arrays).
const symbolCropBuf = await sharp(symbolPath)
  .extract({ left, top, width: cropW, height: cropH })
  .resize(TILE, TILE, FIT)
  .png()
  .toBuffer();

await sharp({
  create: {
    width: TILE,
    height: TILE,
    channels: 4,
    background: { r: bgR, g: bgG, b: bgB, alpha: 1 },
  },
})
  .composite([{ input: symbolCropBuf }])
  .png()
  .toFile(path.join(pub, "relaypad-logo.png"));

const FAV = 512;
const FAV_INNER = 340;
const favSymbolBuf = await keyedSymbol
  .clone()
  .resize(FAV_INNER, FAV_INNER, FIT)
  .png()
  .toBuffer();
await sharp({
  create: {
    width: FAV,
    height: FAV,
    channels: 4,
    background: { r: 26, g: 28, b: 27, alpha: 1 },
  },
})
  .composite([{ input: favSymbolBuf }])
  .png()
  .toFile(path.join(appDir, "icon.png"));

// ---------------------------------------------------------------------------
// 4. Banner (re-encode for a clean, reasonably sized asset).
await sharp(bannerPath).jpeg({ quality: 92 }).toFile(path.join(pub, "relaypad-banner.jpg"));

// ---------------------------------------------------------------------------
for (const f of [
  "public/relaypad-logo.png",
  "public/relaypad-logo-transparent.png",
  "public/relaypad-banner.jpg",
  "src/app/icon.png",
]) {
  const full = path.join(root, f);
  const meta = await sharp(full).metadata();
  console.log(`${f}: ${meta.width}x${meta.height} ${meta.format} ${fs.statSync(full).size} bytes`);
}
console.log("done");