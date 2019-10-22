const port = 7070
const title = '最佳实践'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/best-pratice',
  devServer: {
    port
  },
  configureWebpack: {
    name: title
  },
  chainWebpack (config) {
    // 排除已有的处理 .svg 的loader 处理icons目录
    config.module.rule('svg')
      .exclude.add(resolve('src/icons'))

    // 新增svg-sprite-loader
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
