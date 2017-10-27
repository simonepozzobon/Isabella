<template>
  <main-layout>
    <div class="container pt-5">
      <grid :items="posts"></grid>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'
import Grid from '../components/grid.vue'
import axios from 'axios'
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import ScrollReveal from 'scrollreveal'

export default {
  props: [''],
  data () {
      return {
        posts: [],
      }
  },
  mounted () {
    this.getPosts();
    window.sr = ScrollReveal();
    _.delay(function(){
        sr.reveal('.box', {
            distance: '30vh',
            scale: 0.9,
            duration: 450,
            delay: 60,
            viewFactor: 0.5,
            easing: 'ease-in-out',
            viewOffset: {top: 50}
        }, 150);
    }, 250);
  },
  methods: {
    getPosts()
    {
        var vue = this;
        axios.get('/api/search-posts')
        .then(response => {
            vue.posts = response.data[1];
        });
    },

    ready()
    {

    },

    hello: function(el, done)
    {
      alert(el);
    }
  },
  components: {
    MainLayout,
    Grid
  },
}
</script>
<style>
.sr .box { visibility: hidden; }
</style>
