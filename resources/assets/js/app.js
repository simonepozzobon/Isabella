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

// var Home = Vue.component('Home', );
// var Works = Vue.component('Works', );
// var About = Vue.component('About', );
// var SingleWork = Vue.component('SingleWork', );

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
    enterTransition(el)
    {
      var transition = new mojs.Html({
        el: el,
        opacity: {0 : 1},
      }).play();
    },
    leaveTransition(el)
    {
      var transition = new mojs.Html({
        el: el,
        opacity: {1 : 0},
      }).play();
    }
  }
}).$mount('#app')


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
