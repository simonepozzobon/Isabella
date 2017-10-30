window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
import Popper from 'popper.js/dist/umd/popper.js';
window.Popper = Popper;
require('bootstrap')

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: require('./views/Home.vue') },
    { path: '/works', component: require('./views/Works.vue') },
    { path: '/about', component: require('./views/About.vue') },
    { path: '/contacts', alias: '/contact', component: require('./views/Contact.vue') },
    { path: '/cv', alias: '/curriculum', component: require('./views/Cv.vue') },
    { path: '/work/:slug', component: require('./views/single/Work.vue') }
  ]
})

import {TweenMax, Power4, TimelineMax} from "gsap";

const app = new Vue({
  el: '#app',
  router,
  methods: {
    enter: function(el, done)
    {
      el.style.display = 'auto';
      TweenMax.fromTo(el, .4, {
        opacity: 0,
      }, {
        opacity: 1,
        ease: Power4.easeInOut
      })
      done
    },

    beforeLeave: function(el, done)
    {
      TweenMax.fromTo(el, .4, {
        opacity: 1,
      }, {
        opacity: 0,
        ease: Power4.easeInOut,
        onComplete: function () {
          var parent = el.parentNode;
          el.style.display = 'none';
          console.log(el);
          // parent.removeChild(el);
        }
      });
      done
    },

    leave: function(el, done)
    {

      // var parent = el.parentNode;
      // el.style.display = 'none';
      // parent.removeChild(el);
      // done;
    }
  },
}).$mount('#app')


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
