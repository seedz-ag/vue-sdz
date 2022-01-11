<template>
  <div class="s-skeleton-example flex-line">
    <s-title class="h1" title="Skeleton" />

    <p class="subtitle">
      Skeleton é uma versão em branco de um componente que ainda não foi carregado. Ao contrário dos Loaders, uma tela de esqueleto informa visualmente aos usuários o que esperar e faz com que eles se concentrem no progresso, em vez do tempo de espera.
    </p>

    <s-box class="flex-inline">
      <s-skeleton :size="50" :rows="7" />
      <s-skeleton :size="45" />
      <s-skeleton :size="30" />
      <s-skeleton :size="10" />
     
      <s-skeleton :size="7.8" :rows="3" round />
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SSkeleton from '../../../src/components/SSkeleton/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SSkeleton, SBox, STitle, PreCode },

  data(){
    return {
      code:`
      <s-skeleton :size="50" :rows="7" />
      <s-skeleton :size="45" />
      <s-skeleton :size="30" />
      <s-skeleton :size="10" />
     
      <s-skeleton :size="7.8" :rows="3" round />`
    }
  }
}
</script>

<style lang="scss">
.s-skeleton-example {
  display: flex;
  justify-content: center;

  & > .s-box{
    & > .s-progress-bar{
      margin-bottom: 15px;
    }
  }

}
</style>
