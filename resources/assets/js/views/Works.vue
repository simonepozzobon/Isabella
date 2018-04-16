<template>
    <div class="container pt-5">
        <grid></grid>
    </div>
</template>
<script>
import Grid from '../components/grid.vue'

export default {
    components: {
        Grid
    },
}
</script>
<style>
.sr .box {
    visibility: hidden;
}
</style>
