// eslint-disable-next-line
import { createWebHistory, createRouter } from 'vue-router'

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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
