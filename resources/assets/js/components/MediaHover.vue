<template lang="html">
    <router-link :to="'/work/'+link">
        <div ref="mediaHover" class="media-hover">
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

var masterIn, masterOut

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
        size: {
            type: Number,
            default: 0,
        },
        src: {
            type: String,
            default: 'none',
        }
    },
    data: function() {
        return {
            canAnimateIn: true,
            canAnimateOut: false,
            current: 0,
            isOpen: 0,
            trigger: false,
        }
    },
    watch: {
        current: function(newCurrent, oldCurrent) {
            if (newCurrent != oldCurrent) {
                this.trigger = !this.trigger
            }
        },
        canAnimateOut: function(status) {
            if (status && this.current != this.id) {
                this.animateOut()
            }
        },
        canAnimateIn: function(status) {
            if (status && this.current == this.id) {
                this.animateIn()
            }
        },
        size: function(size) {
            this.$refs.mediaHover.style.height = `${size}`
            this.$refs.mediaHover.style.width = `${size}`
        },
        trigger: function(newtrigger) {
            if (this.current == this.id && this.canAnimateIn) {
                this.animateIn()
            } else if (this.current != this.id && this.canAnimateOut){
                this.animateOut()
            }
        },
    },
    methods: {
        animateIn: function() {
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

            masterIn = new TimelineMax({id: 'mediaHover'})
            masterIn.add(t1, 0.01)
            masterIn.add(t2, 0.01)
            masterIn.add(t3, 0.3)
            masterIn.add(t4, 0.3)
            masterIn.play()

            masterIn.eventCallback('onComplete', () => {
                this.canAnimateOut = true
                this.canAnimateIn = false
            })
        },
        animateOut: function() {
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

            masterOut = new TimelineMax({id: 'mediaLeave'})
            masterOut.add(t1, 0.01)
            masterOut.add(t2, 0.01)
            masterOut.add(t3, 0.2)
            masterOut.add(t4, 0.2)
            masterOut.play()

            masterOut.eventCallback('onComplete', () => {
                this.canAnimateOut = false
                this.canAnimateIn = true
            })
        }
    },
    mounted() {
        EventBus.$on('mediaHoverCurrent', id => {
            this.current = id
        })
    }
}
</script>

<style lang="scss">
    .media-hover {
        position: relative;
        cursor: pointer;
        overflow: hidden;
        border-radius: 5px;

        > svg {
            width: 100%;
            height: 100%;
            display: block;
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
