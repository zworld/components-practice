<template>
  <div class="nav">
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
                          <a href="javascript:void(0)">{{ navItem.title}}{{show.navContent[navItem.name]}}<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                              <div class="list animated" @click="show.navContent[navItem.name]=!show.navContent[navItem.name]">
                                  <ul>
                                      <transition name="list-toggle" v-for="n in 5">
                                        <li v-show="show.navContent[navItem.name]" class="animated" :class="{['enter-delay-'+ n]: show.searchList,['leave-delay-'+ n]: !show.searchList}">test</li>
                                      </transition>
                                  </ul>
                              </div>

                      </div>
                  </template>
              </li>
          </ul>
      </div>
  </div>
</template>
<style lang="less">
    @bg-color: #000;
    @font-color: #fff;
    .nav{
        width: 90%;
        margin: 0 auto;
        height: 100%;
        position: relative;
        line-height: 65px;
        color: #FFFFFF;
        div{
            height: 100%;
        }
        .logo{
            float: left;
        }
        .nav-content{
            float: right;
            .list{
                li{
                    display: block;
                    margin: 0;
                }
                :last-child{
                    margin: 0;
                }
            }
            &>ul{
                font-size: 0;
                height: 100%;
                &>li{
                    display: inline-block;
                    font-size: 15px;
                    margin-right: 30px;
                    height: 100%;
                    a{
                        padding: 0 15px;
                        color: #FFFFFF;
                        position: relative;
                        display: inline-block;
                        height: 100%;
                        &.checked{
                            &:before{
                                display: block;
                                content: '';
                                width: 0;
                                height: 0;
                                position: absolute;
                                border-style:solid;
                                border-width: 10px 10px 10px 10px;
                                border-color: transparent transparent #f9f9f9 transparent;
                                bottom: 0px;
                                left: 50%;
                                transform: translateX(-50%);
                            }
                        }
                        &:hover{
                            text-decoration: none;
                            color: darken(@font-color,20%);
                            background: lighten(@bg-color,20%);
                        }
                    }
                    &:last-child{
                        margin-right: 50px;
                    }
                };
            }
        }
        .search{
            float: right;
            position: relative;
            input{
                width: 150px;
                background: #000000;
                border-radius: 10px;
                outline: none;
                border: none;
                height: 32px;
                padding: 0 25px 0 15px;
            }
            i{
                position: absolute;
                position: absolute;
                right: 9px;
                top: 24px;
                &:hover{
                    cursor: pointer;
                    color: darken(@font-color,20%);
                }
            }
        }
        .list{
            ul{
                position: absolute;
                top: 60px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                width: 150px;
            }
            li{
                background: #191919;
                height: 32px;
                line-height: 32px;
                border-top: 1px solid #202020;
                border-bottom: 1px solid #0c0c0c;
            }

        }
    }
    .generate-enter-delay(5);
    .generate-enter-delay(@n,@i: 1) when(@i=<@n){
        .enter-delay-@{i} {
            animation-delay: (0.1s * @i);
        }
        .generate-enter-delay(@n,(@i + 1))
    }
    .generate-enter-delay(5);
    .generate-enter-delay(@n,@i: 1) when(@i=<@n){
        .enter-delay-@{i} {
            animation-delay: (0.1s * @i);
        }
        .leave-delay-@{i}{
            animation-delay: (0.1s * (@n - @i));
        }
        .generate-enter-delay(@n,(@i + 1))
    }

    .list-toggle-enter-active{
        animation-name: flipInY;
    }
    .list-toggle-leave-active{
        animation-name: flipOutY;
    }
</style>
<script>
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
                }
            }
        },
        methods: {

            setFalse: function (obj) {

                for(let key in obj){
                    if(typeof obj.key == Object){
                        debugger
                        arguments.callee(obj[key])
                    }else{
                        debugger
                        obj[key] = false
                    }

                }
            }
        },
        created() {

        },
        mounted() {
            var vm  = this,
                body = document.querySelector('body');

            body.addEventListener('click',function(){

                vm.setFalse(vm.show)

            })
        },
        computed: {
            'navChecked': function(){
                if(!this.$route.name){
                    return {
                        'index': true
                    }
                }
                return  {
                    [this.$route.name]: true
                }
            }
        }
    }
</script>
