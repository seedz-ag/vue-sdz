// eslint-disable-next-line
import { createWebHistory, createRouter } from 'vue-router'

import ComponentList from './components/Index.vue'
import components from '../examples/components/list'

// TODO: name the chunks
const load = component => () => import(/* webpackChunkName: "[request]" */ `../src/components/${component}/Index.vue`)

const childrenComponents = components.map(name => ({
  name,
  path: `s-${name.toLowerCase()}`,
  component: load(name)
}))

const routes = [
  {
    path: '/',
    redirect: '/components'
  },
  {
    path: '/components',
    name: 'ComponentList',
    component: ComponentList,
    children: childrenComponents
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
