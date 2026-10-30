# RelayPad X Campaign — 18 Ready-to-Publish Posts

**Campaign:** One Launchpad. Two Routes.
**Format:** X standard posts (280-char limit; every post below is within limit, most 180–275 chars).
**Banners:** each post pairs with an individual 1600×900 PNG in `banners/` (see `asset-manifest.md`).

> Fact discipline: every technical claim below is verified against the repository
> (see `campaign-plan.md` § "Fact base"). Claims requiring final owner confirmation
> are flagged per post. Nothing about price, returns, dates, partnerships, or
> unverified token status is asserted.

---

## POST 01 — Meet RelayPad

- **Tweet:**

> Most launchpads lock you into one ecosystem. RelayPad doesn't. Two Solana launch routes — Pump.fun and Raydium LaunchLab — one interface, with the whole lifecycle tracked on-chain from first signature to verified pool. One Launchpad. Two Routes. 🟢

- **CTA:** implicit brand hook; pin this post as the account intro.
- **Hashtags:** none (clean brand post).
- **Banner:** `01-meet-relaypad.png`
- **Main message:** RelayPad's positioning — one launchpad, two launch routes, on-chain lifecycle tracking.
- **Intended audience:** crypto-native Solana users; first-contact brand awareness.
- **Claims to confirm:** none beyond the repository's README positioning.

---

## POST 02 — One Product, Two Routes

- **Tweet:**

> Two ecosystems, one product. Pick Pump.fun's curve and graduate to PumpSwap, or Raydium LaunchLab and graduate to a CPMM pool. RelayPad builds the correct route-specific transaction, shows fees before you sign, and tracks what happens next — on-chain. #Solana

- **CTA:** try the create flow (link to the app in the published thread, not invented here).
- **Hashtags:** #Solana
- **Banner:** `02-two-launch-routes.png`
- **Main message:** the dual-route architecture is a deliberate product decision.
- **Intended audience:** creators deciding between pump.fun and Raydium ecosystems.
- **Claims to confirm:** none (README feature map: both routes implemented).

---

## POST 03 — The Pump.fun Route

- **Tweet:**

> Route A, plainly: your token mints on the Pump.fun bonding curve via the official pump-sdk. Price rises as the curve fills. When it completes, pump.fun's own protocol migrates liquidity to PumpSwap — RelayPad detects and verifies the pool. It never performs the migration.

- **CTA:** educational; follow for Route B tomorrow (natural series rhythm).
- **Hashtags:** none.
- **Banner:** `03-pumpfun-route.png`
- **Main message:** accurate Pump.fun lifecycle; RelayPad verifies, never migrates.
- **Intended audience:** creators considering Route A; pump.fun-native users.
- **Claims to confirm:** none (matches `src/lib/adapters/pump.ts` behavior and in-app route docs).

---

## POST 04 — The Raydium LaunchLab Route

- **Tweet:**

> Route B: Raydium LaunchLab. Create through LaunchLab's curve (official raydium-sdk-v2), trade while it fills, and on graduation liquidity migrates to a Raydium CPMM pool — verified on-chain before RelayPad calls it done. Same discipline, different ecosystem. #Solana

- **CTA:** educational; completes the two-route pair.
- **Hashtags:** #Solana
- **Banner:** `04-raydium-launchlab-route.png`
- **Main message:** accurate LaunchLab → CPMM lifecycle.
- **Intended audience:** Raydium-oriented creators and traders.
- **Claims to confirm:** none (matches `src/lib/adapters/launchlab.ts` and `docs/VERIFICATION.md`).

---

## POST 05 — From Creation to Discovery

- **Tweet:**

> Creation is only half the story. Every RelayPad launch follows one flow — validate, upload to IPFS, configure, build, review, sign, confirm, verify — then keeps moving: curve trading, graduation, verified destination pool. Creation and discovery, one product.

- **CTA:** soft; positions the product as an end-to-end experience.
- **Hashtags:** none.
- **Banner:** `05-creation-to-discovery.png`
- **Main message:** the shared launch flow connects creation and discovery.
- **Intended audience:** creators evaluating the full journey.
- **Claims to confirm:** none (flow stages verified in `src/hooks/use-launch-flow.ts` / README).

---

## POST 06 — The Discovery Engine

- **Tweet:**

> Discovery with receipts. Seven tabs — All, Movers, New Launches, New Pools, Pump.fun, LaunchLab, RelayPad launches. Every row shows its data source and freshness, and stale rows get flagged. Nothing on the page pretends to be live when it isn't. #Solana

- **CTA:** explore the discovery view.
- **Hashtags:** #Solana
- **Banner:** `06-discovery-engine.png`
- **Main message:** transparent, provenance-aware discovery.
- **Intended audience:** traders and token scanners tired of opaque data.
- **Claims to confirm:** none (verified: `src/components/discovery/explore-panel.tsx`, `docs/VERIFICATION.md`).

---

## POST 07 — Find What Is Moving

- **Tweet:**

> Movers isn't a signal feed. It's the tokens showing a verified 24h change — and if a provider doesn't supply one, the row doesn't fake it. Direction included, promises excluded. DYOR; RelayPad just reports what the chain and providers actually say.

- **CTA:** none explicit (deliberately anti-hype framing).
- **Hashtags:** none.
- **Banner:** `07-market-movers.png`
- **Main message:** Movers = verified 24h change only; no fabricated values, no signals.
- **Intended audience:** traders; also signals the brand's honesty stance.
- **Claims to confirm:** none (verified: Movers filter requires a non-null `change24h`; unit-tested).

---

## POST 08 — New Launches vs. New Pools

- **Tweet:**

> A new launch and a new pool aren't the same event. New Launches = tokens freshly created, most still on their bonding curve. New Pools = newly created liquidity pools, the post-graduation venues. Separate record types — you always know what you're looking at.

- **CTA:** implicit; check both tabs.
- **Hashtags:** none.
- **Banner:** `08-new-launches-new-pools.png`
- **Main message:** distinction between launch records and pool records.
- **Intended audience:** discovery users; educational.
- **Claims to confirm:** none (verified: separate record types, unit-tested classification).

---

## POST 09 — Your Mint, Your Identity

- **Tweet:**

> Your mint, your identity. RelayPad's vanity generator runs entirely in your browser: cancellable worker, keys that never leave page memory, honest difficulty expectations. A claimed mint must match exactly before you ever review it. No timing promises — that's the math.

- **CTA:** try the vanity generator.
- **Hashtags:** none.
- **Banner:** `09-vanity-mint.png` (uses an illustrative placeholder pattern, not a real address)
- **Main message:** in-browser, private, honest vanity minting.
- **Intended audience:** creators who care about token identity and key hygiene.
- **Claims to confirm:** none (verified: Web Worker, cancellable, ephemeral keys, exact-match validation).

---

## POST 10 — Built for On-Chain Interactions

- **Tweet:**

> RelayPad has no custody — ever. Connect Phantom or Solflare, review fees and details before signing, and only your wallet signs. A submitted signature always resolves before any retry, and a launch is confirmed only when the mint account exists on-chain. #Solana

- **CTA:** connect a wallet and try the flow (devnet default).
- **Hashtags:** #Solana
- **Banner:** `10-onchain-interactions.png`
- **Main message:** non-custodial design and honest confirmation semantics.
- **Intended audience:** security-minded Solana users.
- **Claims to confirm:** none (verified: security model in README; tx-engine resolve-before-retry).

---

## POST 11 — Under the Hood

- **Tweet:**

> Under the hood: Next.js 15 App Router, React 19, strict TypeScript, Tailwind. Official SDKs, pinned: pump-sdk 4.0.0 and raydium-sdk-v2. PostgreSQL + Prisma for launch records, server-side IPFS pinning via Pinata, Vitest for the core. No mystery stack.

- **CTA:** developers: read the repo / architecture docs.
- **Hashtags:** none.
- **Banner:** `11-technology-stack.png`
- **Main message:** transparent, pinned, verifiable technology choices.
- **Intended audience:** developers and technical evaluators.
- **Claims to confirm:** none (versions verified in `package.json` / README stack table).

---

## POST 12 — What Makes RelayPad Different?

- **Tweet:**

> What makes RelayPad different isn't one feature — it's the combination: two launch routes in one flow, discovery across both ecosystems, in-browser vanity mints, lifecycle status anchored to on-chain state. Judge it by what you can verify. #Solana

- **CTA:** verify it yourself (no superlative competitor claims made).
- **Hashtags:** #Solana
- **Banner:** `12-relaypad-differentiation.png`
- **Main message:** differentiation by combination, not by hype.
- **Intended audience:** skeptics and comparison shoppers.
- **Claims to confirm:** none; deliberately avoids "better than X" claims.

---

## POST 13 — Why $RELAY?

- **Tweet:**

> Straight answer on $RELAY: no official token exists yet — no mint, no address, nothing to buy. It's part of the vision: a token launched through RelayPad itself, feeding a treasury anyone can audit. Until a mint verifies on-chain, every other "RELAY" is noise.

- **CTA:** follow for the official announcement only (discourages fakes).
- **Hashtags:** none (avoid making it look like a token-shill post).
- **Banner:** `13-why-relay.png` (conceptual mark, explicitly labeled "not yet launched")
- **Main message:** honest token status; the token is part of the vision, not a live asset.
- **Intended audience:** token observers; anti-scam positioning.
- **Claims to confirm:** ⚠️ owner confirmation that no official $RELAY has been launched anywhere
  (repository audit states no verifiable token exists; no mint address is recorded anywhere).

---

## POST 14 — The Treasury and Transparency Vision

- **Tweet:**

> The treasury dashboard is live — and strictly read-only: wallet roles, tracked activity, reconciliation against on-chain state. Automated buybacks and burns are not operational. The direction is designed and documented. It ships when it's safe — we'll say so until then.

- **CTA:** view the treasury dashboard (read-only).
- **Hashtags:** none.
- **Banner:** `14-treasury-vision.png`
- **Main message:** read-only treasury tracking now; proposed buyback/burn later — clearly separated.
- **Intended audience:** $RELAY-curious observers; transparency-minded users.
- **Claims to confirm:** ⚠️ owner confirmation that the deployed dashboard is reachable and that no
  automation exists anywhere (repository: `src/app/api/relay-official/*` is read-only by design;
  buyback/burn phases in the implementation plan are planned, not built).

---

## POST 15 — Built with Security in Mind

- **Tweet:**

> A lot of security is what you refuse to do. The server never signs your transactions. Vanity keys never leave page memory. Upload credentials stay server-side and audited. No audit badge to wave around — just behavior you can verify yourself.

- **CTA:** none explicit.
- **Hashtags:** none.
- **Banner:** `15-security-first.png` (no fake audit badges, by design)
- **Main message:** security through architecture and restraint.
- **Intended audience:** security-conscious users and developers.
- **Claims to confirm:** none; deliberately does NOT claim any third-party audit.

---

## POST 16 — The Road Ahead

- **Tweet:**

> The road ahead, honestly labeled. NEXT: richer lifecycle monitoring, deeper discovery and filtering, creator dashboards with analytics. EXPLORING: cross-route portfolio insights, launch notifications. No dates, no fake confidence — shipped is shipped, the rest is labeled.

- **CTA:** follow along.
- **Hashtags:** none.
- **Banner:** `16-roadmap.png`
- **Main message:** roadmap with honest tiers; no dates, no over-promising.
- **Intended audience:** existing followers; sets expectations.
- **Claims to confirm:** none (tiers match the product's roadmap board: LIVE NOW / NEXT / EXPLORING).

---

## POST 17 — The Creator Experience

- **Tweet:**

> For creators: choose your route, see fees before signing, shape your token's identity in-browser — even its address — and follow real lifecycle states: confirmed, on curve, graduating, pool verified. Verified against the chain, not a database's opinion.

- **CTA:** start a launch (devnet by default).
- **Hashtags:** none.
- **Banner:** `17-creator-experience.png`
- **Main message:** the creator journey, feature by confirmed feature.
- **Intended audience:** prospective token creators.
- **Claims to confirm:** none (all listed lifecycle states verified in `route-badge.tsx`).

---

## POST 18 — The RelayPad Vision

- **Tweet:**

> RelayPad exists because launching a token on Solana should be clear, verifiable, and yours — from the first signature to the verified pool. Two routes today. A transparent treasury direction. A roadmap that ships before it speaks. Build with us. 🟢 #RelayPad #Solana

- **CTA:** "Build with us" — follow and engage; campaign closer.
- **Hashtags:** #RelayPad #Solana
- **Banner:** `18-relaypad-vision.png`
- **Main message:** brand manifesto; useful infrastructure + transparency + continued development.
- **Intended audience:** everyone; the campaign's summary and closer.
- **Claims to confirm:** none; no price speculation or financial promises.

---

## Suggested publishing rhythm (no dates implied)

1 → 2 → 3 → 4 (route pair back-to-back) → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18.
Space posts 1–2 days apart; pin POST 01; quote-post POST 13 whenever fake "$RELAY" tokens appear.
