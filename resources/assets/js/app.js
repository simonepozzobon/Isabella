window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
import Popper from 'popper.js/dist/umd/popper.js';
window.Popper = Popper;
require('bootstrap')

import Vue from 'vue'
import routes from './routes'
import VLink from './components/VLink.vue'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    VLink
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
