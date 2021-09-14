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
            { name: 'button', redirect: '/components/sbutton' },
            { name: 'card', redirect: '/components/scard' },
            { name: 'table', redirect: '/components/stable' },
            { name: 'shadowed', redirect: '/components/sshadowed' },
            { name: 'icon', redirect: '/components/sicon' }
          ]
        },
        {
          name: 'api',
          icon: 'yyy',
          child: [
            { name: 'button', redirect: '/api/sbutton' },
            { name: 'card', redirect: '/api/scard' },
            { name: 'table', redirect: '/api/stable' },
            { name: 'shadowed', redirect: '/api/sshadowed' },
            { name: 'icon', redirect: '/api/sicon' }
          ]
        }
      ]
    }
  },

  methods: {
    onRedirect (link) {
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
