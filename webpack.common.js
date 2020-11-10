const Webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractorPlugin = require('mini-css-extract-plugin');
const loaderUtils = require('loader-utils');

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
      plugins: [new TsconfigPathsPlugin({
        configFile: config.files.tsconfig,
      })],
    },
    plugins: [
      new MiniCssExtractorPlugin({
        filename: 'assets/styles.css',
      }),
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
        {
          test: /\.(sa|sc|c)ss$/i,
          exclude: [/node_modules/],
          use: [
            {
              loader: MiniCssExtractorPlugin.loader,
              options: {
                // hmr: !isProd,
              },
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  getLocalIdent(context, localIdentName, localName, options) {
                    // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
                    const fileNameOrFolder = context.resourcePath.match(
                      /index\.module\.(css|scss|sass)$/
                    )
                      ? '[folder]'
                      : '[name]';
                    // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
                    const hash = loaderUtils.getHashDigest(
                      path.posix.relative(context.rootContext, context.resourcePath) + localName,
                      'md5',
                      'base64',
                      5
                    );
                    // Use loaderUtils to find the file or folder name
                    const className = loaderUtils.interpolateName(
                      context,
                      fileNameOrFolder + '_' + localName + '_' + hash,
                      options
                    );
                    // remove the .module that appears in every classname when based on the file.
                    return className.replace('.module_', '--');
                  }
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
};
