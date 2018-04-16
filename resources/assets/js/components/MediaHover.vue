<template lang="html">
    <router-link :to="'/work/'+link">
        <div class="media-hover">
            <svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="hover" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <!-- Image background -->
                    <image :xlink:href="src" x="0" y="0" width="500" height="500"/>

                    <!-- Circle -->
                    <path id="oval-hover" ref="ovalHover" class="fill-black hidden" d="M314,250 C314,285.347 285.347,314 250,314 C214.653,314 186,285.347 186,250 C186,214.653 214.653,186 250,186 C285.347,186 314,214.653 314,250"></path>
                    <path id="oval-mid" ref="ovalMid" class="fill-black hidden" d="M250,427 C277,427 277,398.911688 277,384 C277,369.088312 292.242188,333 250,333 C207.757812,333 223,369.088312 223,384 C223,398.911688 223,427 250,427 Z"></path>
                    <path id="oval-start" ref="ovalStart" class="fill-black start-hidden" d="M277,473 C277,487.912 264.912,500 250,500 C235.088,500 223,487.912 223,473 C223,458.088 235.088,446 250,446 C264.912,446 277,458.088 277,473"></path>

                    <!-- Plus sign-->
                    <path id="plus-start" ref="plusStart" class="fill-secondary start-hidden" d="M262,250 C262,256.627 256.627,262 250,262 C243.373,262 238,256.627 238,250 C238,243.373 243.373,238 250,238 C256.627,238 262,243.373 262,250"></path>
                    <path id="plus" ref="plus" class="fill-secondary hidden" d="M262,248.363636 L262,251.636364 C262,252.539773 261.267045,253.272727 260.363636,253.272727 L253.272727,253.272727 L253.272727,260.363636 C253.272727,261.267045 252.539773,262 251.636364,262 L248.363636,262 C247.460227,262 246.727273,261.267045 246.727273,260.363636 L246.727273,253.272727 L239.636364,253.272727 C238.732955,253.272727 238,252.539773 238,251.636364 L238,248.363636 C238,247.460227 238.732955,246.727273 239.636364,246.727273 L246.727273,246.727273 L246.727273,239.636364 C246.727273,238.732955 247.460227,238 248.363636,238 L251.636364,238 C252.539773,238 253.272727,238.732955 253.272727,239.636364 L253.272727,246.727273 L260.363636,246.727273 C261.267045,246.727273 262,247.460227 262,248.363636 Z"></path>
                </g>
            </svg>
        </div>
    </router-link>
</template>

<script>
import {TimelineMax, Power0} from 'gsap'
import MorphSVG from 'gsap/MorphSVGPlugin'
import Draggable from 'gsap/Draggable'
import GSDevTools from 'gsap/GSDevTools'
import EventBus from '../eventbus'

export default {
    name: 'MediaHover',
    props: {
        id: {
            type: Number,
            default: 0,
        },
        link: {
            type: String,
            default: 'none',
        },
        src: {
            type: String,
            default: 'none',
        }
    },
    data: function() {
        return {
            ready: false,
            masterOpen: null,
            masterClose: null,
        }
    },
    methods: {
        animateIn: function() {
            this.ready = false

            var t1 = new TimelineMax()
            t1.to(this.$refs.ovalStart, .1, {
                    morphSVG: this.$refs.ovalMid,
                    ease: Power0.easeNone
                })
                .to(this.$refs.ovalStart, .8, {
                    morphSVG: this.$refs.ovalHover,
                    ease: Elastic.easeOut.config(1, 0.5)
                })

            var t2 = new TimelineMax()
            t2.fromTo(this.$refs.ovalStart, .26, {
                opacity: 0,
                ease: Power0.easeNone
            }, {
                opacity: 1,
                ease: Power0.easeNone
            })

            var t3 = new TimelineMax()
            t3.to(this.$refs.plusStart, .5, {
                morphSVG: this.$refs.plus,
                ease: Elastic.easeOut.config(1, 0.5)
            })

            var t4 = new TimelineMax()
            t4.fromTo(this.$refs.plusStart, .5, {
                scale: 0,
                opacity: 0,
                transformOrigin: 'center',
                ease: Elastic.easeOut.config(1, 0.5)
            }, {
                scale: 1,
                opacity: 1,
                transformOrigin: 'center',
                ease: Elastic.easeOut.config(1, 0.5)
            })

            this.masterOpen = new TimelineMax({id: 'mediaHover'})
            this.masterOpen.add(t1, 0.01)
            this.masterOpen.add(t2, 0.01)
            this.masterOpen.add(t3, 0.3)
            this.masterOpen.add(t4, 0.3)
            this.masterOpen.play()

            this.masterOpen.eventCallback('onComplete', () => {
                this.ready = true
                EventBus.$emit('animationInComplete', this.id)
            })
        },
        animateOut: function() {
            this.ready = false

            var t1 = new TimelineMax()
            t1.fromTo(this.$refs.plusStart, .8, {
                scale: 1,
                opacity: 1,
                transformOrigin: 'center',
                ease: Elastic.easeOut.config(1, 0.5)
            }, {
                scale: 0,
                opacity: 0,
                transformOrigin: 'center',
                ease: Elastic.easeOut.config(1, 0.5)
            })

            var t2 = new TimelineMax()
            t2.to(this.$refs.plusStart, .8, {
                morphSVG: this.$refs.plusStart,
                ease: Elastic.easeOut.config(1, 0.5)
            })

            var t3 = new TimelineMax()
            t3.to(this.$refs.ovalStart, .1, {
                    morphSVG: this.$refs.ovalMid,
                    ease: Power0.easeNone
                })
                .to(this.$refs.ovalStart, .8, {
                    morphSVG: this.$refs.ovalStart,
                    ease: Elastic.easeOut.config(1, 0.5)
                })

            var t4 = new TimelineMax()
            t4.to(this.$refs.ovalStart, .26, {
                opacity: 0,
                ease: Power0.easeNone
            })

            this.masterClose = new TimelineMax({id: 'mediaLeave'})
            this.masterClose.add(t1, 0.01)
            this.masterClose.add(t2, 0.01)
            this.masterClose.add(t3, 0.2)
            this.masterClose.add(t4, 0.2)
            this.masterClose.play()

            this.masterClose.eventCallback('onComplete', () => {
                this.ready = true
                EventBus.$emit('animationOutComplete', this.id)
            })
        }
    },
    mounted() {
        EventBus.$on('animateIn', id => {
            if (id == this.id) {
                this.animateIn()
            }
        })

        EventBus.$on('animateOut', id => {
            if (id == this.id) {
                this.animateOut()
            }
        })
    }
}
</script>

<style lang="scss">
    .media-hover {
        position: relative;
        cursor: pointer;

        > svg {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }

    .fill-black {
        fill: #1e1f1c;
    }

    .fill-secondary {
        fill: #fffdf4;
    }

    .hidden {
        visibility: hidden;
    }

    .start-hidden {
        opacity: 0;
    }

</style>
