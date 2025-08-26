/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
     unoptimized: true,
     domains: ["images.unsplash.com"], // ✅ Unsplash allow করলাম
  },
  output: 'export',
  trailingSlash: true
};

export default nextConfig;
