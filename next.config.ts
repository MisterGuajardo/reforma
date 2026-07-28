import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  basePath: "/reforma",
  trailingSlash: true,
  assetPrefix: "/reforma",
};

export default nextConfig;
