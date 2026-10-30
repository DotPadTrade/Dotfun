import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { WalletProviders } from "@/components/wallet/wallet-providers";
import { AppShell } from "@/components/layout/app-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

/**
 * metadataBase origin — resolves relative Open Graph / Twitter image URLs
 * (e.g. /relaypad-banner.jpg) to absolute URLs.
 *
 * - Production (Vercel builds): VERCEL_PROJECT_PRODUCTION_URL is injected by
 *   the platform and reflects the production domain (currently
 *   https://relaypad-solflow.vercel.app — verified live; note the project is
 *   behind Vercel Deployment Protection/SSO until public launch, and any
 *   custom domain added in the Vercel dashboard is picked up automatically).
 * - Local development: NEXT_PUBLIC_APP_URL from .env.local
 *   (http://localhost:3300).
 */
const metadataOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_APP_URL?.trim() || "http://localhost:3300";

export const metadata: Metadata = {
  metadataBase: new URL(metadataOrigin),
  title: {
    default: "DotPad — One Launchpad. Two Routes.",
    template: "%s | DotPad",
  },
  description:
    "DotPad is a Solana token launchpad with two routes: Pump.fun bonding curve to PumpSwap, or Raydium LaunchLab bonding curve to a Raydium CPMM pool.",
  applicationName: "DotPad",
  openGraph: {
    title: "DotPad — One Launchpad. Two Routes.",
    description:
      "Launch tokens on Solana via Pump.fun → PumpSwap or Raydium LaunchLab → CPMM. Choose your route.",
    siteName: "DotPad",
    type: "website",
    images: [{ url: "/relaypad-banner.jpg", width: 2048, height: 682, alt: "DotPad" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <WalletProviders>
          <AppShell>{children}</AppShell>
        </WalletProviders>
      </body>
    </html>
  );
}
