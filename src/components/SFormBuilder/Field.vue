<template>
  <component
    :is="field.component"
    :items="field.items"
    :validation="getValidation(field.name)"

    v-bind="bindings(field)"
    v-on="$listeners"
  />
</template>

<script>
import rules from './rules.js'

export default {
  name: 'SFormBuilderField',

  components: {
    SInput: () => import('../SInput/Index.vue').then(d => d.default),
    SSelect: () => import('../SSelect/Index.vue').then(d => d.default),
    SSwitch: () => import('../SSwitch/Index.vue').then(d => d.default),
    SCheckbox: () => import('../SCheckbox/Index.vue').then(d => d.default),
    SRadiobox: () => import('../SRadiobox/Index.vue').then(d => d.default)
  },

  props: {
    $v: Object,
    field: [Array, Object]
  },

  methods: {
    bindings (field) {
      const { value, ...propsField } = field

      return { ...this.$attrs, ...propsField }
    },

    getValidation (field) {

      const infoField = this.$v.form?.[field]

      console.log(infoField)
      console.log(infoField?.$error)

      if (!infoField?.required) return ['campo obrigatório.']
      if (!infoField?.minLength) return ['campo pequeno.']


      // const infoField = this.$v.form?.[field]

      // const getRule = rule => infoField?.[rule]
      // const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      // return rules.map(getMessage).filter(Boolean)
    }
  }
}
</script>
