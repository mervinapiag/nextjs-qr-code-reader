/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: [
    'strapi-qr-code-generator-production.up.railway.app', 
    'localhost',
    'forestlake-markers-production.up.railway.app',
    'forestlakeparks-qr-code-production.up.railway.app',
    '13.250.104.118:1337',
    '13.250.104.118'
  ],
  },
}

module.exports = nextConfig
