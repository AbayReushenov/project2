module.exports = {
    entry: './src/index.js',
    output: {
      filename: './bundle.js',
      library: 'myApp',
  },
    mode: 'development',
    watch: true,
    watchOptions: {
    poll: 1000 // Check for changes every second
    }
}