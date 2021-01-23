const path = require('path')

module.exports = {
  indexPath: '../../templates/index.ftlh',
  outputDir: path.resolve(__dirname, '../resources/static/dist'),
  devServer: {
    port: 8081,
    proxy: 'http://localhost:8080',
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.plugin('html')
        .tap(args => {
          args[0].minify = false
          args[0].interpolate = true
          return args
        })
  }
};
