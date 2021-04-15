const baseConfig = require('./webpack.config.js');
const webpack = require('webpack');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const updatedConfig = Object.assign({}, baseConfig, {
  entry: ['webpack/hot/poll?100', ...baseConfig.entry],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RunScriptWebpackPlugin({
      name: 'index.js',
    }),
  ],
  externals: [
    nodeExternals({
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    // poll: 1000,
    ignored: '**/node_modules',
  },
  mode: 'development',
});

module.exports = updatedConfig;
