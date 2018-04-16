<template>
<main>
    <div class="action">
        <div class="row">
            <div class="col justify-content-around">
                <div ref="loginForm" class="form-group">
                    <input @keyup.enter="signIn" type="text" class="form-control bg-primary text-white text-center" placeholder="" v-model="password">
                </div>
                <div ref="loginBtn" class="form-group d-flex justify-content-center">
                    <button @click="signIn" class="btn btn-primary">Login</button>
                </div>
                <router-link id="enter" ref="enter" v-bind:to="'/works'" class="btn btn-lg btn-block btn-primary">Enter</router-link>
            </div>
        </div>
    </div>
    <div class="video-hero">
        <video autoplay loop id="video-background" muted plays-inline>
        <source src="/themes/default/video/video.mp4" type="video/mp4">
      </video>
    </div>
</main>
</template>
<script>
import {
    TweenMax,
    Power4,
    TimelineMax
} from 'gsap'

export default {
    data: function () {
        return {
            password: '',
        }
    },
    computed: {
        login: function() {
            return localStorage.getItem('login')
        }
    },
    mounted() {
        if (this.login) {
            this.$refs.loginForm.style.display = 'none'
            this.$refs.loginBtn.style.cssText = 'display: none !important'
            this.$refs.enter.$el.style.display = 'inherit'
            this.$refs.enter.$el.style.opacity = '1'
        }
    },
    methods: {
        signIn(e) {
            e.preventDefault()
            if (this.password == 'IF') {
                localStorage.setItem('login', true)
                var t1 = new TimelineMax()
                t1.to([this.$refs.loginForm, this.$refs.loginBtn], .4, {
                        opacity: 0,
                        display: 'none',
                    })
                    .to(this.$refs.enter.$el, .1, {
                        opacity: 1,
                        scale: 1.1,
                        display: 'inherit',
                        ease: Power4.easeInOut
                    })
                    .to(this.$refs.enter.$el, .1, {
                        scale: 1,
                        ease: Power4.easeInOut
                    })
            } else {
                // wrong password
            }
        }
    },
}
</script>
<style lang="scss" scoped>
#enter {
    display: none;
    opacity: 0;
}
</style>
