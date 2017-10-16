<template>
  <main-layout>
    <div class="w-100 hero_img" ref="hero_img">
      <img :src="article.featured_img" class="w-100" ref="featured_img"/>
    </div>
    <article class="container pt-5" ref="container">
      <h1 ref="title">{{article.title}}</h1>
      <hr class="pb-3" ref="divider">
      <p v-html="article.html" ref="html"></p>
    </article>
  </main-layout>
</template>
<script>
import MainLayout from '../../layouts/MainLayout.vue'
import axios from 'axios'
import _ from 'lodash'

export default {
  props: [''],
  data () {
      return {
        article: [],
        window: {},
      }
  },
  mounted () {
    var vue = this;
    var slug = this.$route.params.slug;
    this.getPost(slug);
    window.addEventListener('resize', _.debounce(() => {
      this.resizeImg();
      this.resizeFeatured();
    }, 250));
  },
  methods: {
    getPost(slug)
    {
        axios.get('/api/search-post/'+slug)
        .then(response => {
            this.article = response.data.data;
            var regex = /<img(.*?)>/g;
            this.article.html = this.article.html.replace(regex, '<img $1 class="mx-auto d-block pt-5">');
            _.delay(() => {
              this.resizeImg();
              this.resizeFeatured();
            }, 50);
        });
    },
    resizeImg()
    {
      var imgs = this.$refs['html'].querySelectorAll('img');
      var nav = document.querySelector('nav').offsetHeight;
      var h_max =  window.innerHeight - (nav * 2);
      var w_max = window.innerWidth - nav;

      var style = window.getComputedStyle(this.$refs['container'], null);
      var test = style.getPropertyValue('width');
      var title_w = this.$refs['title'].getBoundingClientRect().width;

      if (w_max > title_w)
      {
          w_max = title_w;
      }

      _.each(imgs, (img) => {
          var h = img.offsetHeight;
          var w = img.offsetWidth;
          var k = h / w;
          if ((h_max / k) < w_max) {
              img.style.height = h_max + 'px';
              img.style.width = (h_max / k) + 'px';
          } else {
              img.style.width = w_max + 'px';
              img.style.height = (w_max * k) + 'px';
          }
      });

    },
    resizeFeatured()
    {
      var el_divider = '',
          divider = '';
      if (document.all) { // IE
        el_divider = this.$refs['divider'].offsetHeight;
        divider = parseInt(this.$refs['divider'].currentStyle.marginTop, 10) + parseInt(this.$refs['divider'].currentStyle.marginBottom, 10) + el_divider;
      } else {
        divider = parseInt(document.defaultView.getComputedStyle(this.$refs['divider'], '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(this.$refs['divider'], '').getPropertyValue('margin-bottom'));
      }
      console.log('immagine');
      console.log(this.$refs['featured_img'].offsetHeight);
      var featured_img = this.$refs['featured_img'].offsetHeight;
      var title_height = this.$refs['title'].offsetHeight + divider;
      var nav = document.querySelector('nav').offsetHeight;
      var h_max =  window.innerHeight - (nav * 2) - title_height;

      if (featured_img <= h_max)
      {
        h_max = featured_img - (nav * 2) - title_height;
        this.$refs['hero_img'].style.height = h_max+'px';
      } else {
        this.$refs['hero_img'].style.height = h_max+'px';
      }
      console.log(h_max);
    }
  },
  components: {
    MainLayout,
  }
}
</script>
<style scoped>
  .hero_img {
    overflow: hidden;
    min-height: 100px;
  }
</style>
