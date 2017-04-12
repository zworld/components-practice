<template>
    <div class="nav" @click="msgToParent()">
        <div class="logo">
          <img src="../../assets/images/test.png">
      </div>
        <div class="search" @click.stop>
          <input type="text" @focus="show.searchList=true">
          <i class="fa fa-search" aria-hidden="true"></i>
              <div class="list animated">
                  <ul>
                      <transition name="list-toggle" v-for="n in 5">
                         <li v-show="show.searchList" class="animated" :class="{['enter-delay-'+ n]: show.searchList,['leave-delay-'+ n]: !show.searchList}" >test</li>
                      </transition>
                  </ul>
              </div>
      </div>
        <div class="nav-content">
          <ul>
              <li v-for="navItem in navBar">
                  <router-link :to="{ name: navItem.name}" :class="{ checked: navChecked[navItem.name] }" v-if="navItem.isRouterLink">{{ navItem.title}}</router-link>
                  <template v-else>
                      <div style="position: relative" @click.stop>
                          <a href="javascript:void(0)" @click="show.navContent[navItem.name]=!show.navContent[navItem.name]">{{ navItem.title}}<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                          <div class="list animated" >
                              <ul>
                                  <transition name="list-toggle" v-for="n in 5">
                                    <li v-show="show.navContent[navItem.name]" class="animated" :class="{['enter-delay-'+ n]: show.navContent[navItem.name],['leave-delay-'+ n]: !show.navContent[navItem.name]}">test</li>
                                  </transition>
                              </ul>
                          </div>

                      </div>
                  </template>
              </li>
          </ul>
      </div>
        <div class="vuexShow" style="position: absolute;top:80px;color: red">
            vuex测试:{{ count }}--{{ evenOrOdd }}
        </div>
     </div>
</template>
<style lang="less">
@import './style.less';
</style>
<script>
    import { mapState,mapGetters } from 'vuex'
    export default {
        data() {
            return{
               navBar:[
                   {
                       name: 'index',
                       title: '首页',
                       link: './index',
                       isRouterLink: true,
                   },
                   {
                       name: 'index',
                       title: '首页',
                       link: './main',
                       isRouterLink: true,
                   },
                   {
                       name: 'expand',
                       title: '拓展',
                   }
               ],
                show:{
                    searchList: false,
                    navContent:{
                        expand: false
                    }
                },
                test: 'test'
            }
        },
        methods: {

            setFalse: function (obj) {

                for(let key in obj){
                    if(typeof obj[key] == 'object'){
                        this.setFalse(obj[key])
                    }else{
                        obj[key] = false
                    }

                }
            },

            msgToParent: function () {

                this.$emit('msg-from-nav','test')

            }
        },
        created() {
        },
        mounted() {
            var vm  = this,
                body = document.querySelector('body');

            body.addEventListener('click',function(){

                vm.$store.commit('increment',1)
                vm.setFalse(vm.show)

            })
        },
        computed: {
            navChecked: function(){
                if(!this.$route.name){
                    return {
                        'index': true
                    }
                }
                return  {
                    [this.$route.name]: true
                }
            },
//            count(){return this.$store.state.count}
            ...mapState({
                count: state=> state.count
            }),
            ...mapGetters([
                'evenOrOdd'
            ])
        }
    }
</script>
