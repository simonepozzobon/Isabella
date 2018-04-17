window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
import Popper from 'popper.js/dist/umd/popper.js'
window.Popper = Popper
require('bootstrap')

// require('./commonJS/fittext')


import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)


// import AOS from 'aos'
// import 'aos/dist/aos.css'


import MainTemplate from './MainTemplate'


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: require('./views/Home.vue')
        }, {
            path: '/works',
            name: 'Works',
            component: require('./views/Works.vue')
        }, {
            path: '/about',
            name: 'About',
            component: require('./views/About.vue')
        }, {
            path: '/contacts',
            alias: '/contact',
            name: 'Contact',
            component: require('./views/Contact.vue')
        }, {
            path: '/cv',
            alias: '/curriculum',
            name: 'Cv',
            component: require('./views/Cv.vue')
        }, {
            path: '/work/:slug',
            name: 'Single-Work',
            component: require('./views/single/Work.vue')
        }
    ]
})

import {TweenMax, Power4, TimelineMax} from "gsap"

const app = new Vue({
    el: '#app',
    router,
    components: {
        MainTemplate,
    }
}).$mount('#app')

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})
