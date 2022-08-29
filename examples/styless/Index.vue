<template>
  <div class="styles-container">
    <s-container>
      <router-view />
    </s-container>
  </div>
</template>

<script>
import SContainer from '../../src/components/SContainer/Index.vue'

export default {
  name: 'Styles',

  components: { SContainer }

}
</script>
<style lang="scss">
.styles-container {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  margin-top: -20px;
  padding-top: 20px;
  margin-bottom: 80px;

  display: flex;
  justify-content: center;
}
</style>