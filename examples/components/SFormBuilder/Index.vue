<template>
  <div class="s-form-builder-example">
    <s-form-builder :fields="fields" @synchronize="synchronize" />
  </div>
</template>

<script>
import fields from './fields.js'
import SFormBuilder from '../../../src/components/SFormBuilder/Index.vue'

export default {
  components: { SFormBuilder },

  data () {
    return {
      fields: fields
    }
  },

  methods: {
    synchronize (data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.s-form-builder-example {
}
</style>
