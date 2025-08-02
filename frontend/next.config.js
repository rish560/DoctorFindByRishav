/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  // Disable static export for dynamic pages
  output: 'standalone'
}

module.exports = nextConfig
