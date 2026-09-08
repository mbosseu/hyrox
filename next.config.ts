import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400],
    imageSizes: [64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
