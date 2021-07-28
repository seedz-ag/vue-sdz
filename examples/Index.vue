<template>
  <div id="app">
    teste

    <s-card />
    <s-modal />
  </div>
</template>

<script>
import SCard from '../src/components/SCard/Index.vue'
import SModal from '../src/components/SModal/Index.vue'

export default {
  name: 'Examples',

  components: { SCard, SModal }
}
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
