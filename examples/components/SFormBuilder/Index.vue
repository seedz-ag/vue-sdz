<template>
  <div class="s-form-builder-example">
    <!--
      proposal

      :same-as="[
        { field: 'confirmPassword', equalTo: 'password' }
      ]" -->
    <s-form-builder
      :fields="fields"

      @synchronize="synchronize"
      @click:input-btn="onInputBtn"
    >
      <div class="actions" slot="actions" slot-scope="{ $v, $hasErrors, $resetData }">
        <s-button @click="submit($v, $hasErrors, $resetData)">Salvar</s-button>
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
      fields
    }
  },

  methods: {
    synchronize (data) {
      // console.log('synchronize', data)
    },

    onInputBtn () {
      console.log('onInputBtn')
    },

    async submit ($v, $hasErrors, $resetData) {
      $v.form.$touch()

      if ($v.form.$error || $hasErrors) return

      $resetData()
      this.$nextTick(() => { $v.$reset() })
    }
  }
}
</script>

<style lang="scss">
.s-form-builder-example {
}
</style>
