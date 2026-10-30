import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // DotPad forest identity — deep forest-green surfaces, emerald accents,
        // inspired by the official logo (dark green + white mark).
        night: {
          950: "#050B07", // primary background
          900: "#09130D", // secondary background (sidebar, topbar, modals)
          850: "#0D1911", // card background
          800: "#12251A", // elevated surface / hover surface
          700: "#1C3525", // borders
          600: "#2E7045", // hover borders / accent borders
          500: "#74877B", // faint text (hints, footnotes)
          400: "#9CAFA1", // secondary text
        },
        mint: {
          300: "#86EFAC", // soft green
          400: "#22C55E", // bright accent
          500: "#16A34A", // primary emerald
          600: "#15803D",
          700: "#166534", // deep forest border/tint
        },
        ice: {
          300: "#A7F3D0", // soft mint text
          400: "#6EE7B7",
          500: "#34D399",
          600: "#10B981",
        },
        // Performance colors (verified positive/negative only)
        up: "#22C55E",
        down: "#E05252", // restrained red for negative movement
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", "1rem"],
      },
      boxShadow: {
        panel: "0 1px 2px rgba(0,0,0,0.5), 0 12px 32px -16px rgba(0,0,0,0.55)",
        "glow-mint": "0 0 18px -6px rgba(34, 197, 94, 0.4)",
        "glow-emerald": "0 6px 20px -8px rgba(34, 197, 94, 0.5)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "fade-up": "fade-up 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

