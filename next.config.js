/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['healthyvibeshub.com'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
