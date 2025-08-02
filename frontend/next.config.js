/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['via.placeholder.com'],
  },
  // Remove standalone for now to fix 502 error
  experimental: {
    isrMemoryCacheSize: 0,
  },
}

module.exports = nextConfig
