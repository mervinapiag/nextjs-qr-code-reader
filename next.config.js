/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: [
    'localhost',
    'api-pangasinan-qrcode.forestlakeparks.com',
    'api-malasiqui-qrcode.forestlakeparks.com',
    'api-san-miguel-bulacan-qrcode.forestlakeparks',
    'api-gensan-qrcode.forestlakeparks.com',
    'api-orani-qrcode.forestlakeparks.com',
    'api-binan-qrcode.forestlakeparks.com',
    'api-bayambang-qrcode.forestlakeparks.com'
  ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig
