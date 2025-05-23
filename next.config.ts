/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // static export mode
  basePath: '/reactProject',      // repo name here
  assetPrefix: '/reactProject/',  // repo name with trailing slash
  images: {
    unoptimized: true,            // disable image optimization for static export
  },
};

export default nextConfig;
