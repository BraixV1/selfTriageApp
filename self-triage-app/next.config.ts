import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/selfTriageApp',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
