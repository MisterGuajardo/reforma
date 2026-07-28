import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/reforma",
  trailingSlash: true,
  assetPrefix: "/reforma",
};

export default nextConfig;
