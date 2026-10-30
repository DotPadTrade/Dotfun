import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  esbuild: {
    // Next.js compiles app code with the automatic JSX runtime (no `import
    // React` needed) — tests must transform .tsx the same way or rendering
    // real components throws "React is not defined".
    jsx: "automatic",
  },
  test: {
    // Node environment: PDA derivation and Keypair generation need real
    // crypto (jsdom does not expose webcrypto by default).
    environment: "node",
    include: ["src/tests/**/*.test.ts"],
    testTimeout: 15000,
    server: {
      deps: {
        // The Pump SDK is published with CJS dependencies that break under
        // Vite's ESM interop unless inlined.
        inline: [/@pump-fun\//, /@coral-xyz\//],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
