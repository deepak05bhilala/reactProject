/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // ✅ Required for static export
  basePath: '/reactProject',      // ✅ Your GitHub repo name
  assetPrefix: '/reactProject/',  // ✅ Ensures assets load correctly
  images: {
    unoptimized: true,            // ✅ Required for static export to work with <Image />
  },
};

export default nextConfig;
