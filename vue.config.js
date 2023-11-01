module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/derkora.github.io/' + process.env.CI_PROJECT_NAME + '/'
      : '/'
  }