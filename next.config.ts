import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "media.istockphoto.com"
    ],
  },
};

export default nextConfig;
