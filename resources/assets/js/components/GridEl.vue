<template>
  <div class="col-md-4 col-lg-4 box mb-4" ref="col">
    <div class="row pb-4">
      <div @mouseover="mediaHover" @mouseleave="mediaLeave" class="col work">
        <div class="container-fluid img_grid" ref="img_grid" :style="'background: url('+img+') conver center;'">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link v-bind:to="'/work/'+link"><h4 class="title text-center">{{title}}</h4></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import MojsCurveEditor from 'mojs-curve-editor';
const Curve = mojs.easing.path('M0, 100 C25, .5 1, 0 100, 0');

export default {
  props: ['post'],
  data ()
  {
    return {
        link: '',
        title: '',
        img: '',
        opened: [],
        circles: [],
        crosses: [],
    }
  },
  mounted()
  {
      var vue = this;
      this.link = this.post.data.slug;
      this.title = this.post.data.title;
      this.img = this.post.data.featured_img;
      this.resizeCol();
      this.$emit('worksLoaded', true);
      window.addEventListener('resize', _.debounce(() => {
        this.resizeCol();
      }, 250));
  },
  methods: {
    resizeCol()
    {
      var col = this.$refs['col'].offsetWidth;
      this.$refs['img_grid'].style.height = (col - 30)+'px';
      this.$refs['img_grid'].style.background = 'url('+this.img+') center';
      this.$refs['img_grid'].style.backgroundSize = 'cover';
    },
    mediaHover(e)
    {
        var vue = this;
        var scaleContainer = new mojs.Html({
          el: e.target,
          scale: {1 : 1.025},
          easing: Curve,
          duration: 300
        }).play();

        var circle = new mojs.Shape({
          parent: e.target,
          className: 'open',
          shape: 'circle',
          fill: '#1e1f1c',
          top: {'100%' : '50%'},
          radius: {0 : 40},
          opacity: {0 : 1},
          easing: Curve,
          duration: 300
        }).play()

        var cross = new mojs.Shape({
          parent: e.target,
          className: 'open',
          shape: 'cross',
          strokeWidth: 4,
          stroke: '#fffdf4',
          radius: {0 : 10},
          angle: {0 : 180},
          opacity: {0 : 1},
          easing: Curve,
          duration: 600,
        }).play()

        $('.open').on('click', (e) => {

          var _x = e.clientX;
          var _y = e.clientY;
          var _width = window.innerWidth;
          var _height = window.innerHeight;

          var size = _width;
          if (_height > size) {
            size = _height;
          }
          var overlayBlack = new mojs.Shape({
            parent: '#app',
            top: 0,
            left: 0,
            x: {[_x] : _width / 2},
            y: {[_y] : _height / 2},
            shape: 'circle',
            fill: '#1e1f1c',
            radius: {0 : size},
            onPlaybackStart: function() {
              this.el.style.zIndex = '999';
            }
          }).play();

          var overlayWhite = new mojs.Shape({
            parent: overlayBlack.el,
            shape: 'circle',
            opacity: {0 : 1},
            radius: {0 : size},
            fill: '#fffdf4',
            delay: 500,
            onComplete: function() {
              // $('main')
              vue.$router.push('/work/'+vue.link);
              vue.destroyAnim(overlayBlack.el);
              vue.destroyAnim(this.el);
            }
          }).play();
        });

        this.opened.push(e.target);
        this.circles.push(circle);
        this.crosses.push(cross);


    },
    mediaLeave()
    {
      var vue = this;

      _.each(this.crosses, function(cross) {
        cross.tune({
          radius: {10 : 0},
          angle: {180 : 360},
          opacity: {1 : 0},
          easing: Curve,
          duration: 600,
          onComplete: function() {
            vue.destroyAnim(this.el);
          }
        }).play();
      });

      _.each(this.circles, function(circle){
        circle.tune({
          top: {'50%' : '100%'},
          radius: {40 : 0},
          opacity: {1 : 0},
          easing: Curve,
          duration: 300,
          onComplete: function() {
            vue.destroyAnim(this.el);
          }
        }).play()
      });

      _.each(this.opened, function(el) {
        var close = new mojs.Html({
          el: el,
          scale: {1.025 : 1},
          easing: Curve,
          duration: 300
        }).play()
      });

      this.opened = [];
      this.circles = [];
      this.crosses = [];
    },

    destroyAnim(node)
    {
      node.parentNode.removeChild(node);
    },
  }

}
</script>
<style scoped>
  .img_grid {
    overflow: hidden;
    border-radius: .15rem
  }
</style>
