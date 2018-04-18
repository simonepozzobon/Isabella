<template>
    <div id="hero-wrapper">
        <div id="mask-overlay">
            <svg width="0" height="0">
                <defs>
                    <clipPath id="circle-mask">
                        <circle id="init" cx="100" cy="100" r="1"></circle>
                    </clipPath>
                </defs>
                <circle id="end" cx="100" cy="100" r="1" style="visibility: hidden"></circle>
            </svg>
        </div>
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
            <div id="video-hero">
            </div>
        </div>
    </div>
</template>
<script>
import {TweenMax, Power4, TimelineMax} from 'gsap'
import MorphSVG from 'gsap/MorphSVGPlugin'
import Player from '@vimeo/player/src/player'

export default {
    data: function () {
        return {
            password: '',
            videoEl: null,
            videoId: 264962454,
            videoPlayer: null,
            path: null,
            delta: 0,
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

            var videoWidth = height / padding

            if (videoWidth < width) {
                var videoHeight = width * padding
                this.videoPlayer.element.style.height = `${videoHeight}px`
                this.videoPlayer.element.style.width = `${width}px`
            } else {
                this.videoPlayer.element.style.height = `${height}px`
                this.videoPlayer.element.style.width = `${videoWidth}px`
            }

        },
        loadVimeo: function() {
            var options = {
                id: this.videoId,
                background: true,
                autoplay: true,
                loop: true,
                muted: true,
                playsinline: true,
                controls: false,
            }
            this.videoPlayer = new Player('video-hero', options)
            this.videoPlayer.ready().then(function() {
                this.windowResized()
                console.log('video-loaded')
                this.animateInit()
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
                t1.eventCallback('onComplete', this.redirectToWorks)
            } else {
                // wrong password
            }
        },
        redirectToWorks: function() {
            this.$router.push({name: 'Works'})
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
        },
        animateInit: function() {
            var mask = document.getElementById('init')
            var end = document.getElementById('end')

            var width = window.innerWidth
            var height = window.innerHeight

            mask.setAttribute('cx', width / 2)
            mask.setAttribute('cy', height / 2)
            end.setAttribute('cx', width / 2)
            end.setAttribute('cy', height / 2)

            if (height > width) {
                end.setAttribute('r', height)
            } else {
                end.setAttribute('r', width)
            }

            MorphSVG.convertToPath('#init')
            MorphSVG.convertToPath('#end')

            var t1 = new TweenMax.to('#init', .6, {
                morphSVG: '#end',
                transformOrigin: '50% 50%',
                ease: Sine.easeOut
            })

            var t2 = new TweenMax.fromTo('#video-hero', .6, {
                opacity: 0,
                ease: Sine.easeOut
            }, {
                opacity: 1,
                ease: Sine.easeOut
            })

            var master = new TimelineMax()
            master.add(t1, 0.01)
            master.add(t2, 0.01)
            master.play()
        },
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
html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#mask-overlay {
    position: absolute;
    min-width: 100%;
    height: 100vh;
    width: auto;
    top: 50%;
    left: 50%;
}

#hero-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#enter {
    display: none;
    opacity: 0;
}

#video-hero-container {
    position: relative;
    overflow: hidden;
    height: 100%;
    min-height: 100%;
    z-index: -100;
    clip-path: url(#circle-mask);

    #video-hero {
        padding: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

}
</style>
