import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // RelayPad terminal palette — deep charcoal, near-black surfaces.
        night: {
          950: "#08090c",
          900: "#0c0e12",
          850: "#101318",
          800: "#151920",
          700: "#1e232b",
          600: "#2a3038",
          500: "#3e4650",
          400: "#5c646f",
        },
        mint: {
          300: "#8ae8a0",
          400: "#55d26c",
          500: "#2eb246",
          600: "#1f8f36",
          700: "#176b2a",
        },
        ice: {
          300: "#a5d8ff",
          400: "#74c0fc",
          500: "#3b9eff",
          600: "#1c7ed6",
        },
        // Performance colors (verified positive/negative only)
        up: "#22c55e",
        down: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", "1rem"],
      },
      boxShadow: {
        panel: "0 1px 2px rgba(0,0,0,0.4)",
        "glow-mint": "0 0 18px -6px rgba(46, 178, 70, 0.45)",
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
