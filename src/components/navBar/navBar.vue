<template>
  <div class="nav">
      <div class="logo">
          <img src="../../assets/images/test.png">
      </div>
      <div class="search">
          <input type="text">
          <i class="fa fa-search" aria-hidden="true"></i>
          <div class="list"></div>
      </div>
      <div class="nav-content">
          <ul>
              <li v-for="navItem in navBar">
                  <router-link :to="{ name: navItem.linkName}" class="checked">{{ navItem.name }}</router-link>
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
                display: none;
            }
        }
    }

</style>
<script>
    export default {
        data() {
            return{
               navBar:[
                   {
                       name: '首页',
                       link: './index',
                       linkName: 'index'
                   }
               ]
            }
        },
        methods: {
        },
        created() {

        },
        mounted() {
        }

    }
</script>
