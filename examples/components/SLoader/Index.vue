<template>
  <div class="s-loader-example flex-line">
    <s-title class="h1" title="Spinner" />
    <p class="subtitle">
      Spinners fornecem uma indicação visual de que uma ação está sendo processada, aguardando um curso de mudança ou um resultado.
    </p>

    <s-title class="h2" title="Quando usar" />

    <p class="subtitle">
      Deve ser usado substituindo o label dos botões primários ao salvar ou validar dados. Ao salvar ou validar dados, o botão deve ficar no estado disabled e respeitando a cor neutra mais clara configurada neste documento.
    </p>

    <source-code file="SLoaderExample" comp="SLoader" />

    <s-box class="flex-inline flex-center">
      <s-loader />
    </s-box>
  </div>
</template>

<script>
import SLoader from '../../../src/components/SLoader/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'

export default {
  components: { SLoader, SBox, STitle, SourceCode }
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
