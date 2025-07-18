/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Only use static export for local builds, not for Vercel
  output: process.env.VERCEL ? undefined : 'export',
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `canvas` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }
    
    return config;
  },
  // For static export with Next.js 13
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig; 