<template>
  <div class="s-loader-example flex-line">
    <h1 class="h1">Loader</h1>
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
</style>
