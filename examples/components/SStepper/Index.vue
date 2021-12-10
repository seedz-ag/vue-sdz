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
      items: [
        { label: 'item 1', icon: 'sdz-dollar-sign', disabled: false },
        { label: 'item 2', icon: 'sdz-link', disabled: false },
        { label: 'item 3', icon: 'sdz-shield', disabled: false },
        { label: 'item 4', icon: 'sdz-shield-off', disabled: true },
        { label: 'item 5', icon: 'sdz-cart', disabled: false }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-stepper-example {

}
</style>
