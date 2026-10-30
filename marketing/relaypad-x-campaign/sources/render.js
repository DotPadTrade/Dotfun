/**
 * RelayPad X-campaign banner renderer.
 * Renders each sources/banner-*.html at exactly 1600x900 and exports a PNG
 * into ../banners/<name>.png using the same playwright-core + system-Chrome
 * pipeline already used by artifacts/video-tools (no new deps, offline-safe).
 *
 * Usage: node render.js            (renders all)
 *        node render.js 01 07      (renders only matching numbers)
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("../../../artifacts/video-tools/node_modules/playwright-core");

const SRC = __dirname;
const OUT = path.join(SRC, "..", "banners");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const only = process.argv.slice(2);
  const files = fs
    .readdirSync(SRC)
    .filter((f) => /^banner-\d+.*\.html$/.test(f))
    .filter((f) => (only.length ? only.some((n) => f.startsWith(`banner-${n}`)) : true))
    .sort();

  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1600, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const f of files) {
    const outName = f.replace(/\.html$/, "").replace(/^banner-/, "").replace(/^(\d+)-/, (_m, n) => `${n}-`) + ".png";
    const page = await ctx.newPage();
    try {
      await page.goto("file:///" + path.join(SRC, f).replace(/\\/g, "/"), { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(350);
      await page.screenshot({ path: path.join(OUT, outName), clip: { x: 0, y: 0, width: 1600, height: 900 } });
      console.log("OK  ", outName);
    } catch (e) {
      console.log("FAIL", outName, e.message);
    } finally {
      await page.close();
    }
  }
  await browser.close();
})();
