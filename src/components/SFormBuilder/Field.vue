<template>
  <component
    :is="field.component"
    :items="field.items"
    :validation="getValidation(field.name)"
    :style="{ 'width': field.width || '100%' }"

    v-bind="bindings(field)"
    v-on="$listeners"
  />
</template>

<script>
import rules from './rules.js'

export default {
  name: 'SFormBuilderField',

  // .then(...) motivation:
  // https://github.com/vuejs/vue/issues/11656
  components: {
    SInput: () => import('../SInput/Index.vue').then(d => d.default),
    SSelect: () => import('../SSelect/Index.vue').then(d => d.default),
    SSwitch: () => import('../SSwitch/Index.vue').then(d => d.default),
    SButton: () => import('../SButton/Index.vue').then(d => d.default),
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

      const getRule = rule => infoField?.[rule]
      const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      return rules.map(getMessage).filter(Boolean)
    }
  }
}
</script>
