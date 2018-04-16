<template>
<div :id="'work-'+this.id" class="col-md-4 col-lg-4 box mb-4" ref="col" @mouseover="animateIn(id)" @mouseleave="animateOut(id)" >
    <div class="row pb-4">
        <div class="col work">
            <media-hover :id="id" :src="img" :link="link" :size="mediaSize"/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <router-link :to="'/work/'+link" :class="isDark">
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
import {TimelineMax} from 'gsap'

export default {
    props: {
        counter: {
            type: Number,
            default: 0,
        },
        post: {
            type: Object,
            default: function() {},
        }
    },
    components: {
        MediaHover,
    },
    data: function() {
        return {
            mediaSize: 0,
        }
    },
    computed: {
        isDark: function() {
            if (localStorage.getItem('dark_theme')) {
                return 'link-light'
            }
            return 'link-default'
        },
        routeIsOpen: function() {
            if (this.$route.name == 'Works') {
                return true
            }
            return false
        },
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
        delay: function() {
            return (this.counter + 1) / 10
        }
    },
    methods: {
        animateIn: function(id) {
            EventBus.$emit('mouseOver', id)
        },
        animateOut: function(id) {
            EventBus.$emit('mouseLeave', id)
        },
        loadAnimation: function() {
            var vue = this
            var t1 = new TimelineMax()
            t1.from('#work-'+this.id, .4, {
                delay: vue.delay,
                opacity: 0,
                scale: 0.9,
                y: '+=100',
            })
        },
        resizeCol: function() {
            if (this.routeIsOpen && this.$refs.col) {
                var col = this.$refs.col.offsetWidth
                this.mediaSize = col - 30
            }
        },
    },
    mounted() {
        this.resizeCol()
        this.loadAnimation()
        window.addEventListener('resize', () => {
            this.resizeCol()
        })
    },
}
</script>
<style scoped>
</style>
