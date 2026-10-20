import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Lets a phone on the same Wi-Fi load the dev server by LAN IP; otherwise its JS is blocked and
  // client-side buttons (e.g. the contact page close button) do nothing
  allowedDevOrigins: ['10.*.*.*', '192.168.*.*', '172.16.*.*'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
