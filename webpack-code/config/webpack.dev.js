const path = require("path");

//引入ESLint插件
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口,相对路径不变
    entry: './src/main.js',

    //输出
    output: {
        //文件的输出路径，绝对路径 __dirname当前文件的文件夹目录
        //开发模式没有输出，path不需要
        path: undefined,

        //入口文件打包输出文件名
        filename: "static/js/main.js",

        //清空上次打包的内容
        clean: true,
    },
    //loader
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/, // 只检测.css结尾的文件
                use: [ // 执行顺序，从后到前，先执行css-loader
                    "style-loader", //将js中的css通过style标签添加到html文件中生效
                    "css-loader",// 将css资源编译成commonjs的模块到js中
                ]
            },
            {
                test: /\.less$/, // 只检测.css结尾的文件
                use: [ // 执行顺序，从后到前，先执行css-loader
                    "style-loader", //将js中的css通过style标签添加到html文件中生效
                    "css-loader",// 将css资源编译成commonjs的模块到js中
                    "less-loader",// 将less编译成css文件
                ]
            },
            {
                test: /\.s[ac]ss$/, // 只检测.css结尾的文件
                use: [ // 执行顺序，从后到前，先执行css-loader
                    "style-loader", //将js中的css通过style标签添加到html文件中生效
                    "css-loader",// 将css资源编译成commonjs的模块到js中
                    "sass-loader",// 将sass编译成css文件
                ]
            },
            {
                test: /\.styl$/, // 只检测.css结尾的文件
                use: [ // 执行顺序，从后到前，先执行css-loader
                    "style-loader", //将js中的css通过style标签添加到html文件中生效
                    "css-loader",// 将css资源编译成commonjs的模块到js中
                    "stylus-loader",// 将stylus编译成css文件
                ]
            },
            {
                //类型设置为asset，当作file-loader处理，webpack5内置
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        //大小小于40kb时转化为base64
                        //优点后无需重复下载减少请求数量
                        //缺点是会变大
                        maxSize: 40 * 1024,
                    },
                },
                generator: {
                    //输出的文件的名称
                    filename: "static/images/[hash:10][ext][query]",
                }
            },
            {
                //打包字体文件
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",//不会转base64

                generator: {
                    //输出的文件的名称
                    filename: "static/media/[hash:10][ext][query]",
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,//排除
                use: {
                    loader: 'babel-loader',
                    // options:{
                    //     presets:['@babel/preset-env']
                    // }
                }
            },
        ],
    },

    //plugin
    plugins: [
        new ESLintPlugin({
            //检测哪些文件，绝对路径修改
            context: path.resolve(__dirname, "../src"),
        }),
        new HtmlWebpackPlugin({
            //以index.html作为模板生成新的html文件,dom结构一致，自动引入打包的资源
            template: path.resolve(__dirname, '../public/index.html')
        }),

    ],

    //开发服务器，不会输出资源，在内存中编译打包
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true, //是否自动打开浏览器
    },

    //mode
    mode: "development"
}