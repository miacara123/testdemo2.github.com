const path = require("path");
// const htmlPlugin = require("html-webpack-plugin");
// const uglify = require("uglifyjs-webpack-plugin");
module.exports = {
    mode: 'development',
    // 入口文件的配置
    entry: {
        main: './src/main.js'
    },
    // 出口文件的配置
    output: {
        // 打包的路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名称
        // filename: 'bundle.js'
        filename: '[name].js'  // 这里[name]是告诉我们入口进去的文件是什么名字,打包出来也是什么名字
    },
    // 模块: 例如解读CSS,图片如何转换,压缩
    module: {
        rules:[
            // css loader
            {
                test:/\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
        ]
    },
    // 插件,用于生产模板和各项功能
    plugins: [],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase:path.resolve(__dirname, '../dist'),
        // 服务器的IP地址,可以使用IP也可以使用localhost
        host:'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port:8888
    }
}