<template>
  <main-layout>
    <div class="container">
      <h1>Hi!</h1>
      <p class="pt-3 pb-5">
        I’m an Art Director, based in Milan, who ranges from motion to graphic design.<br>
        If you think my work can benefit you, I'll be happy to talk to you.
      </p>
      <router-link :to="'/contacts'">Contact me</router-link>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
  data: () => ({

  }),
  components: {
    MainLayout
  }
}
</script>
<style lang="scss" scoped>
</style>
