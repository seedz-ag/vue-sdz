<template>
  <s-collapsible class="s-header" no-header v-bind="$attrs" v-on="$listeners">
    <slot />
  </s-collapsible>
</template>

<script>
import SCollapsible from '../../../src/components/SCollapsible/Index.vue'

export default {
  name: 'SHeader',

  components: { SCollapsible }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-header {
  top: 0;
  width: 100%;
  position: fixed;
  z-index: $z-index-1;
}
</style>
