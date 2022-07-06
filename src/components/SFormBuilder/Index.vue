<template>
  <form class="s-form-builder" autocomplete="off" role="presentation" @click.prevent>
    <div v-for="(field, index) in fields" :key="index" class="row">
      <template v-if="Array.isArray(field)">
        <template v-for="(groupField, groupIndex) in field">
          <field
            :key="groupIndex"
            :$v="$v"
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
    }
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
    return {
      form: transformBy(this.fields, 'validate', true)
    }
  },

  methods: {
    setForm () {
      this.form = transformBy(this.fields, 'value', false)
    },

    getField (field) {
      return {
        ...field,
        onClick: () => field?.onClick.call(this),
        onInput: () => field?.onInput?.({ form: this.form, field })
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
