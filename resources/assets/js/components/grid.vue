<template>
    <div class="row">
        <grid-el
            v-for="(post, key) in posts"
            :key="key"
            :post="post"
            :counter="key"
            />
            <!-- v-for-callback="{key: key, array: posts, callback: loadComplete}" /> -->
    </div>
</template>
<script>
import GridEl from '../components/GridEl.vue'
import axios from 'axios'

export default {
    name: "grid",
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
    components: {
        GridEl
    }
}
</script>
<style lang="scss" scoped>
</style>
