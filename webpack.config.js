// 1.引入路径
const path = require('path');

// 2.引入自动生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 3.引入自动删除
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    // 配置自动生成html
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    // 配置路径
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 配置服务器端口
    devServer: {
        port: 3000, // 端口号
        open: true
    }
}

