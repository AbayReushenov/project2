'use strict';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  watch: true,

  devtool: "source-map",

  module: {},

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  }

};

SKIP_PREFLIGHT_CHECK=true


