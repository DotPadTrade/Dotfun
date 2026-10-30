/* Verify every campaign tweet is within X's 280-char standard-post limit. */
const tweets = [
  "Most launchpads lock you into one ecosystem. RelayPad doesn't. Two Solana launch routes — Pump.fun and Raydium LaunchLab — one interface, with the whole lifecycle tracked on-chain from first signature to verified pool. One Launchpad. Two Routes. 🟢",
  "Two ecosystems, one product. Pick Pump.fun's curve and graduate to PumpSwap, or Raydium LaunchLab and graduate to a CPMM pool. RelayPad builds the correct route-specific transaction, shows fees before you sign, and tracks what happens next — on-chain. #Solana",
  "Route A, plainly: your token mints on the Pump.fun bonding curve via the official pump-sdk. Price rises as the curve fills. When it completes, pump.fun's own protocol migrates liquidity to PumpSwap — RelayPad detects and verifies the pool. It never performs the migration.",
  "Route B: Raydium LaunchLab. Create through LaunchLab's curve (official raydium-sdk-v2), trade while it fills, and on graduation liquidity migrates to a Raydium CPMM pool — verified on-chain before RelayPad calls it done. Same discipline, different ecosystem. #Solana",
  "Creation is only half the story. Every RelayPad launch follows one flow — validate, upload to IPFS, configure, build, review, sign, confirm, verify — then keeps moving: curve trading, graduation, verified destination pool. Creation and discovery, one product.",
  "Discovery with receipts. Seven tabs — All, Movers, New Launches, New Pools, Pump.fun, LaunchLab, RelayPad launches. Every row shows its data source and freshness, and stale rows get flagged. Nothing on the page pretends to be live when it isn't. #Solana",
  "Movers isn't a signal feed. It's the tokens showing a verified 24h change — and if a provider doesn't supply one, the row doesn't fake it. Direction included, promises excluded. DYOR; RelayPad just reports what the chain and providers actually say.",
  "A new launch and a new pool aren't the same event. New Launches = tokens freshly created, most still on their bonding curve. New Pools = newly created liquidity pools, the post-graduation venues. Separate record types — you always know what you're looking at.",
  "Your mint, your identity. RelayPad's vanity generator runs entirely in your browser: cancellable worker, keys that never leave page memory, honest difficulty expectations. A claimed mint must match exactly before you ever review it. No timing promises — that's the math.",
  "RelayPad has no custody — ever. Connect Phantom or Solflare, review fees and details before signing, and only your wallet signs. A submitted signature always resolves before any retry, and a launch is confirmed only when the mint account exists on-chain. #Solana",
  "Under the hood: Next.js 15 App Router, React 19, strict TypeScript, Tailwind. Official SDKs, pinned: pump-sdk 4.0.0 and raydium-sdk-v2. PostgreSQL + Prisma for launch records, server-side IPFS pinning via Pinata, Vitest for the core. No mystery stack.",
  "What makes RelayPad different isn't one feature — it's the combination: two launch routes in one flow, discovery across both ecosystems, in-browser vanity mints, lifecycle status anchored to on-chain state. Judge it by what you can verify. #Solana",
  "Straight answer on $RELAY: no official token exists yet — no mint, no address, nothing to buy. It's part of the vision: a token launched through RelayPad itself, feeding a treasury anyone can audit. Until a mint verifies on-chain, every other \"RELAY\" is noise.",
  "The treasury dashboard is live — and strictly read-only: wallet roles, tracked activity, reconciliation against on-chain state. Automated buybacks and burns are not operational. The direction is designed and documented. It ships when it's safe — we'll say so until then.",
  "A lot of security is what you refuse to do. The server never signs your transactions. Vanity keys never leave page memory. Upload credentials stay server-side and audited. No audit badge to wave around — just behavior you can verify yourself.",
  "The road ahead, honestly labeled. NEXT: richer lifecycle monitoring, deeper discovery and filtering, creator dashboards with analytics. EXPLORING: cross-route portfolio insights, launch notifications. No dates, no fake confidence — shipped is shipped, the rest is labeled.",
  "For creators: choose your route, see fees before signing, shape your token's identity in-browser — even its address — and follow real lifecycle states: confirmed, on curve, graduating, pool verified. Verified against the chain, not a database's opinion.",
  "RelayPad exists because launching a token on Solana should be clear, verifiable, and yours — from the first signature to the verified pool. Two routes today. A transparent treasury direction. A roadmap that ships before it speaks. Build with us. 🟢 #RelayPad #Solana",
];
// X weighted length: most chars = 1, emoji ≈ 2 — approximate with code-point weighted count
const len = (s) => [...s].reduce((n, c) => n + (c.codePointAt(0) > 0x2000 ? 2 : 1), 0);
tweets.forEach((t, i) => {
  const n = len(t);
  console.log(`POST ${String(i + 1).padStart(2, "0")}  ${n} chars  ${n <= 280 ? "OK" : "TOO LONG"}`);
});
