const path = require('path');

const resolve = pathIn => path.resolve(__dirname, pathIn);

const devServer = resolve('devServer');
const src = resolve('src');
const assets = resolve('assets');
const dist = resolve('dist');
const ssl = resolve('ssl');

const template = 'index.html';

module.exports = {
  paths: {
    devServer,
    src,
    assets,
    dist,
    public: '/',
    ssl,
  },
  entry: {
    app: path.join(src, 'index.ts'),
    devServer: path.join(devServer, template),
    privateKey: path.join(ssl, 'private.key'),
    privateCrt: path.join(ssl, 'private.crt'),
  },
  files: {
    template,
    bundle: 'better-gg-bundle.js',
  },
};
