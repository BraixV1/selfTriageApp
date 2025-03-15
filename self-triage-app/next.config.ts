import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/',
  assetPrefix: '/', // Add this line
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Add this line
};

export default nextConfig;