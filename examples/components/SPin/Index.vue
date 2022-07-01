<template>
  <div class="s-pin-example flex-line">
    <s-title size="title-1">Pin</s-title>

    <p class="subtitle">
      Pin description
    </p>

    <s-box>
      <s-pin />
      <s-pin :size="6" />
      <s-pin has-error />
    </s-box>
  </div>
</template>

<script>
import SPin from '../../../src/components/SPin/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SPin, SBox, STitle }
}
</script>

<style lang="scss">
.s-pin-example {
  display: flex;
  justify-content: center;
}
</style>
