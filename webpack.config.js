// 基于node的 遵循commonjs规范的
let path = require('path'); // node的模块
module.exports = {
    entry: './src/main.js', // 入口
    output: { // 出口
        filename: 'toast.js',
        path: path.resolve(__dirname, './dist'), // 这个路径必须是绝对路径
    },
    devServer: { // 开发服务器
        contentBase: './',
        host:'localhost',
        port: 9193,
        compress: true, // 服务器压缩
        // open: true, // 自动打开浏览器
        // hot: true, // 热更新
    },
    module: { // 模块配置
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 从右往左写，webpack特性
                include: path.join(__dirname, './src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'url-loader',
                include: path.join(__dirname, './src'),
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [ // 插件的配置

    ],
    mode: 'development', // 可以更改模式
    resolve: { // 配置解析

    },
};
