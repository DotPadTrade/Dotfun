// @vitest-environment jsdom
/**
 * Token image normalization + graceful-fallback tests.
 *
 * Root cause covered here: dashboard records can carry fixture URLs
 * (https://ipfs.io/ipfs/example.png) that never resolve, and the ipfs.io
 * gateway itself now answers browser requests with HTTP 429. TokenImage must
 * normalize `ipfs://`/`ipfs.io` references and fall back to a symbol avatar
 * when an image genuinely cannot load — without retry loops or layout shifts.
 */
import { afterEach, describe, expect, it, vi, beforeEach } from "vitest";
import { createElement } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DEFAULT_IPFS_GATEWAY, toBrowserImageUrl } from "@/lib/image-url";
import { TokenImage } from "@/components/dashboard/token-row";

afterEach(cleanup);

describe("toBrowserImageUrl", () => {
  it("passes plain https URLs through unchanged", () => {
    expect(toBrowserImageUrl("https://example.com/token.png")).toBe(
      "https://example.com/token.png",
    );
    expect(toBrowserImageUrl("http://example.com/token.png")).toBe(
      "http://example.com/token.png",
    );
  });

  it("rewrites the deprecated ipfs.io gateway host to the configured gateway", () => {
    expect(
      toBrowserImageUrl("https://ipfs.io/ipfs/QmHash/token.png"),
    ).toBe(`https://${DEFAULT_IPFS_GATEWAY}/ipfs/QmHash/token.png`);
    expect(
      toBrowserImageUrl("http://ipfs.io/ipfs/QmHash/token.png"),
    ).toBe(`https://${DEFAULT_IPFS_GATEWAY}/ipfs/QmHash/token.png`);
  });

  it("converts ipfs:// URIs into gateway URLs (with and without paths)", () => {
    expect(toBrowserImageUrl("ipfs://QmHash")).toBe(
      `https://${DEFAULT_IPFS_GATEWAY}/ipfs/QmHash`,
    );
    expect(toBrowserImageUrl("ipfs://QmHash/token.png")).toBe(
      `https://${DEFAULT_IPFS_GATEWAY}/ipfs/QmHash/token.png`,
    );
  });

  it("supports a custom gateway override", () => {
    expect(toBrowserImageUrl("ipfs://QmHash", "mygateway.example")).toBe(
      "https://mygateway.example/ipfs/QmHash",
    );
    expect(
      toBrowserImageUrl("https://ipfs.io/ipfs/QmHash", "mygateway.example"),
    ).toBe("https://mygateway.example/ipfs/QmHash");
  });

  it("passes data: image URIs through", () => {
    expect(toBrowserImageUrl("data:image/png;base64,AAAA")).toBe(
      "data:image/png;base64,AAAA",
    );
  });

  it("returns null for missing, empty, whitespace or unrenderable values", () => {
    expect(toBrowserImageUrl(null)).toBeNull();
    expect(toBrowserImageUrl(undefined)).toBeNull();
    expect(toBrowserImageUrl("")).toBeNull();
    expect(toBrowserImageUrl("   ")).toBeNull();
    expect(toBrowserImageUrl("not-a-url")).toBeNull();
    expect(toBrowserImageUrl("QmHash")).toBeNull();
  });
});

describe("TokenImage fallback behavior", () => {
  beforeEach(() => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  // The component renders decorative thumbnails (alt=""), which have no
  // implicit "img" ARIA role — query the DOM directly instead.
  function renderImage(props: { imageUrl?: string | null; symbol: string }) {
    const utils = render(
      createElement(TokenImage, { symbol: props.symbol, imageUrl: props.imageUrl ?? null }),
    );
    const img = () => utils.container.querySelector("img");
    const fallback = () => utils.container.querySelector("span");
    return { ...utils, img, fallback };
  }

  it("renders a normalized https image", () => {
    const view = renderImage({ imageUrl: "https://example.com/token.png", symbol: "EVA" });
    expect(view.img()?.getAttribute("src")).toBe("https://example.com/token.png");
    expect(view.fallback()).toBeNull();
  });

  it("renders a converted ipfs:// image through the gateway", () => {
    const view = renderImage({ imageUrl: "ipfs://QmHash/token.png", symbol: "EVA" });
    expect(view.img()?.getAttribute("src")).toBe(
      `https://${DEFAULT_IPFS_GATEWAY}/ipfs/QmHash/token.png`,
    );
  });

  it("rewrites an ipfs.io URL before rendering", () => {
    const view = renderImage({
      imageUrl: "https://ipfs.io/ipfs/example.png",
      symbol: "EVA",
    });
    expect(view.img()?.getAttribute("src")).toBe(
      `https://${DEFAULT_IPFS_GATEWAY}/ipfs/example.png`,
    );
  });

  it("falls back to the symbol avatar when the image fails to load", () => {
    const view = renderImage({
      imageUrl: "https://ipfs.io/ipfs/example.png",
      symbol: "EVA",
    });
    expect(view.img()).not.toBeNull();
    fireEvent.error(view.img() as Element);
    // The broken <img> is replaced by the initials avatar — same size frame.
    expect(view.img()).toBeNull();
    expect(screen.getByText("EV")).toBeTruthy();
  });

  it("shows the initials avatar immediately when no image reference exists", () => {
    const view = renderImage({ imageUrl: null, symbol: "UIA" });
    expect(view.img()).toBeNull();
    expect(screen.getByText("UI")).toBeTruthy();
  });

  it("does not retry the broken URL after falling back", () => {
    const view = renderImage({
      imageUrl: "https://ipfs.io/ipfs/example.png",
      symbol: "EVA",
    });
    const img = view.img() as Element;
    fireEvent.error(img);
    expect(view.img()).toBeNull();
    // Firing further errors on the unmounted element must not resurrect it.
    fireEvent.error(img);
    expect(view.img()).toBeNull();
    expect(screen.getByText("EV")).toBeTruthy();
  });

  it("resets the fallback when a working URL replaces the broken one", () => {
    const first = renderImage({
      imageUrl: "https://ipfs.io/ipfs/example.png",
      symbol: "EVA",
    });
    fireEvent.error(first.img() as Element);
    expect(first.img()).toBeNull();
    first.rerender(
      createElement(TokenImage, {
        imageUrl: "https://example.com/fixed.png",
        symbol: "EVA",
      }),
    );
    expect(first.img()?.getAttribute("src")).toBe("https://example.com/fixed.png");
  });
});
