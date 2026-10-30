# RelayPad Design System — X Campaign Banners

The 18 banners are individual compositions, not recolors of one template.
They share a system; every layout, motif and visual device is unique to its post.

## 1. Foundations

**Canvas:** 1600 × 900 px (16:9), PNG, exported at 1× device scale.
**Safe margins:** ≥ 96 px left/right for copy, ≥ 40 px bottom for footer elements.
**Base darks (from the app's Tailwind palette):**

| Token | Hex | Use |
|---|---|---|
| night-950 | `#08090c` | canvas base |
| night-900 | `#0c0e12` | plates/cards |
| night-850 | `#101318` | card surfaces |
| night-800 | `#151920` | raised surfaces |
| night-700 | `#1e232b` | hairlines, dividers |
| night-500 | `#3e4650` | meta text |
| night-400 | `#5c646f` | body/support text |

**Accents:**

| Token | Hex | Route/meaning |
|---|---|---|
| mint-300/400/500 | `#8ae8a0` / `#55d26c` / `#2eb246` | Route A (Pump → PumpSwap), primary accent |
| ice-300/400/500/600 | `#a5d8ff` / `#74c0fc` / `#3b9eff` / `#1c7ed6` | Route B (LaunchLab → CPMM) |
| up / down | `#22c55e` / `#ef4444` | market motion only (verified data semantics) |

**Typography:** Segoe UI (800 for headlines, 600 for kickers, 400 body) and
Consolas for technical/mono annotations — mirroring the app's mono usage.

**Voice on image:** one headline + one concise support line. No paragraph dumps.
Mono microcopy is used for "system truth" lines (e.g. `status: configured in app`).

## 2. Logo rules

- Only the official asset `public/relaypad-logo-transparent.png` is used, never distorted.
- Footer lockup: mark + "Relay**Pad**" (mint "Pad"), height 40–56 px.
- Banner 01 additionally uses the mark as an oversized watermark (right-bleed).
- Banner 13 deliberately does **not** use the mark for $RELAY — the coin is a
  conceptual outline labeled "conceptual mark — no official artwork exists yet".

## 3. The 18 concepts (one line each)

1. **01 meet-relaypad** — cinematic type-led reveal, oversized right-bleed watermark.
2. **02 two-launch-routes** — vertical split, converging chevrons on a center spine.
3. **03 pumpfun-route** — bonding-curve journey to a PumpSwap node with graduation gate.
4. **04 raydium-launchlab-route** — orbital ring system around a CPMM hexagon, ice palette.
5. **05 creation-to-discovery** — winding four-stage journey path with stage cards.
6. **06 discovery-engine** — rotated card collage with floating category chips.
7. **07 market-movers** — kinetic repeated MOVERS type with speed streaks and tri glyphs.
8. **08 new-launches-new-pools** — symmetric split, expanding launch rings vs overlapping pools, `≠` medallion.
9. **09 vanity-mint** — giant base58 subject with targeting outline on the prefix chip.
10. **10 onchain-interactions** — three-station technical lane (wallet → tx → chain).
11. **11 technology-stack** — isometric exploded slab stack of the real stack.
12. **12 relaypad-differentiation** — numbered editorial index rows.
13. **13 why-relay** — halo-ringed conceptual $R coin with honest status chip.
14. **14 treasury-vision** — ledger-ruled background, stamp, role cards with dashed flows.
15. **15 security-first** — single giant verification tick, mono refusal list, CHAIN=TRUTH stamp.
16. **16-roadmap** — ascending dotted path with LIVE NOW / NEXT / EXPLORING plates.
17. **17-creator-experience** — warm aurora field with a token identity card "taking shape".
18. **18-relaypad-vision** — starfield + horizon-arc cinematic manifesto finale.

## 4. Prohibitions honored

No rockets, no floating coins (13 is an intentional outlined concept, not a shiny coin),
no purple gradients, no fake audit badges (15), no invented numbers, no fake contract
addresses (09 uses an explicitly illustrative masked pattern), no invented dates (16).
