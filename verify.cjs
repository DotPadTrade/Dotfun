// Sequential verification runner: tsc → full test suite.
const { execSync } = require("child_process");
const fs = require("fs");

function run(cmd, logFile, tail) {
  let code = 0;
  let out = "";
  try {
    out = execSync(cmd, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 1e8, timeout: 420000 });
  } catch (e) {
    code = e.status;
    out = (e.stdout || "") + (e.stderr || "");
  }
  fs.writeFileSync(logFile, "EXIT " + code + "\n" + (tail ? out.slice(-tail) : out.slice(0, 200000)));
  console.log(cmd.slice(0, 40), "-> exit", code);
  return code;
}

const tsc = run("node node_modules/typescript/bin/tsc --noEmit", "tsc-check.log");
const tests = run("node node_modules/vitest/vitest.mjs run", "tests-check.log", 200000);
fs.writeFileSync("verify.log", `tsc=${tsc} tests=${tests}\n`);
console.log("verify complete:", tsc, tests);
