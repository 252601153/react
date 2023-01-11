const path = require("path");
//nodejs核心模块，直接调用
const os = require("os");
//cpu核数
const threads = os.cpus().length;
console.log('cpu threads num is', threads)

//js压缩插件，只要开启生产模式默认启用了
const TerserWebpackPlugin = require("terser-webpack-plugin");


//引入ESLint插件
const ESLintPlugin = require('eslint-webpack-plugin');
//html自动引入打包后的js插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//css单独打包成文件的插件，不使用该插件默认是混合在js文件中的
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//css压缩插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//图片压缩插件
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


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
                            // 将图片文件输出到 static/imgs 目录中
                            // 将图片文件命名 [hash:8][ext][query]
                            // [hash:8]: hash值取8位
                            // [ext]: 使用之前的文件扩展名
                            // [query]: 添加之前的query参数
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
                        use: [
                            {
                                loader: "thread-loader",//开启多进程
                                options: {
                                    works: threads, //进程数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    // presets:['@babel/preset-env']
                                    cacheDirectory: true, //开启babel缓存
                                    cacheCompression: false, //关闭缓存文件压缩
                                    plugins:["@babel/plugin-transform-runtime"],//减少代码体积
                                }
                            }
                        ]
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
            cache: true, //开启缓存
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache"),//eslint缓存地址
            threads, //eslint开启多进程
        }),
        new HtmlWebpackPlugin({
            //以index.html作为模板生成新的html文件,dom结构一致，自动引入打包的资源
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/main.css"
        }),

        //图片压缩，无损压缩
        // new ImageMinimizerPlugin({
        //     minimizer: {
        //       implementation: ImageMinimizerPlugin.imageminGenerate,
        //       options: {
        //         plugins: [
        //           ["gifsicle", { interlaced: true }],
        //           ["jpegtran", { progressive: true }],
        //           ["optipng", { optimizationLevel: 5 }],
        //           [
        //             "svgo",
        //             {
        //               plugins: [
        //                 "preset-default",
        //                 "prefixIds",
        //                 {
        //                   name: "sortAttrs",
        //                   params: {
        //                     xmlnsOrder: "alphabetical",
        //                   },
        //                 },
        //               ],
        //             },
        //           ],
        //         ],
        //       },
        //     },
        //   }),

    ],

    //webpack5压缩建议放optimization
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), //css压缩插件
            new TerserWebpackPlugin({
                parallel: threads //js压缩插件开启多进程，手动写这个插件的原因是为了配置多进程
            }),

        ]
    },
    //mode
    mode: "production",
    devtool: "source-map"
}