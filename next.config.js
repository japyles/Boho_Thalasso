/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains here
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}

module.exports = nextConfig
