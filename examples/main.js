import { createApp } from 'vue'
import router from './router'

import Example from './Index.vue'

createApp(Example)
  .use(router)
  .mount('#app')
