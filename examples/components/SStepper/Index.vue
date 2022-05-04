<template>
  <div class="s-stepper-example">
    <s-title size="title-1">Progress Stepper</s-title>

    <p class="subtitle">
      Progrees Steps no Design System são usadas para denotar o progresso em estágios de uma ação ou atividade. Esse tipo de lista fornece ao usuário uma noção do progresso e das etapas restantes.
    </p>

    <s-box>
      <s-stepper :step="activeStep" :items="items" @select="newStep => activeStep = newStep" />
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SStepper from '../../../src/components/SStepper/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SStepper, SBox, STitle, PreCode },

  data () {
    return {
      code: '<s-stepper :step="activeStep" :items="items" @select="newStep => activeStep = newStep" />',
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
  .s-box{
    padding: 50px 20px;
  }
}
</style>
