/* Check logo PNG transparency: color type + a corner-pixel alpha decode. */
const fs = require("fs");
const b = fs.readFileSync(__dirname + "/../../../public/relaypad-logo-transparent.png");
console.log("size", b.readUInt32BE(16), "x", b.readUInt32BE(20), "colortype", b[25], "bitdepth", b[24]);
const zlib = require("zlib");
// walk chunks to find IDAT
let off = 8, idat = [];
while (off < b.length) {
  const len = b.readUInt32BE(off), type = b.toString("ascii", off + 4, off + 8);
  if (type === "IDAT") idat.push(b.slice(off + 8, off + 8 + len));
  if (type === "IEND") break;
  off += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idat));
const w = b.readUInt32BE(16), bpp = b[25] === 6 ? 4 : 3;
const stride = w * bpp + 1;
function px(x, y) {
  // assume filter 0 for corner rows (common); good enough for a transparency check
  const i = y * stride + 1 + x * bpp;
  return Array.from(raw.slice(i, i + bpp));
}
console.log("top-left px", px(0, 0), "top-right px", px(w - 1, 0));
