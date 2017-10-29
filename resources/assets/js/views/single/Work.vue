<template>
  <main-layout>
    <div ref="hero-img" id="hero-img" class="w-100" :style="'background: url('+article.featured_img+');'">

    </div>
    <!-- <div class="w-100 hero_img" ref="hero_img">
      <img :src="" class="w-100" ref="featured_img"/>
    </div> -->
    <article class="container pt-5" ref="container">
      <h1 id="title" ref="title">{{article.title}}</h1>
      <hr class="pb-3" ref="divider">
      <p v-html="article.html" ref="html"></p>
    </article>
  </main-layout>
</template>
<script>
import MainLayout from '../../layouts/MainLayout.vue'
import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery';

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
    this._height = window.innerHeight;
    this.getPost(slug);
    window.addEventListener('resize', _.debounce(() => {
      // this.resizeImg();
      this.resizeFeatured();
    }, 250));
    this.resizeFeatured();
  },
  methods: {
    getPost(slug)
    {
        axios.get('/api/search-post/'+slug)
        .then(response => {
            this.article = response.data.data;
            // var regex = /<img(.*?)>/g;
            // this.article.html = this.article.html.replace(regex, '<img $1 class="mx-auto d-block pt-5">');
            _.delay(() => {
              // this.resizeImg();
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
      console.log('resized');
      document.getElementById('hero-img').style.height = ( window.innerHeight - $('#title').height() - $('nav').height() - $('hr').height() - 48 - 16 - 8 - 33 )+'px';
    }
  },
  components: {
    MainLayout,
  }
}
</script>
<style scoped>

  #hero-img {
    min-height: 140px;
    background-size: cover !important;
    background-position: center center !important;
    box-shadow: inset 0 0 2rem rgba(0,0,0,.15);
  }

  .hero_img {
    overflow: hidden;
    min-height: 100px;
  }
</style>
