import Vue from 'vue'
import Router from 'vue-router'

import GettingStarted from './GettingStarted.vue'

import StylesList from './styles/Index.vue'
import StylesRoute from './styles/routes.js'

import ComponentList from './components/Index.vue'
import ComponentsRoute from './components/routes.js'

import APIList from './api/Index.vue'
import APIsRoute from './api/routes.js'

const routes = [
  {
    path: '/vue-sdz/getting-started',
    name: 'getting-started',
    component: GettingStarted
  },
  {
    path: '/styles',
    name: 'styles',
    component: StylesList,
    children: StylesRoute
  },
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
