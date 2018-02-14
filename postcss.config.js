const path = require('path');

const rootPath = path.resolve('');
const nodeEnv = process.env.NODE_ENV;

const config = {
  context: rootPath,
  entry: {
    index: './src/index/main.css',
    conf: './src/conf/main.css',
  },
  output: {
    path: `${rootPath}/public`,
    filename: '[name].bundle.css',
  },
  plugins: {
    'postcss-easy-import': {},
    'postcss-nested': {},
  },
};

if (nodeEnv === 'production') {
  config.plugins['cssnano'] = {};
}

module.exports = config;
