/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webservice.tcsa.**',
        port: '',
      },
    ],
  },

}


module.exports = nextConfig

