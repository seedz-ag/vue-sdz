import Vue from 'vue'
import store from './store'
import router from './router'

import Example from './Index.vue'

import '../src/styles/_index.scss'
import '../node_modules/sdz-icons/index.css'
import { VueCoeFeedback } from 'vue-coe-feedback'

Vue.config.productionTip = false
Vue.use(VueCoeFeedback, store, { delay: 3000 })

export default new Vue({
  store,
  router,
  render: h => h(Example),
}).$mount('#app')
