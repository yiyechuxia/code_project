module.exports = {
  // 一行最多 300 字符
  printWidth: 300,
  // 缩进
  tabWidth: 2,
  // 末尾分号
  semi: false,
  // 单引号
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  jsxBracketSameLine: true,
  extends: [
    // 继承 vue 的标准特性
    'plugin:vue/essential',
    'eslint:recommended',
    // 避免与 prettier 冲突
    'plugin:prettier/recommended'
  ]
}
