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
          redirect: '/vue-sdz/getting-started'
        },
        {
          name: 'components',
          icon: 'xxx',
          child: [
            { name: 'button', redirect: '/vue-sdz/components/button' },
            { name: 'card', redirect: '/vue-sdz/components/card' },
            { name: 'checkbox', redirect: '/vue-sdz/components/checkbox' },
            { name: 'table', redirect: '/vue-sdz/components/table' },
            { name: 'shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'icon', redirect: '/vue-sdz/components/icon' },
            { name: 'modal', redirect: '/vue-sdz/components/modal' },
            { name: 'feedbacks', redirect: '/vue-sdz/components/feedbacks' },
            { name: 'select', redirect: '/vue-sdz/components/select' },
            { name: 'collapsible', redirect: '/vue-sdz/components/collapsible' },
            { name: 'input', redirect: '/vue-sdz/components/input' }
          ]
        },
        {
          name: 'api',
          icon: 'yyy',
          child: [
            { name: 'button', redirect: '/vue-sdz/api/button' },
            { name: 'card', redirect: '/vue-sdz/api/card' },
            { name: 'checkbox', redirect: '/vue-sdz/api/checkbox' },
            { name: 'table', redirect: '/vue-sdz/api/table' },
            { name: 'shadowed', redirect: '/vue-sdz/api/shadowed' },
            { name: 'icon', redirect: '/vue-sdz/api/icon' },
            { name: 'modal', redirect: '/vue-sdz/api/modal' },
            { name: 'feedbacks', redirect: '/vue-sdz/api/feedbacks' },
            { name: 'select', redirect: '/vue-sdz/api/select' },
            { name: 'collapsible', redirect: '/vue-sdz/api/collapsible' },
            { name: 'input', redirect: '/vue-sdz/api/input' }
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
#app { display: flex; }

.container {
  width: 100%;
  height: 100%;

  padding: 50px;
  margin: 0 auto;

  overflow-y: auto;
  overflow-x: hidden;


}
</style>
