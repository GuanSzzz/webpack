// 引入 banner
import './banner.js'
// 引入 Tab
import './tab.js'

// 引入jq
import $ from 'jquery'
$('#swiper').css('background-color', 'red')

// 引入css
import './style/index.css';

// 引入less
import './style/index.less';

// 引入图
import imgUrl from './assets/1.gif';
let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入字体图标文件
import './assets/fonts/iconfont.css'

// 降级
class App {
    static a = 123
}
console.log(App.a)