/** @type {import('next').NextConfig} */

const {i18n} = require("./next-i18next.config")
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '652f91320b8d8ddac0b2b62b.mockapi.io',
        port: '',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
}

module.exports = nextConfig
