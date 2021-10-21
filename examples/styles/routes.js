const load = component => () => import(/* webpackChunkName: "[request]" */ `./${component}.vue`)

export default [
  {
    component: load('Palettes'),
    name: 'style-palettes',
    path: '/vue-sdz/styles/palettes'
  }
]
