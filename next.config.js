/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/understanding-socket-weld-flanges-design-and-specifications',
        destination: '/blog/the-evolution-of-socket-flanges-from-design-to-application',
        permanent: true,
      },
      {
        source: '/blog/industrial-applications-for-socket-weld-flanges',
        destination: '/blog/the-evolution-of-socket-flanges-from-design-to-application',
        permanent: true,
      },
      {
        source: '/blog/standards-and-quality-assurance-in-socket-weld-flanges',
        destination: '/blog/choose-the-right-socket-flange',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
