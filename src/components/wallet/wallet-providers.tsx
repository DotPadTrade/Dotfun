"use client";

import { useCallback, useMemo, useState } from "react";
import { WalletAdapterNetwork, type WalletError } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

import {
  WalletModal,
  WalletModalProvider,
} from "./wallet-modal";
import { resolveBrowserRpcEndpoint } from "@/lib/connection";
import {
  WALLET_CONNECT_TIMEOUT_MS,
  describeWalletError,
  withConnectTimeout,
} from "@/lib/wallet/connect-lifecycle";
import { SolflareWalletAdapter } from "@/lib/wallet/solflare-adapter";

export function WalletProviders({ children }: { children: React.ReactNode }) {
  const network =
    process.env.NEXT_PUBLIC_RELAYPAD_NETWORK === "mainnet-beta"
      ? WalletAdapterNetwork.Mainnet
      : WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(
    () =>
      resolveBrowserRpcEndpoint(
        process.env.NEXT_PUBLIC_SOLANA_RPC_URL,
        network === WalletAdapterNetwork.Mainnet ? "mainnet-beta" : "devnet",
      ),
    [network],
  );

  // Connection failures (rejections, window closed, timeouts) land here so
  // the wallet button and modal can show a clear, user-friendly message.
  const [walletError, setWalletError] = useState<string | null>(null);
  const clearWalletError = useCallback(() => setWalletError(null), []);
  const reportWalletError = useCallback((error: WalletError) => {
    setWalletError(describeWalletError(error));
  }, []);

  // Solana-only wallet set, with every connect/auto-connect attempt bounded:
  // a wedged injected provider (browser wallet extensions) can never hang the
  // "Connecting…" state indefinitely — the attempt rejects with a typed
  // timeout error instead, which reportWalletError surfaces as a friendly
  // message.
  const wallets = useMemo(
    () =>
      [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network })].map(
        (adapter) =>
          withConnectTimeout(adapter, {
            timeoutMs: WALLET_CONNECT_TIMEOUT_MS,
            onConnectFailure: reportWalletError,
          }),
      ),
    [network, reportWalletError],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true} onError={reportWalletError}>

        <WalletModalProvider error={walletError} clearError={clearWalletError}>
          {children}
          <WalletModal />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

