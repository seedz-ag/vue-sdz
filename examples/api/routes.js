const load = api => () => import(/* webpackChunkName: "[request]" */ `./${api}/Index.vue`)

const requireComponent = require.context('./', true, /.*?Index\.vue$/)

const components = requireComponent
  .keys()
  .map(fileName => fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('/')[0])

export default components.map(name => ({
  name: `api-${name}`,
  path: `s-${name.toLowerCase()}`,
  component: load(name)
}))
