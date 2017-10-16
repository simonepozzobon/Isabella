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

var Home = Vue.component('Home', require('./views/Home.vue'));
var Works = Vue.component('Works', require('./views/Works.vue'));
var SingleWork = Vue.component('SingleWork', require('./views/single/Work.vue'));

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/works', component: Works},
    { path: '/work/:slug', component: SingleWork}
  ]
})

const app = new Vue({
  router
}).$mount('#app')


window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
