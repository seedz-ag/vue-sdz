<template>
  <div class="main-example">
    <s-container>
      <router-view />
    </s-container>
  </div>
</template>

<script>
import SContainer from '../../src/components/SContainer/Index.vue'

export default {
  name: 'Components',

  components: { SContainer }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.main-example {
  width: 100%;
  // height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  margin-top: -20px;
  padding-top: 20px;

  display: flex;
  justify-content: center;

  & > .s-container { margin-bottom: 100px; }
}
</style>
