/* Dev tooling: exercise the launch registry API (no secrets, no on-chain tx). */
const BASE = "http://localhost:3210";

async function j(method, path, body) {
  const res = await fetch(BASE + path, {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* not json */ }
  return { status: res.status, json, text: text.slice(0, 200) };
}

(async () => {
  const key = "uiaudit:" + Date.now();
  const launchInput = {
    idempotencyKey: key,
    creatorWallet: "7VtfL8fvgNfhz17qKRMjzQEXgbdpnHHHQRh54R9jP2RJ",
    route: "PUMP_PUMPSWAP",
    network: "devnet",
    name: "UI Audit Token",
    symbol: "UIA",
    description: "Registry verification record (never launched on-chain).",
    metadataUri: "https://ipfs.io/ipfs/example",
    imageUrl: "https://ipfs.io/ipfs/example.png",
  };

  const create1 = await j("POST", "/api/launches", launchInput);
  console.log("POST /api/launches (create):", create1.status);

  const create2 = await j("POST", "/api/launches", launchInput);
  console.log("POST /api/launches (duplicate key):", create2.status);

  const list = await j("GET", "/api/launches?limit=5");
  console.log("GET /api/launches:", list.status, "count=" + (list.json?.launches?.length ?? "n/a"));

  const byCreator = await j("GET", "/api/launches?creator=" + launchInput.creatorWallet);
  console.log("GET by creator:", byCreator.status, "count=" + (byCreator.json?.launches?.length ?? "n/a"));

  // record a confirmed event (idempotent) and reconcile
  const mint = "So11111111111111111111111111111111111111112"; // known devnet/mainnet account, safe id
  const ev1 = await j("POST", "/api/launches/" + mint, { kind: "confirmed", detail: { via: "ui-audit" } });
  console.log("POST event (via mint lookup):", ev1.status);

  const ev2 = await j("POST", "/api/launches/" + mint, { kind: "confirmed", detail: { via: "ui-audit" } });
  console.log("POST event (duplicate, idempotent):", ev2.status);

  const bad = await j("POST", "/api/launches", { ...launchInput, symbol: "TOOLONGSYMBOL" });
  console.log("POST invalid symbol:", bad.status, bad.json?.error ?? "");

  const up = await fetch(BASE + "/api/upload", { method: "POST", body: new FormData() });
  console.log("POST /api/upload (no credentials):", up.status, "(expect 400/503 honest failure)");

  const del404 = await j("GET", "/api/launches/nonexistentid123");
  console.log("GET missing launch:", del404.status);
  process.exit(0);
})().catch((e) => { console.log("FATAL", String(e)); process.exit(1); });
