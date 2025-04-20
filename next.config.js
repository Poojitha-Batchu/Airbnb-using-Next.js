/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: process.env.NODE_ENV === 'production' ? '/Airbnb-using-Next.js' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Airbnb-using-Next.js/' : '',
  basePath: '/Airbnb-using-Next.js', 
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
