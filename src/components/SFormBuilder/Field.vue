<template>
  <component
    :is="field.component"
    :validation="getValidation(field.name)"
    :items="field.items"

    v-bind="bindings(field)"
    v-on="$listeners"
  />
</template>

<script>
import rules from './rules.js'

export default {
  name: 'SFormBuilderField',

  components: {
    SInput: () => import('../SInput/Index.vue'),
    SSelect: () => import('../SSelect/Index.vue'),
    SSwitch: () => import('../SSwitch/Index.vue'),
    SCheckbox: () => import('../SCheckbox/Index.vue'),
    SRadiobox: () => import('../SRadiobox/Index.vue')
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

      const getRule = rule => infoField?.[rule]
      const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      return rules.map(getMessage).filter(Boolean)
    }
  }
}
</script>

<style>

</style>
