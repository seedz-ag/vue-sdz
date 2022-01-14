import Vue from 'vue'
import Router from 'vue-router'

import GettingStarted from './commons/GettingStarted.vue'

import StylesList from './styless/Index.vue'
import StylesRoute from './styless/routes.js'

import ComponentList from './components/Index.vue'
import ComponentsRoute from './components/routes.js'

const routes = [
  {
    path: '/commons/GettingStarted.vue',
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
  }
]

Vue.use(Router)

const router = new Router({ mode: 'history', routes })

export default router
