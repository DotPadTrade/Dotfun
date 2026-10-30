/* Verify all 18 banners exist, are valid PNGs and exactly 1600x900. */
const fs = require("fs");
const path = require("path");
const OUT = path.join(__dirname, "..", "banners");
const expected = [
  "01-meet-relaypad", "02-two-launch-routes", "03-pumpfun-route",
  "04-raydium-launchlab-route", "05-creation-to-discovery", "06-discovery-engine",
  "07-market-movers", "08-new-launches-new-pools", "09-vanity-mint",
  "10-onchain-interactions", "11-technology-stack", "12-relaypad-differentiation",
  "13-why-relay", "14-treasury-vision", "15-security-first",
  "16-roadmap", "17-creator-experience", "18-relaypad-vision",
];
let ok = 0;
for (const name of expected) {
  const p = path.join(OUT, name + ".png");
  if (!fs.existsSync(p)) { console.log("MISSING", name); continue; }
  const b = fs.readFileSync(p);
  const sig = b.slice(1, 4).toString("ascii") === "PNG";
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20);
  const good = sig && w === 1600 && h === 900;
  console.log(good ? "OK  " : "BAD ", name + ".png", w + "x" + h, (b.length / 1024).toFixed(0) + " KB");
  if (good) ok++;
}
console.log(`${ok}/18 verified 1600x900 PNG`);
