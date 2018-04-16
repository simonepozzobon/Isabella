<template>
    <div id="hero-wrapper">
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
        <div id="video-hero-container">
            <div id="video-hero"></div>
        </div>
    </div>
</template>
<script>
import {
    TweenMax,
    Power4,
    TimelineMax
} from 'gsap'
import Player from '@vimeo/player/src/player'

export default {
    data: function () {
        return {
            password: '',
            videoEl: null,
            videoId: 264890702,
            videoPlayer: null,
        }
    },
    computed: {
        login: function() {
            return localStorage.getItem('login')
        },
    },
    methods: {
        getAspectRatio: function(width, height) {
            const getRatio = (w, h) => (h === 0 ? w : getRatio(h, w % h))
            const ratio = getRatio(width, height)
            return `${width / ratio}:${height / ratio}`
        },
        setAspectRatio: function(input) {
            const ratio = input.split(':')
            const padding = ratio[1] / ratio[0]

            const container = document.getElementById('video-hero-container')
            var height = window.innerHeight
            var width = window.innerWidth

            container.style.width = `${width}px`
            container.style.height = `${height}px`

            width = height / padding
            this.videoPlayer.element.style.height = `${height}px`
            this.videoPlayer.element.style.width = `${width}px`
        },
        loadVimeo: function() {
            var options = {
                id: this.videoId,
                background: true,
                loop: true,
            }
            this.videoPlayer = new Player('video-hero', options)
            this.videoPlayer.ready().then(function() {
                this.windowResized()
            }.bind(this))
        },
        signIn: function(e) {
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
        },
        windowResized: function() {
            var player = this.videoPlayer
            var vue = this
            Promise.all([
                player.getVideoWidth(),
                player.getVideoHeight(),
            ]).then(dimensions => {
                const ratio = vue.getAspectRatio(dimensions[0], dimensions[1])
                vue.setAspectRatio.call(this, ratio)
            })

        }
    },
    mounted() {
        this.loadVimeo()
        if (this.login) {
            this.$refs.loginForm.style.display = 'none'
            this.$refs.loginBtn.style.cssText = 'display: none !important'
            this.$refs.enter.$el.style.display = 'inherit'
            this.$refs.enter.$el.style.opacity = '1'
        }
        window.addEventListener('resize', () => {
            if (this.videoPlayer) {
                this.windowResized()
            }
        })
    },
}
</script>
<style lang="scss" scoped>
#hero-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

#enter {
    display: none;
    opacity: 0;
}

#video-hero-container {
    position: relative;
    overflow: hidden;
    z-index: -100;

    #video-hero {
        padding: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        > iframe {
        }
    }

}
</style>
