import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows production builds to succeed even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add any other config options here if needed.
};

export default nextConfig;
