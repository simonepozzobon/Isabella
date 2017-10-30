<template>
  <footer class="w-100 bg-light text-center" ref="footer">
      <div class="sticky-bottom">
        <a @click="changeColor" class="nav-link">
          <svg width="75.5px" height="77.5px" viewBox="0 0 755 775" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M451.063643,461.162746 C407.605323,482.409036 351.965956,487.873617 289.921106,461.241238 C241.768214,439.820081 206.770059,405.265053 193.698782,391.076021 C206.770059,376.885995 241.768214,342.331961 289.921106,320.909811 C351.965956,294.277432 407.605323,299.742012 451.063643,320.988302 C499.109231,342.413433 534.110367,376.903879 547.198535,391.076021 C534.110367,405.248163 499.109231,439.737616 451.063643,461.162746 L451.063643,461.162746 Z" id="clip-path-1"></path>
                  <polygon id="path-1" points="371.679253 0.793181714 754.479454 391.325979 371.679253 774.12618 0.479453772 387.460183"></polygon>
                  <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="754" height="773.332998" fill="white">
                      <use xlink:href="#path-1"></use>
                  </mask>

                  <clipPath id="clip-path">
                    <use xlink:href="#clip-path-1" overflow="visible"/>
                  </clipPath>
              </defs>
              <g id="statico" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <use id="rombo" class="stroke-primary" mask="url(#mask-2)" stroke-width="39.41" xlink:href="#path-1"></use>
                  <path d="M370.444088,519.714934 C265.707946,519.714934 188.386116,438.47649 187.616107,437.655809 L174.139458,450.256139 C177.492723,453.83991 257.534921,538.162365 370.444088,538.162365 C483.348287,538.162365 563.395453,453.844878 566.753686,450.247197 L553.272068,437.655809 C552.511001,438.47649 475.180229,519.714934 370.444088,519.714934" id="palpebra-inf" class="fill-primary"></path>
                  <path d="M370.444088,265.340688 C265.707946,265.340688 188.386116,346.578139 187.616107,347.39882 L174.139458,334.799484 C177.492723,331.215712 257.534921,246.892264 370.444088,246.892264 C483.348287,246.892264 563.395453,331.210744 566.753686,334.808426 L553.272068,347.39882 C552.511001,346.578139 475.180229,265.340688 370.444088,265.340688" id="palpebra-sup" class="fill-primary"></path>
                  <path d="M451.063643,461.162746 C407.605323,482.409036 351.965956,487.873617 289.921106,461.241238 C241.768214,439.820081 206.770059,405.265053 193.698782,391.076021 C206.770059,376.885995 241.768214,342.331961 289.921106,320.909811 C351.965956,294.277432 407.605323,299.742012 451.063643,320.988302 C499.109231,342.413433 534.110367,376.903879 547.198535,391.076021 C534.110367,405.248163 499.109231,439.737616 451.063643,461.162746 L451.063643,461.162746 Z M571.414576,391.076021 L571.890491,390.48684 C571.890491,390.48684 571.532809,390.476904 570.917796,390.462001 L567.191945,385.861817 C565.748302,384.068441 549.92387,364.849014 523.293478,343.615641 L560.167475,292.873531 L545.242215,282.025842 L508.548052,332.523535 C493.587023,321.901384 476.14905,311.446151 456.602741,303.00089 L475.037256,246.25867 L457.488003,240.558616 L439.385338,296.304294 C420.937907,289.939548 400.925618,285.627497 379.681316,284.635924 L379.668399,228.239464 L361.219975,228.239464 L361.224943,284.635924 C339.976666,285.622529 319.969345,289.935574 301.520921,296.304294 L283.404345,240.571532 L265.860061,246.27258 L284.299543,302.996915 C264.758202,311.446151 247.305325,321.906352 232.339329,332.52751 L195.650134,282.048694 L180.729841,292.896383 L217.594896,343.619615 C190.978414,364.853982 175.15895,384.072416 173.710339,385.861817 L169.967598,390.48684 L169.015767,390.48684 L169.491683,391.076021 L169.015767,391.664209 L169.967598,391.664209 L173.710339,396.289231 C175.15895,398.078633 190.978414,417.29806 217.594896,438.531434 L232.339329,449.623539 C247.305325,460.244697 264.758202,470.704898 284.299543,479.154133 L301.520921,485.846754 C319.969345,492.216468 339.976666,496.528519 361.224943,497.515124 L379.681316,497.515124 C400.925618,496.523551 420.937907,492.2115 439.385338,485.846754 L456.602741,479.150159 C476.14905,470.704898 493.587023,460.249665 508.548052,449.628507 L523.293478,438.536401 C549.92387,417.301041 565.748302,398.083601 567.191945,396.289231 L570.917796,391.689048 C571.532809,391.674144 571.890491,391.664209 571.890491,391.664209 L571.414576,391.076021 Z" id="occhio-statico" class="fill-primary"></path>
              </g>
              <g id="animation" clip-path="url(#clip-path)">
                  <path ref="pupilla" d="M473.433059,391.546796 C473.433059,334.673932 427.328295,288.56821 370.454473,288.56821 C313.58161,288.56821 267.476846,334.673932 267.476846,391.546796 C267.476846,448.41966 313.58161,494.524423 370.454473,494.524423 C427.328295,494.524423 473.433059,448.41966 473.433059,391.546796" id="pupilla" stroke="none" class="fill-primary" fill-rule="evenodd"></path>
                  <g id="letters">
                    <text stroke="none" fill="none" font-family="Courier" font-size="170" font-weight="normal">
                        <tspan ref="p_let" style="visibility:hidden" x="323.1699" y="438.2135" class="fill-secondary">P</tspan>
                        <tspan ref="r_let" style="visibility:hidden" x="318.1699" y="433.2135" class="fill-secondary">R</tspan>
                        <tspan ref="e_let" style="visibility:hidden" x="318.1699" y="435.2135" class="fill-secondary">E</tspan>
                        <tspan ref="s_let" style="visibility:hidden" x="318.1699" y="435.2135" class="fill-secondary">S</tspan>
                    </text>
                  </g>
                  <path ref="palpebra_sup_open" d="M193.698782,391.076021 C206.770059,376.885995 241.768214,342.331961 289.921106,320.909811 C351.965956,294.277432 407.605323,299.742012 451.063643,320.988302 C499.109231,342.413433 534.110367,376.903879 547.198535,391.076021 C546.418662,391.920484 476.228701,303.342662 370.448658,303.292969 C264.668616,303.243275 194.325654,391.756499 193.698782,391.076021 Z" id="palpebra_sup_open" stroke="none" class="fill-primary" fill-rule="evenodd"></path>
                  <path ref="palpebra_sup_close" style="visibility:hidden" d="M193.698782,391.076021 C206.770059,376.885995 241.768214,342.331961 289.921106,320.909811 C351.965956,294.277432 407.605323,299.742012 451.063643,320.988302 C499.109231,342.413433 534.110367,376.903879 547.198535,391.076021 C546.418662,391.920484 458.553936,391.117411 370.448658,391.076021 C282.507655,391.034708 194.325654,391.756499 193.698782,391.076021 Z" id="palpebra_sup_close" stroke="none" class="fill-primary" fill-rule="evenodd"></path>
                  <rect ref="palpebra_inf" stroke="none" style="visibility:hidden" class="fill-primary" fill-rule="evenodd" x="190" y="480.989987" width="360" height="300"></rect>
              </g>
          </svg>
        </a>
        <div ref="rombo" id="black-square"></div>
      </div>
      <span class="pt-2 text-default">
        <small>© Isabella Fornasiero 2018. All rights reserved.</small>
      </span>
  </footer>
</template>
<script>

import {TweenMax, Power4, TimelineMax} from 'gsap'
var kute = require("kute.js");
require("kute.js/kute-svg");

export default {
  name: "",
  data: () => ({

  }),
  mounted() {
    //do something after mounting vue instance
    this.checkTheme();
    this.animateEye();
  },
  methods: {
    changeColor() {
      var vue = this;

      this.$refs.rombo.style.display = 'inherit';
      var width = window.innerWidth;
      var height = window.innerHeight;
      var dimension = width;
      if (dimension < height) {
        dimension = height;
      }
      var t1 = new TimelineMax();
      t1
      .to(this.$refs.rombo, .2, {
        opacity: 1,
        ease: Power4.easingCubicOut
      })
      .to(this.$refs.rombo, .4, {
        height: (dimension * 2) +'px',
        width: (dimension * 2) +'px',
        transformOrigin: '50% 100%',
        ease: Power4.easingCubicOut,
        onComplete: function () {
          // make everything dark
          if (localStorage.getItem('dark_theme', true)) {
            vue.everyThingBright()
            localStorage.removeItem('dark_theme');
          } else {
            vue.everyThingDark();
            localStorage.setItem('dark_theme', true);
          }
        }
      })
      .to(this.$refs.rombo, .2, {
        height: '54px',
        width: '54px',
        transformOrigin: '50% 50%',
        opacity: 0,
        delay: .2,
        ease: Power4.easeInOut
      });
    },
    animateEye()
    {
      var pupilla = new TimelineMax();
      pupilla
      .add(TweenMax.to(this.$refs.pupilla, .6, {
        x: '+=40',
        delay: .7
      }))
      .add(TweenMax.to(this.$refs.pupilla, .6, {
        x: '-=80',
        delay: .9
      }))
      .add(TweenMax.to(this.$refs.pupilla, .6, {
        x: 0,
        delay: .6
      }));

      var palpebra_inf = new TimelineMax();
      palpebra_inf
      .to(this.$refs.palpebra_inf, .01, {
        visibility: 'visible'
      })
      .to(this.$refs.palpebra_inf, .4, {
        y: '-=50',
        delay: .6,

      })
      .to(this.$refs.palpebra_inf, .1, {
        y: '-=60',
      })
      .to(this.$refs.palpebra_inf, .1, {
        y: 0,
        delay: .2
      });

      var palpebra_sup = new TimelineMax();
      palpebra_sup.add(function() {
          var palpebra_alt = kute.to('#palpebra_sup_open',
          {
              path: '#palpebra_sup_close'
          },
          {
              reverseSecondPath: true,
              repeat: 1, yoyo: true,
              easing: 'easingCubicOut',
              duration: 600,
          }).start()
      });

      var letters = new TimelineMax();
      letters
      .fromTo(this.$refs.p_let, .1, {
        visibility: 'hidden'
      }, {
        visibility: 'visible'
      })
      .to(this.$refs.p_let, 0, {
        visibility: 'hidden',
        delay: 2.2
      })
      .to(this.$refs.r_let, 0, {
        visibility: 'visible',
        delay: .1,
      })
      .to(this.$refs.r_let, 0, {
        visibility: 'hidden',
        delay: 2.2
      })
      .to(this.$refs.e_let, 0, {
        visibility: 'visible',
        delay: .1,
      })
      .to(this.$refs.e_let, 0, {
        visibility: 'hidden',
        delay: 2.2
      })
      .to(this.$refs.s_let, 0, {
        visibility: 'visible',
        delay: .1,
      })
      .to(this.$refs.s_let, 0, {
        visibility: 'hidden',
        delay: 2.2
      })
      .to(this.$refs.s_let, 0, {
        visibility: 'visible',
        delay: .1,
      })
      .to(this.$refs.s_let, 0, {
        visibility: 'hidden',
        delay: 2.2
      });

      var master = new TimelineMax({
          onComplete:function() {
              this.restart();
          }
      });
      master
      .add(pupilla)
      .add(palpebra_inf, 4)
      .add(palpebra_sup, 4.6)
      .add(letters, 5.1);

      // master.add(palpebra_inf);
      // master.add(palpebra_sup, .6);
      // master.add(letters, 1.1);
    },
    checkTheme()
    {
      this.dark_theme = localStorage.getItem('dark_theme') || false;
      console.log(this.dark_theme);
      if (this.dark_theme) {
        this.everyThingDark();
      } else {
        this.everyThingBright();
        localStorage.removeItem('dark_theme');
      }
    },
    everyThingDark()
    {
        $('.text-default').removeClass('text-default').addClass('text-light');
        $('.bg-default').removeClass('bg-default').addClass('bg-primary');
        $('.bg-light').removeClass('bg-light').addClass('bg-inverse');
        $('.btn-primary').removeClass('btn-primary').addClass('btn-secondary');
        var strokes_primary = $('.stroke-primary');
        var strokes_secondary = $('.stroke-secondary');
        var fills_primary = $('.fill-primary');
        var fills_secondary = $('.fill-secondary');
        strokes_primary.removeClass('stroke-primary').addClass('stroke-secondary');
        strokes_secondary.removeClass('stroke-secondary').addClass('stroke-primary');
        fills_primary.removeClass('fill-primary').addClass('fill-secondary');
        fills_secondary.removeClass('fill-secondary').addClass('fill-primary');
    },
    everyThingBright()
    {
        $('.text-light').removeClass('text-light').addClass('text-default');
        $('.bg-primary').removeClass('bg-primary').addClass('bg-default');
        $('.bg-inverse').removeClass('bg-inverse').addClass('bg-light');
        $('.btn-secondary').removeClass('btn-secondary').addClass('btn-primary');
        var strokes_primary = $('.stroke-primary');
        var strokes_secondary = $('.stroke-secondary');
        var fills_primary = $('.fill-primary');
        var fills_secondary = $('.fill-secondary');
        strokes_primary.removeClass('stroke-primary').addClass('stroke-secondary');
        strokes_secondary.removeClass('stroke-secondary').addClass('stroke-primary');
        fills_primary.removeClass('fill-primary').addClass('fill-secondary');
        fills_secondary.removeClass('fill-secondary').addClass('fill-primary');
    }
  }
}
</script>
<style lang="scss" scoped>

  #black-square {
    display: none;
    width: 54px;
    height: 54px;
    position: fixed;
    bottom: 1.4rem;
    right: .65rem;
    background-color: #1E1E1C;
    transform: rotate(45deg);
    opacity: 0;
    z-index: 0
  }

  .fill-primary {
    fill: #1e1f1c;
  }

  .stroke-primary {
    stroke: #1e1f1c;
  }

  .fill-secondary {
    fill: #fffdf4;
  }

  .stroke-secondary {
    stroke: #fffdf4;
  }

</style>
