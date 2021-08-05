<template>
  <div id="app">
    <div class="menu">
      <div
        :key="component"
        v-for="component in components"
        @click="activeComponent = component"
      >
        {{ component }}
      </div>
    </div>

    <component :is="activeComponent" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const SCard = defineAsyncComponent(() => import('../src/components/SCard/Index.vue'))
const SModal = defineAsyncComponent(() => import('../src/components/SModal/Index.vue'))

export default {
  name: 'Examples',

  components: {
    SCard,
    SModal
  },

  data () {
    return {
      activeComponent: ''
    }
  },

  computed: {
    components () {
      return Object.keys(this.$options.components)
    }
  }
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
