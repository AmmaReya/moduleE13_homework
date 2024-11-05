const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true, // Hot Module Replacement
    open: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});