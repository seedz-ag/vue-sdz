import Vue from 'vue'
import router from './router'

import Example from './Index.vue'

Vue.config.productionTip = false

export default new Vue({
  router,
  render: h => h(Example),
}).$mount('#app')
