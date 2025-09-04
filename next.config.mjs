/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true, // JS/TS faster minify
  output: 'standalone', // Vercel optimized deploy
  images: {
    domains: ["images.unsplash.com", "yourdomain.com"], // trusted sources
    /* formats: ["image/avif", "image/webp",'image/jpg'], */ // modern formats for optimization
    minimumCacheTTL: 60, // seconds, for stale images
  },
  async headers() {
    return [
      {
        source: '/(.*)', // all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate', // HTML short TTL
          },
        ],
      },
      {
        source: '/_next/static/(.*)', // JS, CSS
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year cache for static assets
          },
        ],
      },
      {
        source: '/images/(.*)', // public images
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year cache
          },
        ],
      },
    ];
  },

};

export default nextConfig;
