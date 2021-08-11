// eslint-disable-next-line
import { createWebHistory, createRouter } from 'vue-router'

import ComponentList from './components/Index.vue'

// TODO: name the chunks
const load = component => () => import(/* webpackChunkName: "[request]" */ `../src/components/${component}/Index.vue`)

const routes = [
  {
    path: '/',
    redirect: '/components'
  },
  {
    path: '/components',
    name: 'ComponentList',
    component: ComponentList,
    children: [
      { name: 'SCard', path: 's-card', component: load('SCard') },
      { name: 'SMenu', path: 's-menu', component: load('SMenu') },
      { name: 'SModal', path: 's-modal', component: load('SModal') },
      { name: 'SButton', path: 's-button', component: load('SButton') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
