<template>
  <div class="s-progressbar-example flex-line">
    <s-title size="title-1">Progress Bar</s-title>


    <p class="subtitle">
      Progrees Bar Indica um tempo de espera por ações - dentro de um fluxo de experiência ou dados de carregamento.
    </p>

    <s-box class="flex-inline flex-center">
      <s-progressbar :value="progress1" />
      <s-progressbar :value="progress2" />
      <s-progressbar :value="progress3" />
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SProgressbar from '../../../src/components/SProgressbar/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SProgressbar, SBox, STitle, PreCode },

  data(){
    return {
      code:'<s-progressbar :value="45" />',
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
