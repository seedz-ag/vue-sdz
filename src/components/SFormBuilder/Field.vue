<template>
  <component
    :is="field.component"
    :items="field.items"
    :validation="getValidation(field.name)"
    :style="{ 'width': field.width || '100%' }"
    :value="form[field.name]"

    v-bind="bindings"
    v-on="listeners"
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
    form: Object,
    field: [Array, Object]
  },

  computed: {
    bindings () {
      const { value, ...propsField } = this.field

      return {
        ...this.$attrs,
        ...propsField,
        value: this.form[this.field.name]
      }
    },

    listeners () {
      return {
        ...this.$listeners,
        input: value => {
          this.field?.onInput()
          this.$listeners.input(value)
        }
      }
    }
  },

  methods: {
    getValidation (field) {
      const infoField = this.$v.form?.[field]

      const getRule = rule => infoField?.[rule]
      const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      return rules.map(getMessage).filter(Boolean)
    }
  }
}
</script>
