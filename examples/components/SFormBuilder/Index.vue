<template>
  <div class="s-form-builder-example">
    <s-form-builder :fields="fields" @synchronize="synchronize">
      <div class="actions" slot="actions" slot-scope="{ $v }">
        <s-button @click="submit($v)">Salvar</s-button>
      </div>
    </s-form-builder>
  </div>
</template>

<script>
import fields from './fields.js'
import SButton from '../../../src/components/SButton/Index.vue'
import SFormBuilder from '../../../src/components/SFormBuilder/Index.vue'

export default {
  components: { SFormBuilder, SButton },

  data () {
    return {
      fields: fields
    }
  },

  methods: {
    synchronize (data) {
      console.log(data)
    },

    async submit ($v) {
      $v.$touch()

      if ($v.$error) return this.$emit('errors', this.form)

      this.$emit('submit', this.form)
    }
  }
}
</script>

<style lang="scss">
.s-form-builder-example {
}
</style>
