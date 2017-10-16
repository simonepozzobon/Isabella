<template>
  <main-layout>
    <article class="container pt-5" ref="container">
      <h1 ref="title">{{article.title}}</h1>
      <hr>
      <a href="#" @click="resizeImg">resize</a>
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
    this.window = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    window.addEventListener('resize', _.debounce(this.resizeImg, 250));
  },
  methods: {
    getPost(slug)
    {
        axios.get('/api/search-post/'+slug)
        .then(response => {
            this.article = response.data.data;
            var regex = /<img(.*?)>/g;
            this.article.html = this.article.html.replace(regex, '<img $1 class="mx-auto d-block pt-5">');
            _.delay(this.resizeImg, 50);
        });
    },
    resizeImg()
    {
      var imgs = this.$refs['html'].querySelectorAll('img');
      var nav = document.querySelector('nav').offsetHeight;
      var h_max =  this.window.height - (nav * 2);
      var w_max = this.window.width - nav;

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
  },
  watch: {
    // window: function()
    // {
    //     this.resizeImg();
    // },
  },
  components: {
    MainLayout,
  }
}
</script>
