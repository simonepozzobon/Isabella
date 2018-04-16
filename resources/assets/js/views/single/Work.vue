<template>
    <div class="main-container">
        <div ref="heroImg" id="hero-img" class="w-100" :style="'background-image: url('+article.featured_img+');'">
        </div>
        <article ref="article">
            <h1 id="title" ref="title" class="text-default">{{ article.title }}</h1>
            <hr class="pb-3" ref="divider">
            <p v-html="article.html" ref="html" class="text-default"></p>
        </article>
    </div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'

export default {
    data: function() {
        return {
            article: {},
        }
    },
    methods: {
        resizeFeatured: function() {
            if (this.$refs.heroImg && this.$refs.article) {
                var height = window.innerHeight
                var gold = 1.618
                var imgHeight = (height / gold) - 64
                this.$refs.heroImg.style.height = `${imgHeight}px`
                this.$refs.article.style.marginTop = `${imgHeight}px`
            }
        }
    },
    mounted() {
        axios.get('/api/search-post/' + this.$route.params.slug).then(response => {
            this.article = response.data.data
            this.loaded = true
            this.$nextTick(() => {
                this.resizeFeatured()
            })
        })
        window.addEventListener('resize', _.debounce(() => {
            this.resizeFeatured()
        }, 250))
    },
}
</script>
<style lang="scss" scoped>
.main-container {
    width: 100%;

    #hero-img {
        min-height: 140px;
        background-size: cover !important;
        background-position: center center !important;
        box-shadow: inset 0 0 5rem rgba(0, 0, 0, .05);
        position: absolute;
        left: 0;
        top: 72px;
    }

    .hero_img {
        overflow: hidden;
        min-height: 100px;
    }

    > article {
        > #title {
            font-size: 3.75rem;
            line-height: 3;
            margin-bottom: 0;
        }
    }
}

</style>
