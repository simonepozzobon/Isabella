<template>
  <main class="bg-default">
    <nav class="navbar navbar-light bg-light sticky-top">
      <div class="d-flex justify-content-end ml-auto">
        <!-- <a class="navbar-brand justify-content-end" href="/">
          <img src="/themes/default/img/logo.svg" width="40" height="40">
        </a> -->
        <router-link class="nav-link active text-default" :to="'/works'"><h5>Works</h5></router-link>
        <router-link class="nav-link text-default" :to="'/about'"><h5>About</h5></router-link>
        <router-link class="nav-link text-default" :to="'/contacts'"><h5>Contacts</h5></router-link>
      </div>
    </nav>
      <slot></slot>
    <footer-layout></footer-layout>
  </main>
</template>
<script>
import FooterLayout from './FooterLayout.vue'


export default {
  mounted() {
  },
  methods: {
    changeColor() {
        var vue = this;
    }
  },
  components: {
    FooterLayout
  }
}
</script>
