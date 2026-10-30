/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The Raydium and Pump SDKs ship large CJS/ESM bundles that must not be
  // server-component dependencies; they are imported dynamically on the client.
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
