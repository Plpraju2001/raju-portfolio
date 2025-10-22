import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Data_projects',
  images: {
    unoptimized: true
  },
};

export default nextConfig;