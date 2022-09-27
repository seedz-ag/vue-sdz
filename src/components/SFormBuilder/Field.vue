<template>
  <component
    :is="field.component"
    :items="field.items"
    :validation="errorMsg"
    :style="{ 'width': field.width || '100%' }"
    :value="form[field.name]"

    v-bind="bindings"
    v-on="listeners"
  />
</template>

<script>
import rules from './rules.js'
import customRules from './customRules.js'

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
    SRadioGroup: () => import('../SRadioGroup/Index.vue').then(d => d.default)
  },

  props: {
    $v: Object,
    form: Object,
    field: [Array, Object]
  },

  watch: {
    hasCustomError: {
      handler (v) {
        const msg = this.customErrorMsg?.[0] || ''

        this.$emit('sync:error', { [this.field.name]: msg })
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
          // this.field?.onClick?.call(this, { form: this.form, field: this.field })
          this.field?.onInput?.call(this, { form: this.form, field: this.field })
        }
      }
    },

    libErrorMsg () {
      const infoField = this.$v?.form?.[this.field?.name]
      const getRule = rule => infoField?.[rule]
      const getMessage = rule => getRule(rule)?.$invalid && getRule(rule)?.$message

      return rules.map(getMessage).filter(Boolean)
    },

    customErrorMsg () {
      const infoField = this.$v?.form?.[this.field?.name]

      if (!infoField?.$anyDirty) return []
      if (!this.field?.customValidate) return []

      return Object
        .entries(this.field?.customValidate)
        .map(([ fn, value ]) => customRules[fn](this.form, this.field, value))
        .filter(Boolean)
    },

    hasCustomError () {
      return !!this.customErrorMsg?.length
    },

    errorMsg () {
      if (this.libErrorMsg.length) return this.libErrorMsg

      return this.customErrorMsg
    }
  }
}
</script>
