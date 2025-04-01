/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core Settings
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: false, // Disable for better performance

  // Image Optimization
  images: {
    domains: [
      'images.unsplash.com',       // For placeholder images
      'yourusername.github.io',    // If hosting images on GitHub
      'res.cloudinary.com'         // If using Cloudinary
    ],
    formats: ['image/webp'],       // Force WebP for better compression
    minimumCacheTTL: 60 * 60 * 24, // 1 day cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers & Security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
    ];
  },

  // Build Optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in prod
    styledComponents: true, // If using styled-components
  },

  // Environment Variables
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID, // Example env var
  },

  // Webpack Overrides
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  }
};

module.exports = nextConfig;
