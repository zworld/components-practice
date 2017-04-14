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
            this.mySwipe = Swipe(document.getElementById('slider'));
        },
        computed: {

        }


    }
</script>

<style>

</style>