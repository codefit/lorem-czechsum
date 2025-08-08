import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@heroui/react'],
  },
  // Zajistí lepší client-side routing
  trailingSlash: false,
  // Optimalizace pro SPA chování
  swcMinify: true,
  // Validace environment proměnných
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
