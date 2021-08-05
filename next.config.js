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
    path: 'https://fonovital.github.io/webfono/'
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
