<template>
  <form class="s-form-builder" autocomplete="off" role="presentation" @click.prevent>
    <div v-for="(field, index) in fields" :key="index" class="row">
      <template v-if="Array.isArray(field)">
        <template v-for="(groupField, groupIndex) in field">
          <field
            :key="groupIndex"
            :$v="$v"
            :form="form"
            :field="getField(groupField)"
            :value="form[groupField.name]"

            v-on="$listeners"
            @input="value => emit(groupField.name, value)"
          />
        </template>
      </template>

      <template v-else>
        <field
          :$v="$v"
          :form="form"
          :field="getField(field)"
          :value="form[field.name]"

          v-on="$listeners"
          @input="value => emit(field.name, value)"
        />
      </template>
    </div>

    <slot name="actions" :$v="$v" :$form="form" :$resetData="setForm">
      <div class="actions">
        <s-button>Cancelar</s-button>

        <s-button @click="submit">Salvar</s-button>
      </div>
    </slot>
  </form>
</template>

<script>
import Field from './Field.vue'
import SButton from '../SButton/Index.vue'
import transformBy from './transformBy.js'

import useVuelidate from '@vuelidate/core'
// import { sameAs } from '@vuelidate/validators'

function initForm () {
  return {
    form: {}
  }
}

export default {
  name: 'SFormBuilder',

  components: { SButton, Field },

  props: {
    fields: {
      type: Array,
      required: true
    },

    // sameAs: Array
  },

  setup: () => ({ $v: useVuelidate({ $lazy: true, $autoDirty: true }) }),

  data: initForm,

  watch: {
    fields: {
      deep: true,
      immediate: true,
      handler: 'setForm'
    }
  },

  validations () {
    const validations = transformBy(this.fields, 'validate', true)

    // Proposal
    // --------------------------------------------------------------
    // const sameAsValidations = this.sameAs?.reduce((acc, item) => {
    //   return {
    //     ...acc,
    //     [item.field]: {
    //       ...validations[item.field],
    //       sameAs: sameAs(this.form[item.equalTo])
    //     }
    //   }
    // }, Object.create(null))

    return {
      form: {
        ...validations,
        // ...sameAsValidations
      }
    }
  },

  methods: {
    setForm () {
      this.form = transformBy(this.fields, 'value', false)
    },

    getField (field) {
      const sameAs = { sameAs: this.form[field.name] === this.form[field?.customValidate?.sameAs] }

      return {
        ...field,
        ...(field?.customValidate ? { customValidate: sameAs } : {}),
        onInput: () => field?.onInput?.apply(this, [{ form: this.form, field }]),
        onClick: () => field?.onClick?.apply(this, [{ form: this.form, field }])
      }
    },

    emit (field, value) {
      this.form[field] = value
      this.$emit('synchronize', { field, value })
    },

    async submit () {
      this.$v.$touch()

      if (this.$v.$error) return this.$emit('errors', this.form)

      this.$emit('submit', this.form)
    }
  }
}
</script>

<style lang="scss">
.s-form-builder {
  & > .row {
    display: flex;
    margin-bottom: 20px;

    & > .s-select {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    & > * {
      width: 100%;

      &:not(:last-child) { padding-right: 20px; }
    }
  }

  & > .actions {
    display: flex;
    justify-content: center;

    margin-top: 50px;

    & > .s-button { margin-right: 20px; }
  }
}
</style>
