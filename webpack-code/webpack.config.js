const path = require("path");

module.exports = {
    //入口
    entry: './src/main.js',

    //输出
    output: {
        //文件的输出路径，绝对路径 __dirname当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"),

        //入口文件打包输出文件名
        filename: "static/js/main.js",
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
        ],
    },

    //plugin
    plugins: [

    ],

    //mode
    mode: "development"
}