<template>
  <main-layout>
    <div class="container pt-5">
      <div class="row">
          <grid-el v-for="(post, index) in posts" :key="index" :post="post">
          </grid-el>
      </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue';
import GridEl from '../components/GridEl.vue';
import axios from 'axios'
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'

export default {
  props: [''],
  data () {
      return {
        posts: []
      }
  },
  mounted () {
    this.getPosts();
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
  },
  components: {
    MainLayout,
    GridEl
  }
}
</script>
