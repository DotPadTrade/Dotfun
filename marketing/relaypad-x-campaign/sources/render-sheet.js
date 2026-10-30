/* Render the contact sheet at 1600x1840. */
const path = require("path");
const { chromium } = require("../../../artifacts/video-tools/node_modules/playwright-core");
(async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1840 }, deviceScaleFactor: 1 });
  await page.goto("file:///" + path.join(__dirname, "contact-sheet.html").replace(/\\/g, "/"), { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(__dirname, "..", "contact-sheet.png"), clip: { x: 0, y: 0, width: 1600, height: 1840 } });
  await browser.close();
  console.log("contact sheet done");
})();
