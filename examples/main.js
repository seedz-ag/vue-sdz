import Vue from 'vue'
import router from './router'

import Example from './Index.vue'

import '../src/styles/_index.scss'

Vue.config.productionTip = false

export default new Vue({
  router,
  render: h => h(Example),
}).$mount('#app')
