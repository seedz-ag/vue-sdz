<template>
  <div>
    <s-title class="h1" title="Avatar" />

    <p class="subtitle">
      Avatar é uma representação em miniatura de uma pessoa usuária, para representar uma organização, use o componente "brand".
    </p>

    <s-title class="h2" title="Quando usar" />

    <p class="subtitle">
      Esse componente pode ser usado em lugares onde existe o upload de uma foto da pessoa usuária;
    </p>

    <p class="subtitle">
      Pode ser usado em contextos onde essa imagem é fixa, como em um card de depoimento.
    </p>

    <s-box class="flex-inline flex-center">
      <s-avatar :size="p" />
      <s-avatar />
      <s-avatar :size="g" />
    </s-box>
  </div>
</template>

<script>
import SAvatar from '../../../src/components/SAvatar/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SAvatar, SBox, STitle }
}
</script>

<style lang="scss">

</style>
