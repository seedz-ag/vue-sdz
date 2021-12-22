<template>
  <div class="s-progressbar-example flex-line">
    <s-title class="h1" title="Progress Bar" />

    <p class="subtitle">
      Progrees Bar Indica um tempo de espera por ações - dentro de um fluxo de experiência ou dados de carregamento.
    </p>

    <s-box class="flex-inline flex-center">
      <s-progressbar :value="progress1" />
      <s-progressbar :value="progress2" />
      <s-progressbar :value="progress3" />
    </s-box>
  </div>
</template>

<script>
import SProgressbar from '../../../src/components/SProgressbar/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SProgressbar, SBox, STitle },

  data(){
    return {
      progress1: 0,
      progress2: 0,
      progress3: 0
    }
  },

  created(){
    setTimeout(() => this.progress1 = 5, 300)
    setTimeout(() => this.progress2 = 50, 600)
    setTimeout(() => this.progress3 = 100, 900)
  }
}
</script>

<style lang="scss">
.s-progressbar-example {
  display: flex;
  justify-content: center;

  & > .s-box{
    & > .s-progress-bar{
      margin-bottom: 15px;
    }
  }

}
</style>
