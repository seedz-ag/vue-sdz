<template>
  <div class="s-stepper-example">
    <s-stepper :step="activeStep" :items="items" @select="newStep => activeStep = newStep" />
  </div>
</template>

<script>
import SStepper from '../../../src/components/SStepper/Index.vue'

export default {
  components: { SStepper },

  data () {
    return {
      activeStep: 2,
      items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
    }
  }
}
</script>

<style lang="scss">
.s-stepper-example {

}
</style>
