import Vue from 'vue'
import Router from 'vue-router'

import ComponentList from './components/Index.vue'
import componentsRoute from './components/routes.js'

const routes = [
  {
    path: '/',
    redirect: '/components'
  },
  {
    path: '/components',
    name: 'ComponentList',
    component: ComponentList,
    children: componentsRoute
  }
]

Vue.use(Router)

const router = new Router({ mode: 'history', routes })

export default router
