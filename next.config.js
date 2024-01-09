/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: ['strapi-qr-code-generator-production.up.railway.app', 'localhost','forestlake-markers-production.up.railway.app'],
  },
}

module.exports = nextConfig
