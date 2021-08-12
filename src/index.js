// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '../../src/components',
  // Do not look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /.*?Index\.vue$/
)

// For each matching file name...
export const install = Vue => requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)

  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\//, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up and get name
    .split('/')[0]

  // Register component globally
  Vue && Vue.component(componentName, componentConfig.default || componentConfig)
})

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default install

// Register components individually
export { default as SCard } from '../../src/components/SCard/Index.vue'
export { default as SButton } from '../../src/components/SButton/Index.vue'
export { default as SSidebar } from '../../src/components/SSidebar/Index.vue'

// export { default as SRow } from './layouts/SRow/index'
// export { default as SCol } from './layouts/SCol/index'
