/**
 * Created by zhongxinzhi on 17/3/11.
 */
//引入全局css
import 'bootstrapCss'
import 'minireset.css'
import 'animate.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/css/css.less'

//引入全局js
import 'bootstrap'
//引入入口tpl模板
import template from './app.tpl'

//引入vue相关组件
import VueRouter from 'vue-router'

//引入组件
import pageNav from "./components/pageNav/pageNav.vue"
import navBar from "./components/navBar/navBar.vue"

// 引入组件
import routes from './common/routes';
import store from './common/vuex/store'
import myDirective from './common/plugins/myDirective'
Vue.use(myDirective);
Vue.use(VueRouter);

const router = new VueRouter({

    routes

});

const app = new Vue({
    router,
    store,
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