// import './styles/index.scss'
import * as components from './components/index.js'

const install = Vue => Object
  .values(components)
  .forEach(component => Vue.use(component))

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default install

export { default as SCard } from './components/SCard/index'
export { default as SModal } from './components/SModal/index'

// export { default as SRow } from './layouts/SRow/'
// export { default as SCol } from './layouts/SCol/'
