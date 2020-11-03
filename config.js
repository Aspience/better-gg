const path = require('path');

const resolve = pathIn => path.resolve(__dirname, pathIn);

const devServer = resolve('devServer');
const src = resolve('src');
const assets = resolve('assets');
const dist = resolve('dist');

const template = 'index.html';

module.exports = {
  paths: {
    devServer,
    src,
    assets,
    dist,
    public: '/',
  },
  entry: {
    app: path.join(src, 'index.ts'),
    devServer: path.join(devServer, template),
  },
  files: {
    template,
    bundle: 'better-gg-bundle.js',
  },
};
