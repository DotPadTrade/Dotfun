// Parse the vitest output file for the failing sections (dev tooling only).
const fs = require("fs");
const raw = fs.readFileSync(process.argv[2] || "test-result.txt", "utf8");
const t = raw.replace(/\u001b\[[0-9;]*m/g, "");
const lines = t.split(/\r?\n/);
function dump(marker, span) {
  const idx = lines.findIndex((l) => l.includes(marker));
  console.log(`--- ${marker} @${idx} ---`);
  if (idx >= 0) console.log(lines.slice(idx, idx + span).join("\n"));
}
dump("adapters.test.ts [", 25);
dump("UNRESOLVED after max", 30);
