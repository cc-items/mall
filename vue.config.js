/* resolve和解析相关的配置. */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        common: '@/common',
        views: '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~assets/css/base.scss";`
      }
    }
  },
  publicPath: './'
}
