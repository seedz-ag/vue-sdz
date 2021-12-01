<template>
  <div class="s-loader-example flex-line">
    <h1 class="h1">Spinner</h1>
    <p class="subtitle">
      Spinners fornecem uma indicação visual de que uma ação está sendo processada, aguardando um curso de mudança ou um resultado.
    </p>
    <h2 class="h2">Quando usar</h2> 
    <p class="subtitle">
      Deve ser usado substituindo o label dos botões primários ao salvar ou validar dados. Ao salvar ou validar dados, o botão deve ficar no estado disabled e respeitando a cor neutra mais clara configurada neste documento.
    </p>
    <s-box class="flex-inline flex-center">
      <s-loader />
    </s-box>
  </div>
</template>

<script>
import SLoader from '../../../src/components/SLoader/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SLoader, SBox }
}
</script>

<style lang="scss">
.s-loader-example {
  display: flex;
  justify-content: center;
}
.s-box{width:100%;}

.h2{
  margin-top: 1rem;
}
</style>
