const Webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

module.exports = NODE_ENV => {
  const isProd = NODE_ENV === 'production';

  return {
    entry: config.entry.app,
    output: {
      publicPath: config.paths.public,
      path: config.paths.dist,
      filename: config.files.bundle,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: config.entry.devServer,
        filename: config.files.template,
        minify: isProd
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              removeScriptTypeAttributes: true,
            }
          : false,
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
        },
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          loader: 'babel-loader',
          include: config.paths.src,
          exclude: /node_modules/,
        },
      ],
    },
  };
};
