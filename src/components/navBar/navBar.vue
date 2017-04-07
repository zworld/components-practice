<template>
  <div class="nav">
      <div class="logo">
          <img src="../../assets/images/test.png">
      </div>
      <div class="search" @click.stop>
          <input type="text" @focus="show.searchList=true">
          <i class="fa fa-search" aria-hidden="true"></i>
          <transition name="list-toggle">
              <div class="list"  v-show="show.searchList">
                  <ul style="text-align: center">
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                      <li>test</li>
                  </ul>
              </div>
         </transition>
      </div>
      <div class="nav-content">
          <ul>
              <li v-for="navItem in navBar">
                  <router-link :to="{ name: navItem.name}" :class="{ checked: navChecked[navItem.name] }" v-if="navItem.isRouterLink">{{ navItem.title}}</router-link>
                  <a :href="navItem.link" v-else>{{ navItem.name}}</a>
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
            ul{
                font-size: 0;
                height: 100%;
                li{
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
                height: 30px;
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
            .list{
                ul{
                    position: relative;
                    top: -5px;
                    &:before{
                        content: '';
                        width: 0;
                        height: 0;
                        border-width: 0 10px 10px 10px;
                        border-style: solid;
                        border-color: transparent transparent #191919 transparent;
                        position: absolute;
                        top: -9px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
                li{
                    background: #191919;
                    height: 30px;
                    line-height: 30px;
                    border-top: 1px solid #202020;
                    border-bottom: 1px solid #0c0c0c;
                }

            }
        }
    }
    .list-toggle-enter-active,.list-toggle-leave-active {
        transition: all .3s ease;
    }
    .list-toggle-enter, .list-toggle-leave-active {
        transform: translateY(-100%);
        opacity: 0;
        height: 0;
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
                   }
               ],
                show:{
                    searchList: false
                }
            }
        },
        methods: {

            setFalse: function (obj) {

                for(let key in obj){
                    if(obj.key instanceof Object){
                        arguments.callee(obj[key])
                    }else{
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
