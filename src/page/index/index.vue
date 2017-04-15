<script>
   import tpl from './index.tpl';
   import Swipe from 'swipejs'
    export default {

        template: tpl,

        components: {

        },

        data () {
            return {
                msg: 'tessst'
            }
        },

        methods: {

        },

        created () {
            console.log(Swipe)
        },

        mounted(){
            window.mySwipe = new Swipe(document.getElementById('slider'), {
                startSlide: 2,
                speed: 400,
                auto: 3000,
                continuous: true,
                disableScroll: false,
                stopPropagation: false,
                callback: function(index, elem) {},
                transitionEnd: function(index, elem) {}
            });
        },
        computed: {

        }


    }
</script>

<style>

</style>