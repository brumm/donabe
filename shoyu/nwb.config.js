module.exports = {
  type: 'react-component',
  webpack: {
    extra: {
      output: {
        library: 'registerModule',
        libraryTarget: 'jsonp'
      }
    }
  },
  npm: {
    esModules: false,
    umd: true
  }
}
