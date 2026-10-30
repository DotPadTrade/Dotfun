# RelayPad Campaign Plan — "One Launchpad. Two Routes."

18-post X campaign + 18 individually designed banners. This document records the
strategy, the verified fact base, and what still needs owner sign-off.

## 1. Objectives

1. Explain what RelayPad is and why it supports two launch routes.
2. Educate on both route lifecycles (Pump.fun → PumpSwap; LaunchLab → CPMM).
3. Establish discovery, vanity mint and lifecycle tracking as product substance.
4. Position honesty/verifiability as the brand differentiator.
5. Introduce $RELAY's *intended* role without inventing a token.
6. Close with a vision-led manifesto and community CTA.

## 2. Narrative arc

- **01–02** Who we are / why two routes (positioning).
- **03–05** How launching works on each route and end-to-end (education).
- **06–09** Discovery + identity tools (product depth).
- **10–12** Trust, technology, differentiation (credibility).
- **13–14** $RELAY + treasury (vision, carefully caveated).
- **15–17** Security, roadmap, creator experience (retention).
- **18** Manifesto (community).

## 3. Fact base (verified in this repository)

Implemented (README feature map + source):
- Dual routes via official SDKs: `@pump-fun/pump-sdk` 4.0.0 (`create_v2`), `@raydium-io/raydium-sdk-v2` 0.2.74-alpha (`launchpad.createLaunchpad`, cpmm migration).
- Shared flow: validate → upload (IPFS via Pinata, server-side creds) → config → build → review → sign → confirm → verify.
- Fees/details shown before signing; user wallet signs; no custody.
- tx-engine: safe retries (submitted signature resolved before retry), error taxonomy, idempotent launch records.
- Lifecycle states: PREPARATION → SUBMITTED → CONFIRMED → CURVE_TRADING → GRADUATION_DETECTED → POOL_VERIFIED; on-chain state as sole source of truth; migration performed by the protocols, not RelayPad.
- Discovery: seven tabs (All / Movers / New Launches / New Pools / Pump.fun / LaunchLab / RelayPad Launches); Movers require a verified 24h change; per-row source, provenance, freshness; stale rows flagged; FDV vs MC labelled correctly.
- Vanity mint: in-browser Web Worker, cancellable, ephemeral keys, exact-match validation, honest difficulty.
- Stack: Next.js 15, React 19, TypeScript strict, Tailwind, `@solana/web3.js` 1.98.x, `@solana/spl-token`, PostgreSQL + Prisma, Pinata, Vitest.
- Treasury: read-only dashboard + public read-only API (`/api/relay-official/*`), indexer and reconciliation; four wallet roles (W1 fee recipient, W2 buyback, W3 ops & reserve, W4 dev — outside the fee system).
- Default network: devnet (`NEXT_PUBLIC_RELAYPAD_NETWORK`); mainnet requires explicit config.
- Roadmap tiers (product board): LIVE NOW / NEXT ("planned — not shipped yet") / EXPLORING ("under evaluation — not committed").

Explicitly NOT true (do not claim):
- **No official $RELAY token exists** — no mint, no addresses, nothing launched (`docs/RELAY_OFFICIAL_TOKEN_BUYBACK_AUDIT.md` §1).
- **Automated buybacks/burns are not operational** — phases 2–4 of the implementation plan are designed, not built.
- No security audit has been performed or claimed.
- No mainnet E2E transaction execution is verified yet (requires funded wallet + RPC; `docs/VERIFICATION.md`).

## 4. Claims requiring final approval before publishing

1. **POST 13:** confirm no official $RELAY has been launched anywhere (repository says none; owner must confirm nothing exists off-repo).
2. **POST 14:** confirm the treasury dashboard's deployed URL/state matches "live — read-only" and that no automation exists.
3. If any official links/handles are to be added, supply them; none were invented here.

## 5. Guardrails applied

- No statistics, partnerships, listings, dates, tokenomics or prices invented.
- No guaranteed outcomes; POST 07 explicitly anti-signal.
- Hashtags ≤ 2 per post, used sparingly (7 of 18 posts carry none).
- All technical statements map to a named file in this repo.
