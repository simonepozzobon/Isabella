<template>
  <main>
    <div class="action">
      <!-- <div class="row pb-5">
        <div class="col justify-content-around">
          <svg ref="logo" viewBox="0 0 868 868" width="180" height="180" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="mx-auto d-block">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(57.000000, 0.000000)">
                      <polygon class="svg-black" points="377.8569 -0.0002 -0.0001 216.9438 -0.0001 652.2708 377.8569 867.7778 754.2779 652.2708 754.2779 216.9438"></polygon>
                      <path d="M235.8068,250.5967 L235.8068,610.5717" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M282.0891,250.5967 L282.0891,610.3077" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M163.2648,556.7984 L354.7348,556.7984" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M163.2101,602.6655 L354.6801,602.6655" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M163.2326,303.5835 L354.7016,303.5835" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M163.2326,257.7514 L354.7016,257.7514" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M382.9914,250.5967 L382.9914,610.3077" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M429.2219,250.5884 L429.2219,610.3004" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M429.2805,366.9365 L496.7705,366.9365" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M429.2209,412.7354 L496.7319,412.7354" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M387.0246,304.6958 L603.2926,304.6958" class="svg-white-stroke" stroke-width="15.296"></path>
                      <path d="M375.4289,257.7514 L603.2919,257.7514" class="svg-white-stroke" stroke-width="15.296"></path>
                      <polygon class="svg-white-stroke" stroke-width="15.222" points="127.743 645.694 637.917 645.694 637.917 215.564 127.743 215.564"></polygon>
                  </g>
              </g>
          </svg>
        </div>
      </div> -->
      <div class="row">
        <div class="col justify-content-around">
          <div ref="loginForm" class="form-group">
            <input @keyup.enter="signIn" id="login" type="text" class="form-control bg-primary text-white text-center" placeholder="">
          </div>
          <div ref="loginBtn" class="form-group d-flex justify-content-center">
            <a @click="signIn" href="#" class="btn btn-primary">Login</a>
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
import mojs from 'mo-js'
import $ from 'jquery'
import {TweenMax, Power4, TimelineMax} from 'gsap';

export default {
    data: () => ({
      login: ''
    }),
    mounted () {
      // $('.controls-wrapper').remove();
      this.login = localStorage.getItem('login') || false;
      console.log(this.login);
      if (this.login) {
        this.$refs.loginForm.style.display = 'none';
        this.$refs.loginBtn.style.cssText = 'display: none !important';
        this.$refs.enter.$el.style.display = 'inherit';
        this.$refs.enter.$el.style.opacity = '1';
      }
    },
    methods: {
      logoFadeIn() {
          var animation = new mojs.Html({
            el: this.$refs['logo'],
            opacity: {0 : 1},
            easing: 'sin.in.out',
            duration: 500,
          }).play();
      },

      signIn(e)
      {
          e.preventDefault();
          var vue = this;
          if (document.getElementById('login').value === 'IF') {
              localStorage.setItem('login', true);
              var t1 = new TimelineMax();
              t1.to([this.$refs.loginForm, this.$refs.loginBtn], .4, {
                  opacity: 0,
                  onComplete: function () {
                      vue.$refs.loginForm.style.display = 'none';
                      vue.$refs.loginBtn.style.display = 'none';
                      vue.$refs.enter.$el.style.display = 'inherit';
                  }
              })
              .to(this.$refs.enter.$el, .1, {
                  opacity: 1,
                  scale: 1.1,
                  ease: Power4.easeInOut
              })
              .to(this.$refs.enter.$el, .1, {
                  scale: 1,
                  ease: Power4.easeInOut
              });
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
