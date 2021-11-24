<template>
  <div class="s-loader-example flex-line">
    <h1 class="h1">Loader</h1>
    <div class="box">
      <s-loader />
    </div>
  </div>
</template>

<script>
import SLoader from '../../../src/components/SLoader/Index.vue'

export default {
  components: { SLoader }
}
</script>

<style lang="scss">
.s-loader-example {
  display: flex;
  justify-content: center;
}
.box{width:100%;}
</style>
