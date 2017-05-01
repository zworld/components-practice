<script>
   import tpl from './index.tpl';
//   import Swipe from 'swipejs'
import 'fullpage.js'
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
        },

        mounted(){
            $(document).ready(function() {
                $('#fullpage').fullpage();
            });
        },
        computed: {

        }


    }
</script>

<style>

</style>