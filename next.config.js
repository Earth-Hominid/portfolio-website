/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    images: {
      allowFutureImage: true,
      formats: ['image/avif', 'image/webp'],
    },
  },
};
