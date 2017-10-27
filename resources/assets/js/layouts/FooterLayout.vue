<template>
  <footer class="w-100 bg-light text-center" ref="footer">
      <span class="pt-2">
        <small>© Isabella Fornasiero 2018. All rights reserved.</small>
      </span>
  </footer>
</template>
<script>
import _ from 'lodash'

  export default {
      data () {
          return {
          }
      },
      mounted() {
        // window.addEventListener('resize', _.debounce(this.resizeFooter, 250));
        // _.delay(this.resizeFooter, 250);
      },
      methods: {
        // resizeFooter() {
        //     var window_height = window.innerHeight;
        //     var nav = document.querySelector('nav').offsetHeight;
        //     var content = document.querySelector('main').offsetHeight;
        //     var footer = this.$refs['footer'];
        //     var body = content - footer.offsetHeight - nav;
        //     if (body < window_height)
        //     {
        //         var position = window_height - body - footer.offsetHeight - nav;
        //         footer.style.position = 'relative';
        //         footer.style.top = position+'px';
        //     }
        // }
      }

  }
</script>
