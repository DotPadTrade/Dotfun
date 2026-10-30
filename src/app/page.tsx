import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { TrendingPanel } from "@/components/dashboard/trending-panel";
import { ActivityPanel } from "@/components/dashboard/activity-panel";
import { LeaderboardPanel } from "@/components/dashboard/leaderboard-panel";
import { LatestPanel } from "@/components/dashboard/latest-panel";
import { OfficialTokenCard } from "@/components/official/official-token-card";
import { getRelayOfficialConfig } from "@/lib/relay-official/config";
import { officialTokenView } from "@/lib/relay-official/token-display";

/**
 * RelayPad dashboard home — a dense, live launch terminal. All panels render
 * real registry data with honest empty states; no fabricated market metrics.
 *
 * Force-dynamic: the Official $RELAY contract address must reflect the
 * CURRENT RELAY_OFFICIAL_MINT configuration on every request — a statically
 * prerendered CA would keep showing a stale (or placeholder) address after
 * the official mint is configured.
 */
export const dynamic = "force-dynamic";

export default function DashboardHomePage() {
  const officialToken = officialTokenView(getRelayOfficialConfig());
  return (
    <div className="animate-fade-up">
      {/* Cinematic banner hero */}
      <section className="relative mb-5 overflow-hidden rounded-2xl border border-night-700/80 bg-night-900 shadow-panel">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/relaypad-banner.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/75 to-night-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-night-950/50" />
        </div>

        <div className="relative px-6 py-10 sm:px-10 sm:py-14">
          <div className="max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-mint-700/40 bg-mint-700/10 px-3 py-1 text-2xs font-semibold uppercase tracking-widest text-mint-400">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-mint-500" />
              Solana launchpad
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              One Launchpad. <span className="text-mint-400">Two Routes.</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm text-night-400">
              Launch tokens on Solana through Pump.fun&apos;s bonding curve to PumpSwap, or
              Raydium LaunchLab&apos;s curve to a CPMM pool — with vanity mints, verified
              launches and honest, live data.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 rounded-xl bg-mint-500 px-5 py-2.5 text-sm font-semibold text-night-950 shadow-glow-mint transition hover:bg-mint-400"
              >
                <Icon name="rocket" size={15} />
                Create Token
              </Link>
              <Link
                href="/tokens"
                className="inline-flex items-center gap-2 rounded-xl border border-mint-600/50 bg-mint-600/10 px-5 py-2.5 text-sm font-medium text-mint-300 transition hover:bg-mint-600/20"
              >
                <Icon name="compass" size={15} />
                Explore Tokens
              </Link>
              <Link
                href="/vanity"
                className="inline-flex items-center gap-2 rounded-xl border border-night-600 px-5 py-2.5 text-sm font-medium text-night-400 transition hover:border-night-500 hover:text-white"
              >
                <Icon name="wand" size={15} />
                Vanity Mint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Launch-route cards — the core RelayPad concept */}
      <section aria-label="Launch routes" className="mb-5 grid gap-3 sm:grid-cols-2">
        <Link
          href="/create"
          className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-mint-700/30 bg-night-850 p-5 transition hover:border-mint-600/60 hover:shadow-glow-mint"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-700/20 text-mint-400">
            <Icon name="zap" size={18} />
          </span>
          <span>
            <span className="block text-base font-semibold text-white">
              Pump Route{" "}
              <span className="ml-1 text-2xs font-normal uppercase tracking-wider text-mint-400">
                Route A
              </span>
            </span>
            <span className="mt-1 block text-xs text-night-500">
              Pump.fun bonding curve → PumpSwap. Graduation handled by pump.fun&apos;s protocol.
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint-400">
            Start on Pump
            <Icon name="chevronRight" size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
        <Link
          href="/create"
          className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-ice-600/30 bg-night-850 p-5 transition hover:border-ice-500/60"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ice-600/20 text-ice-300">
            <Icon name="layers" size={18} />
          </span>
          <span>
            <span className="block text-base font-semibold text-white">
              LaunchLab Route{" "}
              <span className="ml-1 text-2xs font-normal uppercase tracking-wider text-ice-300">
                Route B
              </span>
            </span>
            <span className="mt-1 block text-xs text-night-500">
              Raydium LaunchLab curve → Raydium CPMM. Migration executed by Raydium.
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ice-300">
            Start on LaunchLab
            <Icon name="chevronRight" size={13} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </section>

      {/* Four-panel dashboard grid with independent panel scrolling on desktop */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-4">
        <div className="min-w-0">
          <TrendingPanel />
        </div>
        <div className="min-w-0">
          <ActivityPanel />
        </div>
        <div className="min-w-0">
          <LeaderboardPanel />
        </div>
        <div className="min-w-0">
          <LatestPanel />
        </div>
      </div>

      {/* Official $RELAY token — public CA display with honest status */}
      <section aria-label="Official $DOT token" className="mt-3">
        <OfficialTokenCard initialView={officialToken} />
      </section>
    </div>
  );
}
