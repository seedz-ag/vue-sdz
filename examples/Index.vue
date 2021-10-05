<template>
  <div id="app">
    <s-sidebar :items="items" @redirect="onRedirect" />

    <router-view />
  </div>
</template>

<script>
import SSidebar from '../src/components/SSidebar/Index.vue'

export default {
  name: 'Examples',

  components: { SSidebar },

  data () {
    return {
      items: [
        {
          name: 'Getting Started',
          icon: 'aaa',
          redirect: '/getting-started'
        },
        {
          name: 'components',
          icon: 'xxx',
          child: [
            { name: 'button', redirect: '/vue-sdz/components/button' },
            { name: 'card', redirect: '/vue-sdz/components/card' },
            { name: 'table', redirect: '/vue-sdz/components/table' },
            { name: 'shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'icon', redirect: '/vue-sdz/components/icon' },
            { name: 'modal', redirect: '/vue-sdz/components/modal' },
            { name: 'input', redirect: '/vue-sdz/components/input' }
          ]
        },
        {
          name: 'api',
          icon: 'yyy',
          child: [
            { name: 'button', redirect: '/api/button' },
            { name: 'card', redirect: '/api/card' },
            { name: 'table', redirect: '/api/table' },
            { name: 'shadowed', redirect: '/api/shadowed' },
            { name: 'icon', redirect: '/api/icon' },
            { name: 'modal', redirect: '/api/modal' },
            { name: 'input', redirect: '/api/input' }
          ]
        }
      ]
    }
  },

  methods: {
    onRedirect (link) {
      if (!link || link === this.$route.path) return

      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  min-width: 100%;
  min-height: 100%;

  width: 100%;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app { display: flex; }
</style>
