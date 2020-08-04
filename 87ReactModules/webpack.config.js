'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'app',
  },
    watch: true,
    watchOptions: {
    poll: 1000 // Check for changes every second
    },
    devtool: "source-map"
}


