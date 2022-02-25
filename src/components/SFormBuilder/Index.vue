<template>
  <form class="s-form-builder" autocomplete="off" role="presentation" @click.prevent>
    <div v-for="(field, index) in fields" :key="index" class="row">
      <template v-if="Array.isArray(field)">
        <template v-for="(groupField, groupIndex) in field">
          <field
            :key="groupIndex"
            :$v="$v"
            :field="groupField"
            :value="form[groupField.name]"

            @input="value => emit(groupField.name, value)"
          />
        </template>
      </template>

      <template v-else>
        <field
          :$v="$v"
          :field="field"
          :value="form[field.name]"

          @input="value => emit(field.name, value)"
        />
      </template>
    </div>

    <slot name="actions">
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

  data () {
    return {
      form: {}
    }
  },

  created () {
    this.form = transformBy(this.fields, 'value', false)
  },

  validations () {
    return {
      form: transformBy(this.fields, 'validate', true)
    }
  },

  methods: {
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

    & > .s-select { margin-top: 0; }

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
