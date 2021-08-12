import * as SComponents from './components/index.js'

const install = Vue => {
  Object
    .values(SComponents)
    .forEach(component => Vue.use(component))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default install

// Register components individually
export { default as SCard } from './components/SCard/Index.vue'
export { default as SButton } from './components/SButton/Index.vue'
export { default as SSidebar } from './components/SSidebar/Index.vue'

// export { default as SRow } from './layouts/SRow/index'
// export { default as SCol } from './layouts/SCol/index'
