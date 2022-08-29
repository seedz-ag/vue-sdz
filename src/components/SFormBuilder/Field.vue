<template>
  <component
    :is="field.component"
    :items="field.items"
    :validation="validationMsg"
    :style="{ 'width': field.width || '100%' }"
    :value="form[field.name]"

    v-bind="bindings"
    v-on="listeners"
  />
</template>

<script>
import rules from './rules.js'
import customMessages from './customMessages.js'

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

  watch: {
    hasCustomError: {
      handler () {
        this.$emit('sync:error', { [this.field.name]: this.hasCustomError ? this.customErrorMsg : '' })
      }
    }
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
          this.$listeners.input(value),
          this.field?.onInput?.call(this, { form: this.form, field: this.field })
        }
      }
    },

    infoField () {
      return this.$v?.form?.[this.field?.name]
    },

    errorMsg () {
      const getRule = rule => this.infoField?.[rule]
      const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      return rules.map(getMessage).filter(Boolean)
    },

    customErrorMsg () {
      return this.infoField?.$anyDirty && !this.field?.customValidate?.sameAs ? [customMessages.sameAs] : []
    },

    hasCustomValidation () {
      return !!(Object.keys(this.field?.customValidate || {}).length)
    },

    hasCustomError () {
      return !!(this.hasCustomValidation && this.customErrorMsg.length && !this.errorMsg.length)
    },

    validationMsg () {
      return this.hasCustomError ? this.customErrorMsg : this.errorMsg
    }
  }
}
</script>
