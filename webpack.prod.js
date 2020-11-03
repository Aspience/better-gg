const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = 'production';

module.exports = env => {
  const webpackCommonConfig = require('./webpack.common.js')(NODE_ENV);

  return merge(webpackCommonConfig, {
    mode: NODE_ENV,
    devtool: false,
    stats: 'errors-warnings',
    performance: {
      hints: false,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
      ],
    },
    plugins: [new CleanWebpackPlugin()],
  });
};
