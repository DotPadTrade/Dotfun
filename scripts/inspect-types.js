// Utility: extract regions from a .d.ts by pattern (dev tooling only).
const fs = require("fs");
const path = require("path");
const file = process.argv[2];
const pats = process.argv.slice(3);
const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
for (const p of pats) {
  const re = new RegExp(p);
  const idx = lines.findIndex((l) => re.test(l));
  console.log(`=== /${p}/ at line ${idx + 1} ===`);
  if (idx >= 0) console.log(lines.slice(idx, idx + 45).join("\n"));
}
