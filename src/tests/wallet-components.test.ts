// @vitest-environment jsdom
/**
 * WalletButton / WalletModal UI-state tests (provider mocked).
 * The connection lifecycle itself is covered in wallet-connection.test.ts.
 * Written with React.createElement (no JSX) so the file stays a `.test.ts`,
 * matching the project's vitest include pattern.
 */
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { createElement } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

// RTL auto-cleanup requires global afterEach (vitest `globals` is off in this
// project) — unmount every rendered tree explicitly between tests.
afterEach(cleanup);
import { WalletButton } from "@/components/wallet/wallet-button";
import { WalletModal, WalletModalProvider, useWalletModalState } from "@/components/wallet/wallet-modal";

const walletState = vi.hoisted(() => ({
  publicKey: null as { toBase58: () => string } | null,
  wallet: null as { adapter: { name: string } } | null,
  connecting: false,
  disconnect: vi.fn(),
  select: vi.fn(),
  wallets: [] as { adapter: { name: string; url: string; icon: string }; readyState: string }[],
}));

vi.mock("@solana/wallet-adapter-react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@solana/wallet-adapter-react")>();
  return { ...actual, useWallet: () => walletState };
});

function ModalOpener() {
  const { setOpen } = useWalletModalState();
  return createElement(
    "button",
    { onClick: () => setOpen(true), "data-testid": "open-modal" },
    "open",
  );
}

function renderButton(props: { error?: string | null; clearError?: () => void } = {}) {
  return render(
    // eslint-disable-next-line react/no-children-prop -- ts(2769): WalletModalProvider types `children` as required
    createElement(WalletModalProvider, {
      error: props.error ?? null,
      clearError: props.clearError,
      children: [createElement(WalletButton, { key: "button" }), createElement(WalletModal, { key: "modal" })],
    }),
  );
}

beforeEach(() => {
  walletState.publicKey = null;
  walletState.wallet = null;
  walletState.connecting = false;
  walletState.disconnect.mockReset();
  walletState.select.mockReset();
  walletState.wallets = [];
});

describe("WalletButton", () => {
  it("shows a disabled Connecting… state while an attempt is in flight", () => {
    walletState.connecting = true;
    renderButton();
    const button = screen.getByText("Connecting…").closest("button");
    expect(button).not.toBeNull();
    expect(button?.disabled).toBe(true);
  });

  it("shows Connect Wallet with a friendly error after a failed attempt", () => {
    renderButton({ error: "The wallet took too long to respond." });
    expect(screen.getByRole("alert").textContent).toContain("took too long");
    expect(screen.getByText("Connect Wallet")).toBeTruthy();
  });

  it("clears the error and opens the modal for a fresh attempt", () => {
    const clearError = vi.fn();
    renderButton({ error: "boom", clearError });
    walletState.wallets = [
      {
        adapter: { name: "Phantom", url: "https://phantom.app", icon: "data:image/gif;base64,R0lGODlhAQABAAAAACw=" },
        readyState: "Installed",
      },
    ];
    fireEvent.click(screen.getByText("Connect Wallet"));
    expect(clearError).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("dialog")).toBeTruthy();
  });

  it("shows the connected wallet with Switch and Exit actions", () => {
    const address = "G7c93PGdhfymVr3r26ASpqbdACw5xeNuKq34WSbQX3qT";
    walletState.publicKey = { toBase58: () => address };
    walletState.wallet = { adapter: { name: "Phantom" } };
    renderButton();
    expect(screen.getByText("G7c9…X3qT")).toBeTruthy();
    expect(screen.getByText("Switch")).toBeTruthy();
    fireEvent.click(screen.getByText("Exit"));
    expect(walletState.disconnect).toHaveBeenCalledTimes(1);
  });
});

describe("WalletModal", () => {
  it("renders the connection error inside the modal", () => {
    render(
      // eslint-disable-next-line react/no-children-prop -- ts(2769): children required in props
      createElement(WalletModalProvider, {
        error: "The connection request was rejected in the wallet.",
        children: [
          createElement(ModalOpener, { key: "opener" }),
          createElement(WalletModal, { key: "modal" }),
        ],
      }),
    );
    fireEvent.click(screen.getByTestId("open-modal"));
    expect(screen.getByRole("alert").textContent).toContain("rejected");
  });

  it("disables wallet options while a connection attempt is in flight", () => {
    walletState.connecting = true;
    walletState.wallets = [
      {
        adapter: { name: "Phantom", url: "https://phantom.app", icon: "data:image/gif;base64,R0lGODlhAQABAAAAACw=" },
        readyState: "Installed",
      },
    ];
    render(
      // eslint-disable-next-line react/no-children-prop -- ts(2769): children required in props
      createElement(WalletModalProvider, {
        children: [
          createElement(ModalOpener, { key: "opener" }),
          createElement(WalletModal, { key: "modal" }),
        ],
      }),
    );
    fireEvent.click(screen.getByTestId("open-modal"));
    const option = screen.getByRole("button", { name: /Phantom/ }) as HTMLButtonElement;
    expect(option.disabled).toBe(true);
  });
});
