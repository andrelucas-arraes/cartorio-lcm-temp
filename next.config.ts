import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Suprime avisos de hidratação causados por extensões do navegador
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  images: {
    qualities: [75, 80],
  },
};

export default nextConfig;
