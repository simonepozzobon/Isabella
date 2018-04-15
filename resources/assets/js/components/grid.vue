<template>
    <div class="row">
        <grid-el v-for="(post, key) in posts" :key="key" :post="post" v-for-callback="{key: key, array: posts, callback: loadComplete}">
        </grid-el>
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
    methods: {
        loadComplete() {
            this.$emit('loadComplete')
        },
    },
    directives: {
        forCallback(el, binding) {
            let element = binding.value
            var key = element.key
            var len = 0

            if (Array.isArray(element.array)) {
                len = element.array.length
            } else if (typeof element.array === 'object') {
                var keys = Object.keys(element.array)
                key = keys.indexOf(key)
                len = keys.length
            }

            if (key == len - 1) {
                if (typeof element.callback === 'function') {
                    element.callback()
                }
            }
        }
    },
    components: {
        GridEl
    }
}
</script>
<style lang="scss" scoped>
</style>
