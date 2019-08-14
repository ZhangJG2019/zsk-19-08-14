// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    // 添加
    jquery: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions(箭头函数用小括号括起来)
    // 'arrow-parens': 0,
    // allow async-await
    "space-before-function-paren": 0, //忽略函数名称和小括号之间空格
    'generator-star-spacing': 0, //生成器函数*的前后空格
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //禁止使用debugger
    "no-trailing-spaces": 1 //一行结束后面不要有空格
    // "semi": [2, "always"]
  }
}
