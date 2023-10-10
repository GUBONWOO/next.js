/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_tem',
        destination: '/products',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/koo',
        destination: '/about/me/koo',
      },
    ];
  },
};

module.exports = nextConfig;
