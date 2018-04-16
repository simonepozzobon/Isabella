<template lang="html">
    <div class="main-container">
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

export default {
    components: {
        FooterLayout,
        MainMenu,
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
        }
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
    }
}
</script>

<style lang="css">
</style>
