/**
 * Created by zhongxinzhi on 17/3/11.
 */
//引入全局css
import 'bootstrapCss'
import 'minireset.css'
import 'animate.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/css/css.less'

//引入入口tpl模板
import template from './app.tpl'

//引入vue相关组件
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import pageNav from "./components/pageNav/pageNav.vue"
import navBar from "./components/navBar/navBar.vue"

// 引入组件
import routes from './common/routes';


Vue.use(VueRouter);

const router = new VueRouter({

    routes

});

const app = new Vue({
    router,
    data: {
        navBar:[
            {
                name: '首页',
                link: location.href + '/index'
            }
        ]
    },
    methods: {
        Getmsg: function (msg) {
            console.log(msg)
        }
    },
    components: {
       //vue自动把组件大写转化成‘-’
        'com-pagenav': pageNav,//等价于‘comPagenav: pageNave’
        'com-navbar': navBar
    }
}).$mount('#app')