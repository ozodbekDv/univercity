import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // yoki kerakli limit, masalan '10mb'
    },
  },
};

export default nextConfig;
