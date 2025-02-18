import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
