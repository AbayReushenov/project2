module.exports = {
    entry: './src/index.js',
    output: {
      filename: './main.js',
      library: 'dist',
  },
    mode: 'development',
    watch: true,
    watchOptions: {
    poll: 1000 // Check for changes every second
    }
}