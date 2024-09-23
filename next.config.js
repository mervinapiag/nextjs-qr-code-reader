/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: [
    'localhost',
    'api-pangasinan-qrcode.forestlake-uat.com',
    'api-malasiqui-qrcode.forestlake-uat.com',
    'api-san-miguel-bulacan-qrcode.forestlake-uat.com',
    'api-gensan-qrcode.forestlake-uat.com',
    'api-orani-qrcode.forestlake-uat.com',
    'api-qrcode.forestlake-uat.com'
  ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
