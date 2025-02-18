import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // WARNING: This allows production builds to succeed even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Add other Next.js configuration options as needed
};

export default nextConfig;
