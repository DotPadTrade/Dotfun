/* Dev tooling: verify idempotent event recording on a real registry record. */
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
  return { status: res.status, json, text: text.slice(0, 300) };
}

(async () => {
  const key = "uiaudit:" + Date.now();
  const create = await j("POST", "/api/launches", {
    idempotencyKey: key,
    creatorWallet: "7VtfL8fvgNfhz17qKRMjzQEXgbdpnHHHQRh54R9jP2RJ",
    route: "LAUNCHLAB_CPMM",
    network: "devnet",
    name: "Event Audit Token",
    symbol: "EVA",
    metadataUri: "https://ipfs.io/ipfs/example",
    imageUrl: "https://ipfs.io/ipfs/example.png",
  });
  const id = create.json?.launch?.id;
  console.log("created record id:", id, "status:", create.status);

  if (!id) process.exit(1);

  const ev1 = await j("POST", "/api/launches/" + id, {
    kind: "confirmed", signature: "audit-signature-1", detail: { via: "event-audit" },
  });
  const ev2 = await j("POST", "/api/launches/" + id, {
    kind: "confirmed", signature: "audit-signature-1", detail: { via: "event-audit" },
  });
  console.log("event 1:", ev1.status, "event 2 (same dedupeKey):", ev2.status);

  const detail = await j("GET", "/api/launches/" + id);
  const events = detail.json?.timeline ?? [];
  const confirmed = events.filter((e) => e.kind === "confirmed");
  console.log("timeline events:", events.length, "confirmed events (expect 1):", confirmed.length);
  console.log("status:", detail.json?.status);
  process.exit(0);
})().catch((e) => { console.log("FATAL", String(e)); process.exit(1); });
