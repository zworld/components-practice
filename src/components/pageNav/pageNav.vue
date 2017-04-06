<template>
    <div>
       <ul class="clearfix">
           <li class="pre"><a href="javascript:void(0)" @click="toPre()"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
           <li v-for="item in params.first">
               <a href="javascript:void(0)" :class= "{ active: item==params.current}" @click="jump(item)">{{ item }}</a>
           </li>

           <li v-if="params.preEllipsis">...</li>

           <li v-for="item in params.center">
               <a href="javascript:void(0)" :class= "{ active: item==params.current}" @click="jump(item)">{{ item }}</a>
           </li>

           <li v-if="params.afterEllipsis">...</li>

           <li v-for="item in params.last">
               <a href="javascript:void(0)" :class= "{ active: item==params.current}" @click="jump(item)">{{ item }}</a>
           </li>
           <li class="next" @click="toNext()"><a href="javascript:void(0)"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
       </ul>
    </div>
</template>
<style lang="less" scoped>
    body{
        background-color:#ff0000;
    }
    ul{
        list-style: none;
        li{
            float: left;
            a{
                padding: 0 5px;
                &.active{
                    background: blue;
                }
            }
        }
    }

</style>
<script>
    export default {
        data() {
            return{
                msg:'hello vue',
                params: {
                    count: 2,
                    preEllipsis: true,
                    afterEllipsis: true,
                    first: [],
                    center: [],
                    last: [],
                    limit: 10,
                    current: 96
                }
            }
        },
        methods: {

            initData: function(){

                let vm = this;
                let data = vm.params;
                let allPage =  Array.from(new Array(data.count).keys()).map((index)=>index+1);

                if(data.count<=7){

                    data.first = allPage;
                    data.preEllipsis = false;
                    data.center = [];
                    data.afterEllipsis = false;
                    data.last = [];

                }else{

                    if(data.current<=4){

                        data.current==4 ? data.first = allPage.slice(0,5) : data.first = allPage.slice(0,4);
                        data.preEllipsis = false;
                        data.center = [];
                        data.afterEllipsis = true;
                        data.last = allPage.slice(data.count-2)

                    }else{

                        data.first = allPage.slice(0,2);
                        data.preEllipsis = true;

                        if(data.current>=data.count-3){
                            data.center = [];
                            data.afterEllipsis = false;
                            data.current==data.count-3 ? data.last = allPage.slice(-5) : data.last = allPage.slice(-4);
                        }else{
                            data.center = [data.current-1,data.current,data.current+1];
                            data.afterEllipsis = true;
                            data.last = allPage.slice(-2)
                        }

                    }

                }
            },

            toPre: function () {

                var vm = this;
                if( vm.params.current==1 ) return
                vm.params.current--;
                vm.initData()

            },

            jump(item){

                var vm = this;
                if(item == vm.params.current) return
                vm.params.current = item;
                vm.initData()

            },

            toNext: function () {

                var vm = this;
                if( vm.params.current==vm.params.count ) return
                vm.params.current++;
                vm.initData()

            }

        },
        created() {
            this.initData()
        },
        mounted() {
//            this.initData()
        }

    }
</script>
