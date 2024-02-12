/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: [
    'strapi-qr-code-generator-production.up.railway.app', 
    'localhost',
    'forestlake-markers-production.up.railway.app',
    'forestlakeparks-qr-code-production.up.railway.app',
    'api-qrcode.forestlake-uat.com',
  ],
  },
}

module.exports = nextConfig
