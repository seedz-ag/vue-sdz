<template>
  <div id="app">
    <div class="menu">
      <!-- <router-link :to="{ name: 'ComponentList' }">
        Componentes
      </router-link> -->

      <router-link
        :key="name"
        v-for="name in components"
        :to="{ name }"
      >
        {{ name }}
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
const requireComponent = require.context(
  // Look for files in the current directory
  '../src/components',
  // Do not look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /.*?Index\.vue$/
)

const componentList = requireComponent.keys().map(fileName => fileName
  .replace(/^\.\//, '')
  .replace(/\.\w+$/, '')
  .split('/')[0])

export default {
  name: 'Examples',

  computed: {
    components () {
      return componentList
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
