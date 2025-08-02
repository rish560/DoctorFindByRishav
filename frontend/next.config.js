/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  // Disable static generation completely
  output: 'standalone',
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // Force server-side rendering
  trailingSlash: false,
  generateEtags: false,
}

module.exports = nextConfig
