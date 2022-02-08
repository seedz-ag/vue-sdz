import Vue from 'vue'
import store from './store'
import router from './router'

import Example from './Index.vue'

import { VueCoeFeedback } from 'vue-coe-feedback'

import 'sdz-icons/index.css'

import '../src/styles/_index.scss'

Vue.config.productionTip = false
Vue.use(VueCoeFeedback, store, { delay: 3000 })

export default new Vue({
  store,
  router,
  render: h => h(Example),
}).$mount('#app')
