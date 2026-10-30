import { TrendingPanel } from "@/components/dashboard/trending-panel";

export const metadata = { title: "Trending" };

export default function TrendingPage() {
  return (
    <div className="animate-fade-up">
      <header className="mb-4">
        <h1 className="text-lg font-semibold tracking-tight text-white">Trending</h1>
        <p className="mt-0.5 text-2xs text-night-500">
          Launches ranked by recent registry activity. Only verified on-chain data is shown.
        </p>
      </header>
      <TrendingPanel full />
    </div>
  );
}
