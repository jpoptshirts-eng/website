import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid devtools-related bundler issues seen with Next 15.5
  devIndicators: false,
};

export default nextConfig;
