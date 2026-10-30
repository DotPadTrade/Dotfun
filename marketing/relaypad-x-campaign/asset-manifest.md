# Asset Manifest — RelayPad X Campaign

All banners: **1600 × 900 px, 16:9, PNG**, exported individually at 1× scale.
Rendering: HTML/CSS/SVG compositions in `sources/` → system Chrome via the
repository's existing `playwright-core` install (`sources/render.js`).

| # | File | Concept | Pair |
|---|---|---|---|
| 01 | `01-meet-relaypad.png` | Cinematic type reveal + right-bleed watermark | POST 01 |
| 02 | `02-two-launch-routes.png` | Vertical split, converging chevrons, spine emblem | POST 02 |
| 03 | `03-pumpfun-route.png` | Bonding curve → graduation gate → PumpSwap node | POST 03 |
| 04 | `04-raydium-launchlab-route.png` | Orbital CPMM system + liquidity ribbon (ice) | POST 04 |
| 05 | `05-creation-to-discovery.png` | Winding 4-stage journey path | POST 05 |
| 06 | `06-discovery-engine.png` | Rotated card collage + category chips | POST 06 |
| 07 | `07-market-movers.png` | Kinetic MOVERS type + streaks + tri glyphs | POST 07 |
| 08 | `08-new-launches-new-pools.png` | Split panels, rings vs pools, `≠` medallion | POST 08 |
| 09 | `09-vanity-mint.png` | Giant base58 subject, prefix target, attempt counter | POST 09 |
| 10 | `10-onchain-interactions.png` | Wallet → Transaction → Solana technical lane | POST 10 |
| 11 | `11-technology-stack.png` | Isometric slab stack of the real stack | POST 11 |
| 12 | `12-relaypad-differentiation.png` | Numbered editorial index rows | POST 12 |
| 13 | `13-why-relay.png` | Conceptual $R halo coin + "not yet launched" chip | POST 13 |
| 14 | `14-treasury-vision.png` | Ledger ruling, READ-ONLY stamp, role cards | POST 14 |
| 15 | `15-security-first.png` | Giant verification tick + refusal list | POST 15 |
| 16 | `16-roadmap.png` | Ascending LIVE NOW / NEXT / EXPLORING path | POST 16 |
| 17 | `17-creator-experience.png` | Warm aurora + token identity card | POST 17 |
| 18 | `18-relaypad-vision.png` | Starfield + horizon-arc manifesto finale | POST 18 |

Plus `contact-sheet.png` (internal review montage — not a substitute for the
18 individual files above).

## Sources (editable)

- `sources/banner-01…banner-18 .html` — one standalone design per banner (no shared template).
- `sources/render.js` — exports every HTML at exactly 1600×900 (`node render.js [nn …]`).
- `sources/check-logo.js` — logo transparency sanity check.
- Logo referenced everywhere: `../../../public/relaypad-logo-transparent.png` (official asset).

## Regenerating

```
cd marketing/relaypad-x-campaign/sources
node render.js          # all 18
node render.js 07 14    # subset
```
