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
          icon: 'sdz-star',
          child: [
            { name: 'home', redirect: '/vue-sdz/getting-started' }
          ]
        },
        {
          name: 'Styles',
          icon: 'sdz-search',
          child: [
            { name: 'Colors', redirect: '/vue-sdz/styles/palettes' }
          ]
        },
        {
          name: 'Content',
          icon: 'sdz-clock',
          child: [
            { name: 'table', redirect: '/vue-sdz/components/table' },
            { name: 'shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'image', redirect: '/vue-sdz/components/image' }
          ]
        },
        {
          name: 'Forms',
          icon: 'xxx',
          child: [
            { name: 'input', redirect: '/vue-sdz/components/input' },
            { name: 'button', redirect: '/vue-sdz/components/button' },
            { name: 'select', redirect: '/vue-sdz/components/select' },
            { name: 'checkbox', redirect: '/vue-sdz/components/checkbox' }
          ]
        },
        {
          name: 'Components',
          icon: 'xxx',
          child: [
            { name: 'alert', redirect: '/vue-sdz/components/alert' },
            { name: 'card', redirect: '/vue-sdz/components/card' },
            { name: 'carousel', redirect: '/vue-sdz/components/carousel' },
            { name: 'loader', redirect: '/vue-sdz/components/loader' },
            { name: 'modal', redirect: '/vue-sdz/components/modal' },
            { name: 'popover', redirect: '/vue-sdz/components/popover' },
            { name: 'feedbacks', redirect: '/vue-sdz/components/feedbacks' },
            { name: 'collapse', redirect: '/vue-sdz/components/collapsible' },
            { name: 'tabber', redirect: '/vue-sdz/components/tabber' }
          ]
        },
        {
          name: 'Extented',
          icon: 'xxx',
          child: [
            { name: 'icon', redirect: '/vue-sdz/components/icon' }
          ]
        },
        {
          name: 'api',
          icon: 'sdz-mail', 
          child: [
            { name: 'alert', redirect: '/vue-sdz/api/alert' },
            { name: 'button', redirect: '/vue-sdz/api/button' },
            { name: 'card', redirect: '/vue-sdz/api/card' },
            { name: 'checkbox', redirect: '/vue-sdz/api/checkbox' },
            { name: 'carousel', redirect: '/vue-sdz/api/carousel' },
            { name: 'table', redirect: '/vue-sdz/api/table' },
            { name: 'shadowed', redirect: '/vue-sdz/api/shadowed' },
            { name: 'icon', redirect: '/vue-sdz/api/icon' },
            { name: 'image', redirect: '/vue-sdz/api/image' },
            { name: 'loader', redirect: '/vue-sdz/api/loader' },
            { name: 'modal', redirect: '/vue-sdz/api/modal' },
            { name: 'popover', redirect: '/vue-sdz/api/popover' },
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

.main{
  width: 70%;
  margin: 30px auto;
}

.h1{
  font-size: 1.80rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.h2{
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.main-text p{
    line-height: 2;
}

.flex-inline{
  display: flex;
  flex-direction: row;
}

.flex-line{
  display: flex;
  flex-direction: column;
}

.flex-center{
  // align-items: center;
  justify-content: center;
}
</style>
