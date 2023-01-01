const path = require("path");

//引入ESLint插件
const ESLintPlugin = require('eslint-webpack-plugin');
//html自动引入打包后的js插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//css单独打包成文件的插件，不使用该插件默认是混合在js文件中的
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//css压缩插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//css兼容性处理
const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                "postcss-preset-env",//能解决大部分样式兼容性问题
            ]
        }

    },
};

//用来获取处理样式的loader
function getStyleLoader(pre) {
    return [ // 执行顺序，从后到前，先执行css-loader
        MiniCssExtractPlugin.loader, //提取css成单独文件
        "css-loader",// 将css资源编译成commonjs的模块到js中
        postcssLoader,
        pre,
    ].filter(Boolean);//过滤undefined
}

module.exports = {
    //入口
    entry: './src/main.js',

    //输出
    output: {
        //文件的输出路径，绝对路径 __dirname当前文件的文件夹目录
        path: path.resolve(__dirname, "../dist"),

        //入口文件打包输出文件名
        filename: "static/js/main.js",

        //清空上次打包的内容
        clean: true,
    },
    //loader
    module: {
        rules: [
            {
                oneOf: [
                    //loader的配置
                    {
                        test: /\.css$/, // 只检测.css结尾的文件
                        use: getStyleLoader(),
                    },
                    {
                        test: /\.less$/, // 只检测.css结尾的文件
                        use: getStyleLoader("less-loader")
                    },
                    {
                        test: /\.s[ac]ss$/, // 只检测.css结尾的文件
                        use: getStyleLoader("sass-loader")
                    },
                    {
                        test: /\.styl$/, // 只检测.css结尾的文件
                        use: getStyleLoader("stylus-loader")
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
                        // exclude: /node_modules/,//排除node_modules下的文件，其他都处理
                        include: path.resolve(__dirname, "../src"), //只包含src目录下的文件，和exclude只能二选一
                        use: {
                            loader: 'babel-loader',
                            // options:{
                            //     presets:['@babel/preset-env']
                            // }
                        }
                    },
                ]
            },

        ],
    },

    //plugin
    plugins: [
        new ESLintPlugin({
            //检测哪些文件
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
        }),
        new HtmlWebpackPlugin({
            //以index.html作为模板生成新的html文件,dom结构一致，自动引入打包的资源
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/main.css"
        }),
        new CssMinimizerPlugin(),

    ],
    //mode
    mode: "production",
    devtool: "source-map"
}