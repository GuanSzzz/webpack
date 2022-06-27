// 1.引入路径
const path = require('path');
// 配置路径
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    }
}