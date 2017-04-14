/**
 * Created by zhongxinzhi on 2017/4/12.
 */
var  myDirective = {};
myDirective.install = function (Vue, options) {

    Vue.directive('tip', {
        bind: function () {
            "use strict";
        },
        inserted: function (el,binding,vnode,oldVnode) {
            $(el).tooltip({
                title: 'test'
            })
        },
        update: function () {},
        componentUpdated: function () {},
        unbind: function () {}
    })

}

//导出模块
// if (typeof exports == "object") {
//     module.exports = myDirective
// // 支持 AMD
// } else if (typeof define == "function" && define.amd) {
//     define([], function(){ return myDirective })
// // Vue 是全局变量时，自动调用 Vue.use()
// } else if (window.Vue) {
//     window.VueTouch = myDirective
//     Vue.use(myDirective)
// }
export default myDirective
