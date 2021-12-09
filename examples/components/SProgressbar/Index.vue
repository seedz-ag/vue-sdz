<template>
  <div class="s-progressbar-example flex-line">
    <s-title class="h1" title="Progress Bar" />

    <p class="subtitle">
      Progrees Bar Indica um tempo de espera por ações - dentro de um fluxo de experiência ou dados de carregamento.
    </p>

    <s-box class="flex-inline flex-center">
      <s-progressbar percent="width: 1%" />
      <s-progressbar percent="width: 50%" />
      <s-progressbar percent="width: 100%" />
    </s-box>
  </div>
</template>

<script>
import SProgressbar from '../../../src/components/SProgressbar/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SProgressbar, SBox, STitle }
}
</script>

<style lang="scss">
.s-progressbar-example {
  display: flex;
  justify-content: center;

  & > .s-box{
    & > .s-progressbar{
      margin-bottom: 15px;
    }
  }

}
</style>
