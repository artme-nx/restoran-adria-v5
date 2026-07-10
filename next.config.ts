import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /restoran-adria-v5/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/restoran-adria-v5" : "",
  images: { unoptimized: true },
};

export default nextConfig;
