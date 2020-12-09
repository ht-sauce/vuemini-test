const vueConfig = {
  chainWebpack: config => {
    // 参考https://github.com/vuejs/vue-cli/issues/5610
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader(require.resolve('vue-loader-v16'))
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => /^ion-/.test(tag), // 定义全局解析，用于jsx
        }
        return options
      })
  },
}

module.exports = vueConfig
