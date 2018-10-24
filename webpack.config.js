// 基于node的 遵循commonjs规范的
const webpack = require('webpack');
const path = require('path'); // node的模块
module.exports = {
    // mode: 'development', // 可以更改模式
    entry: './src/main.js', // 入口
    output: { // 出口
        filename: 'toast.js',
        path: path.resolve(__dirname, './dist'), // 这个路径必须是绝对路径
    },
    devServer: { // 开发服务器
        contentBase: path.resolve(__dirname, './'),
        host: 'localhost',
        port: 9193,
        compress: true, // 服务器压缩
        // open: true, // 自动打开浏览器
        // hot: true, // 热更新
    },
    module: { // 模块配置
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.join(__dirname, './src'), // 只转化src目录下的js
                exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'], // 从右往左写，webpack特性
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
        new webpack.BannerPlugin('版权所有，翻版必究 \n https://github.com/bruce-ly/toast-ly'),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: { // 配置解析
        extensions: ['.js', '.css', '.json'], // 省略后缀
        alias: { // 别名
            // '@': path.resolve('src'),
        },
    },
};
