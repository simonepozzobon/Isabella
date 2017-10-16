<template>
  <main-layout>
    <div class="container pt-5">
      <div class="row">
          <grid-el></grid-el>
          <grid-el></grid-el>
          <grid-el></grid-el>
          <grid-el></grid-el>
      </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue';
import GridEl from '../components/GridEl.vue';

import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'

export default {
  props: [''],
  data () {
      return {
        var: ''
      }
  },
  mounted () {
    
  },
  methods: {
  },
  components: {
    MainLayout,
    GridEl
  }
}
</script>
