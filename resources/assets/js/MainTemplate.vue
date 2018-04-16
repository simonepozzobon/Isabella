<template lang="html">
    <div class="main-container">
        <canvas id="animationPage" ref="animationPage" resize></canvas>
        <main-menu v-if="notHome"/>
        <transition :css="false" @enter="enter" @leave="leave">
            <router-view></router-view>
        </transition>
        <footer-layout v-if="notHome"/>
    </div>
</template>

<script>
import {TimelineMax} from 'gsap'
import FooterLayout from './layouts/FooterLayout.vue'
import MainMenu from './layouts/MainMenu.vue'
import EventBus from './eventbus'

export default {
    components: {
        FooterLayout,
        MainMenu,
    },
    data: function() {
        return {
            mousePos: {},
        }
    },
    computed: {
        notHome: function() {
            if (this.$route.name == 'Home') {
                return false
            }
            return true
        },
        loggedIn: function() {
            if (!localStorage.getItem('login')) {
                this.$router.replace('/')
            }
        },
    },
    watch: {
        $route: function() {}
    },
    methods: {
        enter: function(el, done) {
            var t1 = new TimelineMax()
            t1.fromTo(el, .4, {
                opacity: 0,
            }, {
                opacity: 1,
                onComplete: function() {
                    done()
                }
            })
        },
        leave: function(el, done) {
            var t1 = new TimelineMax()
            t1.fromTo(el, .4, {
                opacity: 1,
            }, {
                opacity: 0,
                onComplete: function() {
                    done()
                }
            })
        },
    },
    mounted(){
        this.loggedIn

        // EventBus.$on('mouseDown', event => {
        //     this.mousePos = event
        //     console.log(event)
        //     this.paperInit()
        // })

    }
}
</script>

<style lang="scss" scoped>
    #animationPage {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
