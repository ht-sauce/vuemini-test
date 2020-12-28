const production = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    GlConfig: true, // 全局变量
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': production ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': production ? 'warn' : 'off',
    'vue/no-unused-vars': production ? 'warn' : 'off',
    'no-undef': 'off',
  },
}
