/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    domains: ['via.placeholder.com'],
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
    
    // Add a rule to handle binary files
    config.module.rules.push({
      test: /node_modules\/canvas/,
      use: 'null-loader',
    });
    
    return config;
  },
  // For static export with Next.js 13
  trailingSlash: true,
  basePath: '',
};

module.exports = nextConfig; 