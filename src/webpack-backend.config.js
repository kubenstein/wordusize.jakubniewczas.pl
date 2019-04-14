const NodemonPlugin = require('nodemon-webpack-plugin');
const libConfig = require('./webpack-lib.config.js');

const srcDir = __dirname;
const rootDir = `${srcDir}/../`;

const backendConfig = libConfig;

backendConfig.entry = `${srcDir}/backend/server-runner.js`;

backendConfig.output = {
  path: process.env.NODE_ENV === 'production' ? `${rootDir}/dist/` : `${rootDir}/.tmp/dist/`,
  publicPath: '/',
  filename: 'bundled-server-runner.js',
};

backendConfig.plugins = [
  new NodemonPlugin({
    verbose: true,
    nodeArgs: ['--inspect', '--debug'],
  }),
];


module.exports = backendConfig;
