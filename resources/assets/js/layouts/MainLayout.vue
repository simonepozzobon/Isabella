<template>
  <main id="app">
    <nav class="navbar navbar-light bg-light sticky-top">
      <a class="navbar-brand" href="/">
        <img src="/themes/default/img/logo.svg" width="30" height="30">
      </a>
      <div class="d-flex justify-content-end">
        <a class="nav-link active" href="/works">Works</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contacts</a>
      </div>
    </nav>
    <slot></slot>
    <footer-layout></footer-layout>
  </main>
</template>
<script>
import FooterLayout from './FooterLayout.vue'

export default {
  components: {
    FooterLayout
  }
}
</script>
