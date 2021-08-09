const path = require("path");
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  assetPrefix: isProd ? '/webfono/' : '',
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path:  isProd ? 'https://fonovital.github.io/webfono/' : '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
};
