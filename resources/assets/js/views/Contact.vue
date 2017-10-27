<template>
  <main-layout>
    <div class="container">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col text-center p-5">
          <p>info (at) isabellafornasiero.com</p>
        </div>
      </div>
    </div>
  </main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue';

export default {
  name: "",
  data: () => ({

  }),
  components: {
    MainLayout
  }
}
</script>
<style lang="scss" scoped>

  .container {
    height: calc(100vh - 92px)
  }

</style>
