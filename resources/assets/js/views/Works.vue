<template>
<main-layout>
    <div class="container pt-5">
        <transition>
            <grid @loadComplete="ready"></grid>
        </transition>
    </div>
</main-layout>
</template>
<script>
import MainLayout from '../layouts/MainLayout.vue'
import Grid from '../components/grid.vue'
import mojs from 'mo-js'
import MojsPlayer from 'mojs-player'
import ScrollReveal from 'scrollreveal'

export default {
    components: {
        MainLayout,
        Grid
    },
    data: function() {
        return {
            posts: [],
        }
    },
    methods: {
        ready: function() {
            window.sr = ScrollReveal();
            sr.reveal('.box', {
                distance: '80vh',
                scale: 0.9,
                duration: 400,
                delay: 60,
                viewFactor: 0.5,
                easing: 'cubic-bezier(.25, 1, .25, 1)',
                viewOffset: {
                    top: 50
                }
            }, 20);
        },
    },
    mounted() {
        this.$on('animateIn', id => {
            console.log('evento ricevuto')
        })
    },
}
</script>
<style>
.sr .box {
    visibility: hidden;
}
</style>
