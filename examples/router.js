import Vue from 'vue'
import Router from 'vue-router'

import ComponentList from './components/Index.vue'
import ComponentsRoute from './components/routes.js'

import APIList from './api/Index.vue'
import APIsRoute from './api/routes.js'

const routes = [
  {
    path: '/components',
    name: 'components',
    component: ComponentList,
    children: ComponentsRoute
  },
  {
    path: '/api',
    name: 'api',
    component: APIList,
    children: APIsRoute
  }
]

Vue.use(Router)

const router = new Router({ mode: 'history', routes })

export default router
