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
    },
    // 配置加载器 
    module: { // loader 加载器 配置在这儿
        rules: [ // loader的规则
            {
                // 匹配所有的css文件
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // 匹配所有的less文件
                test: /\.less$/,
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                // 图片文件的配置(仅适用于webpack5版本)
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset',
                generator: {
                    filename: 'img/ font-[name].[hash:6][ext]'
                },
                parser: { // 解析器 规则
                    dataUrlCondition: {
                        maxSize: 2 * 1024,
                    },
                }
            },
            {
                // 字体图标
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                },
                parser: { // 解析器 规则
                    dataUrlCondition: {
                        maxSize: 8 * 1024,
                    },
                }
            },
            
        ]
    }

}

