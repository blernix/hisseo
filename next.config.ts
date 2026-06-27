import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverActions: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
