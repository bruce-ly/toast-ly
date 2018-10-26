const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    mode: process.env.NODE_ENV, // 可以更改模式
    entry: './src/test.js', // 入口
    output: { // 出口
        filename: 'test.js',
        path: resolve('test'), // 这个路径必须是绝对路径
    },
    devServer: { // 开发服务器
        contentBase: resolve('test'),
        host: 'localhost',
        port: 9193,
        // compress: true, // 服务器压缩
        // open: true, // 自动打开浏览器
        // hot: true, // 热更新
    },
    module: { // 模块配置
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: resolve('src'), // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'], // 从右往左写，webpack特性
                include: resolve('src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'url-loader',
                include: resolve('src'),
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [ // 插件的配置
        new webpack.BannerPlugin('https://github.com/bruce-ly/toast-ly \n' + Date().toString()),
    ],
    // resolve: { // 配置解析
    //     extensions: ['.js', '.css', '.json'], // 省略后缀
    //     alias: { // 别名
    //         '@': resolve('src'),
    //     },
    // },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.entry = './src/main.js'
    module.exports.output = {
        filename: 'toast.js',
        path: resolve('dist'),
        library: 'Toast', // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
        libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
        libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用,
        globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    }
}
