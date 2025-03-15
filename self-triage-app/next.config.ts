import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/selfTriageApp',
  assetPrefix: '/selfTriageApp/', // Add this line
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Add this line
};

export default nextConfig;