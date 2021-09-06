// const load = component => () => import(/* webpackChunkName: "[request]" */ `../../src/components/${component}/Index.vue`)
const load = component => () => import(/* webpackChunkName: "[request]" */ `./${component}/Index.vue`)

const requireComponent = require.context(
  // Look for files in the current directory
  './',
  // Do not look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /.*?Index\.vue$/
)

const components = requireComponent
  .keys()
  .map(fileName => fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('/')[0])

export default components.map(name => ({
  name: `component-${name}`,
  path: `s-${name.toLowerCase()}`,
  component: load(name)
}))
