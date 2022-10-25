// import * as mixins from './mixins/index.js'
// import * as SComponents from './components/index.js'
// // remove components/index and replace to import.meta.glob approach

// const install = Vue => {
//   Object
//     .values(SComponents)
//     .forEach(component => Vue.use(component))
// }

// if (typeof window !== 'undefined' && window.Vue) install(window.Vue)


// export default {
//   ...mixins,
//   ...install
// }

// Register components individually
export { default as SAvatar } from './components/SAvatar/Index.vue'
export { default as SAlert } from './components/SAlert/Index.vue'
export { default as SButton } from './components/SButton/Index.vue'
export { default as SBadge } from './components/SBadge/Index.vue'
export { default as SCard } from './components/SCard/Index.vue'
export { default as SCarousel } from './components/SCarousel/Index.vue'
export { default as SContainer } from './components/SContainer/Index.vue'
export { default as SCheckbox } from './components/SCheckbox/Index.vue'
export { default as SCollapsible } from './components/SCollapsible/Index.vue'
export { default as SDatePicker } from './components/SDatePicker/Index.vue'
export { default as SFeedbacks } from './components/SFeedbacks/Index.vue'
export { default as SFormBuilder } from './components/SFormBuilder/Index.vue'
export { default as SImage } from './components/SImage/Index.vue'
export { default as SIcon } from './components/SIcon/Index.vue'
export { default as SInput } from './components/SInput/Index.vue'
export { default as SInputContainer } from './components/SInputContainer/Index.vue'
export { default as SLink } from './components/SLink/Index.vue'
export { default as SHeader } from './components/SHeader/Index.vue'
export { default as SLoader } from './components/SLoader/Index.vue'
export { default as SModal } from './components/SModal/Index.vue'
export { default as SPopover } from './components/SPopover/Index.vue'
export { default as SOverlay } from './components/SOverlay/Index.vue'
export { default as SPagination } from './components/SPagination/Index.vue'
export { default as SPin } from './components/SPin/Index.vue'
export { default as SSelect } from './components/SSelect/Index.vue'
export { default as SShadowed } from './components/SShadowed/Index.vue'
export { default as SSidebar } from './components/SSidebar/Index.vue'
export { default as SSwitch } from './components/SSwitch/Index.vue'
export { default as STable } from './components/STable/Index.vue'
export { default as STabber } from './components/STabber/Index.vue'
export { default as SSkeleton } from './components/SSkeleton/Index.vue'
export { default as SStepper } from './components/SStepper/Index.vue'
export { default as SSearch } from './components/SSearch/Index.vue'
export { default as SDrawer } from './components/SDrawer/Index.vue'
export { default as SRadioGroup } from './components/SRadioGroup/Index.vue'

export { default as VueCoeFeedback } from 'vue-coe-feedback'

export { default as responsive } from './mixins/responsive.js'
export { default as setupResponsive } from './mixins/setupResponsive.js'
