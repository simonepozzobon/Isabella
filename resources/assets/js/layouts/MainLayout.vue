<template>
  <main>
    <nav class="navbar navbar-light bg-light sticky-top">
      <div class="d-flex justify-content-end ml-auto">
        <a class="navbar-brand justify-content-end" href="/">
          <img src="/themes/default/img/logo.svg" width="40" height="40">
        </a>
        <router-link class="nav-link active" :to="'/works'">Works</router-link>
        <router-link class="nav-link" :to="'/about'">About</router-link>
        <router-link class="nav-link" :to="'/contacts'">Contacts</router-link>
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
