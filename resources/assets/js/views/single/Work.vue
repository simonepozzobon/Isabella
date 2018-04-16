<template>
    <div class="main-container">
      <div ref="hero-img" id="hero-img" class="w-100" :style="'background-image: url('+article.featured_img+');'">
      </div>
      <article class="container pt-5" ref="container">
          <h1 id="title" ref="title" class="text-default">{{ article.title }}</h1>
          <hr class="pb-3" ref="divider">
          <p v-html="article.html" ref="html" class="text-default"></p>
      </article>
    </div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery';

export default {
    data: function() {
        return {
            article: {},
            loaded: false,
        }
    },
    methods: {
        resizeFeatured() {
            this.$refs['hero-img'].style.height = (window.innerHeight - this.$refs['title'].offsetHeight - this.$refs['divider'].offsetHeight - 48 - 33 - 66) + 'px';
        }
    },
    mounted() {
        axios.get('/api/search-post/' + this.$route.params.slug).then(response => {
            this.article = response.data.data
            this.loaded = true
            this.$nextTick(() => {
                this.resizeFeatured()
            })
        })
        window.addEventListener('resize', _.debounce(() => {
            this.resizeFeatured()
        }, 250))
    },
}
</script>
<style scoped>
#hero-img {
    min-height: 140px;
    background-size: cover !important;
    background-position: center center !important;
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, .05);
}

.hero_img {
    overflow: hidden;
    min-height: 100px;
}
</style>
