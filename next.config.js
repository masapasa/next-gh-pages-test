const { name, homepage } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? homepage : '',
  basePath: isProd ? `/${name}` : '',
};
