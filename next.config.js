/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export
  distDir: 'dist',   // Output directory
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
}

module.exports = nextConfig
