<template>
  <div class="s-grid-example">
    <s-title size="title-1">Grid</s-title>

    <p class="subtitle">
      O grid que usamos hoje pode ser considerado um grid híbrido. Ele é fluído nos  breakpoints até 1440px, onde essa passa a ser ter largura fixa. Essa definição é para garantir que a responsividade dos componentes em telas muito grandes não se torne um problema ou minimamente difícil de se administrar.
    </p>

    <s-box class="flex-inline flex-center">
      <s-grid size="col-1" />
      <s-grid size="col-1" />
    </s-box>
  </div>
</template>

<script>
import SGrid from '../../../src/components/SGrid/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SGrid, SBox, STitle }
}
</script>

<style lang="scss">

</style>
