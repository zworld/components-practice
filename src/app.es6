/**
 * Created by zhongxinzhi on 17/3/11.
 */
//引入全局css
import 'bootstrapCss'
import 'minireset.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/css/common.less'

//引入入口tpl模板
import template from './app.tpl'

//引入vue相关组件
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import pageNav from "./components/pageNav/pageNav.vue"

// 引入组件
import routes from './common/routes';


Vue.use(VueRouter);

const router = new VueRouter({

    routes

});

const app = new Vue({
    router,
    components: {
        'com-pagenav': pageNav
    }
}).$mount('#app')