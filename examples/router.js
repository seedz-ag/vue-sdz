// eslint-disable-next-line
import { createWebHistory, createRouter } from 'vue-router'

import ComponentList from './components/Index.vue'

// import SCard from '@/components/SCard/Index.vue'
// import SMenu from '@/components/SMenu/Index.vue'
// import SModal from '@/components/SModal/Index.vue'
// import SButton from '@/components/SButton/Index.vue'

// TODO: name the chunks
const load = component => import(`@/components/${component}/Index.vue`)

const routes = [
  {
    path: '/',
    redirect: '/components'
  },
  {
    path: '/components',
    // name: 'ComponentList',
    component: ComponentList,
    children: [
      { name: 'SCard', path: '/components/s-card', component: () => load('SCard') },
      { name: 'SMenu', path: '/components/s-menu', component: () => load('SMenu') },
      { name: 'SModal', path: '/components/s-modal', component: () => load('SModal') },
      { name: 'SButton', path: '/components/s-button', component: () => load('SButton') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
