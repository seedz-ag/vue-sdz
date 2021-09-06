<template>
  <div id="app">
    <div class="menu">
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
export default {
  name: 'Examples',

  computed: {
    components () {
      return ['components', 'api']
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
