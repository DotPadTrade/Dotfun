// Find node_modules packages with empty/invalid versions (install corruption).
const fs = require("fs");
const path = require("path");
const root = process.argv[2] || "node_modules";
const bad = [];
function checkPkg(dir) {
  const pj = path.join(dir, "package.json");
  try {
    const j = JSON.parse(fs.readFileSync(pj, "utf8"));
    if (typeof j.version !== "string" || j.version.length === 0) {
      bad.push(dir + "  (version=" + JSON.stringify(j.version) + ", name=" + j.name + ")");
    }
  } catch (e) {
    bad.push(dir + "  (unreadable package.json)");
  }
}
for (const scope of fs.readdirSync(root, { withFileTypes: true })) {
  if (!scope.isDirectory()) continue;
  const sp = path.join(root, scope.name);
  if (scope.name.startsWith("@")) {
    for (const sub of fs.readdirSync(sp, { withFileTypes: true })) {
      if (sub.isDirectory()) checkPkg(path.join(sp, sub.name));
    }
  } else {
    checkPkg(sp);
  }
}
console.log(bad.length ? bad.join("\n") : "ALL_OK");
