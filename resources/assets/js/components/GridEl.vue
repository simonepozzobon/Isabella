<template>
<div class="col-md-4 col-lg-4 box mb-4" ref="col" @mouseover="animateIn(id)" @mouseleave="animateOut(id)">
    <div class="row pb-4">
        <div class="col work">
            <media-hover :id="id" :src="img" :link="link" ref="img_grid" class="img_grid"/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <router-link :to="'/work/'+link">
                <h5 class="title text-center text-default">{{ title }}</h5>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import _ from 'lodash'
import MediaHover from './MediaHover'
import EventBus from '../eventbus'

export default {
    props: ['post'],
    components: {
        MediaHover,
    },
    data: function() {
        return {
            opened: [],
            circles: [],
            crosses: [],
        }
    },
    computed: {
        id: function() {
            return parseInt(this.post.data.id)
        },
        img: function() {
            return this.post.data.grid_img
        },
        link: function() {
            return this.post.data.slug
        },
        title: function() {
            return this.post.data.title
        },
    },
    methods: {
        animateIn: function(id) {
            EventBus.$emit('mouseOver', id)
        },
        animateOut: function(id) {
            EventBus.$emit('mouseLeave', id)
        },
        resizeCol: function() {
            var col = this.$refs.col.offsetWidth
            this.$refs.img_grid.$el.style.height = (col - 30) + 'px'
            this.$refs.img_grid.$el.style.background = 'url(' + this.img + ') center'
            this.$refs.img_grid.$el.style.backgroundSize = 'cover'
        },
    },
    mounted() {
        var vue = this
        this.resizeCol()
        this.$emit('worksLoaded', true)
        window.addEventListener('resize', _.debounce(() => {
            this.resizeCol()
        }, 250))
    },
}
</script>
<style scoped>
.img_grid {
    overflow: hidden;
    border-radius: .15rem;
}
</style>
