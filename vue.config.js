const port = 7070
const title = '最佳实践'

module.exports = {
  publicPath: '/best-pratice',
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  }
}
