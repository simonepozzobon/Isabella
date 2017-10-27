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
    { path: '/work/:slug', component: require('./views/single/Work.vue') }
  ]
})

import mojs from 'mo-js'

const app = new Vue({
  router,
  methods: {
    enter: function(el, done)
    {
      el.style.display = 'auto';
      var enterTransition = new mojs.Html({
        el: el,
        opacity: {0 : 1},
        duration: 500,
        easing: 'sin.in',
        onComplete: function () {
        }
      }).play();
    },

    beforeLeave: function(el, done)
    {
      var leaveTransition = new mojs.Html({
        el: el,
        opacity: {1 : 0},
        duration: 250,
        easing: 'sin.out',
        onComplete: function ()
        {

        }
      }).play();
    },

    leave: function(el, done)
    {
      el.style.display = 'none';
    }
  },
}).$mount('#app')


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
