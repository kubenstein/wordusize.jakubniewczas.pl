const fs = require('fs');

const srcDir = __dirname;
const rootDir = `${srcDir}/../`;

// taken from http://jlongster.com/Backend-Apps-with-Webpack--Part-I
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => (['.bin'].indexOf(x) === -1))
  .forEach((mod) => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  output: {
    path: `${rootDir}/dist/`,
    publicPath: '/',
    filename: 'wordusize.js',
    library: 'wordusize',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  node: {
    __dirname: false,
    __filename: false,
  },

  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    node: 'current',
                  },
                }],
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [
      srcDir,
      rootDir,
      'node_modules',
    ],
  },

  externals: nodeModules,
};
