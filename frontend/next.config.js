/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, // Disable minification to get better error messages
  images: {
    domains: ['via.placeholder.com'],
  },
  // Use standalone for Render deployment
  output: 'standalone',
  experimental: {
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
