const load = component => () => import(/* webpackChunkName: "[request]" */ `./${component}/Index.vue`)

const modules = import.meta.glob('./*/Index.vue')

const components = Object
  .keys(modules)
  .map(fileName => fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('/')[0])

export default components.map(name => ({
  component: load(name),
  name: `api-${name}`,
  path: name.toLowerCase().slice(1)
}))