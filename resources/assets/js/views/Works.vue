<template>
    <div id="works-wrapper" class="container">
        <grid-el
            v-for="(post, key) in posts"
            :key="key"
            :post="post"
            :counter="key"
            />
    </div>
</template>
<script>
import GridEl from '../components/GridEl.vue'
import axios from 'axios'

export default {
    components: {
        GridEl
    },
    data: () => ({
        posts: []
    }),
    mounted() {
        var vue = this
        axios.get('/api/search-posts')
            .then(response => {
                vue.posts = response.data[1]
            })
    },
}
</script>
<style lang="scss" scoped>
#works-wrapper {
    margin-top: 72px;
    padding-top: 32px;
}
</style>
