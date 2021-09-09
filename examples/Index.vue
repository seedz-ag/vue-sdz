<template>
  <div id="app">
    <!-- <div class="menu">
      <router-link
        v-for="name in components"
        :key="name"
        :to="{ name }"
      >
        {{ name }}
      </router-link>
    </div> -->

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
          name: 'components',
          icon: 'xxx',
          child: [
            { name: 'button', redirect: '/components/sbutton' },
            { name: 'card', redirect: '/components/scard' }
          ]
        },
        {
          name: 'api',
          icon: 'yyy',
          child: [
            { name: 'button', redirect: '/api/sbutton' },
            { name: 'card', redirect: '/api/scard' }
          ]
        }
      ]
    }
  },

  computed: {
    components () {
      return ['components', 'api']
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
