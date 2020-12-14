module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [require('@vue/babel-plugin-jsx'), { isCustomElement: tag => /^ion-/.test(tag) }],
  ],
}
