module.exports = {
    //继承其他规则
    extends: ["eslint:recommended"],
    env: {
        node: true, // 启用node中全局变量
        browser: true, // 启用浏览器中全局变量
    },
    //解析选项
    parserOptions: {
        ecmaVersion: 6,//ES语法版本
        sourceType: "module",//ES模块化
        ecmaFeatures: { //ES其他特性
            jsx: true
        }
    },

    //rules具体检查规则
    rules: {
        "no-var": 1, // 不能使用 var 定义变量
        eqeqeq: ["warn", "smart"]
    },


}