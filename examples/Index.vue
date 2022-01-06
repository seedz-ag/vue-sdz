<template>
  <div id="app">
    <s-header :class="classes" is-opened :height="isOpened ? 100 : 60">
      <div class="logo">
        <img src="../src/assets/images/logo.svg">
      </div>

      <div class="search">
        <s-input
          round
          icon="sdz-search"
          :value="inputSearch"
          :placeholder="'Search'"
          @input="value => inputSearch = value"
        />
      </div>

      <div class="icons">
        <s-icon icon="sdz-star" @click.native="documentacao" />

        <s-icon icon="sdz-user" @click.native="example1" />

        <s-icon icon="sdz-bell" @click.native="example2" />
      </div>
    </s-header>

    <!-- :style="{ 'margin-top': isOpened ? 0 : '100px' }" -->
    <div class="content">
      <s-sidebar :items="items" @redirect="onRedirect" />

      <router-view />
    </div>
  </div>
</template>

<script>
import SSidebar from '../src/components/SSidebar/Index.vue'
import SIcon from '../src/components/SIcon/Index.vue'
import SInput from '../src/components/SInput/Index.vue'
import SHeader from '../src/components/SHeader/Index.vue'

export default {
  name: 'Examples',

  components: { SSidebar, SIcon, SInput, SHeader },

  data () {
    return {
      isOpened: true,

      inputSearch: '',

      items: [
        {
          name: 'Getting Started',
          icon: 'sdz-star',
          child: [
            { name: 'home', redirect: '/vue-sdz/commons/getting-started' }
          ]
        },
        {
          name: 'Styles',
          icon: 'sdz-painting-roller',
          child: [
            { name: 'Colors', redirect: '/vue-sdz/styles/palettes' }
          ]
        },
        {
          name: 'Content',
          icon: 'sdz-archive',
          child: [
            { name: 'grid', redirect: '/vue-sdz/components/grid' },
            { name: 'image', redirect: '/vue-sdz/components/image' },
            { name: 'shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'table', redirect: '/vue-sdz/components/table' }
          ]
        },
        {
          name: 'Forms',
          icon: 'sdz-file-text',
          child: [
            { name: 'input', redirect: '/vue-sdz/components/input' },
            { name: 'text area', redirect: '/vue-sdz/components/textarea' },
            { name: 'password', redirect: '/vue-sdz/components/password' },
            { name: 'search', redirect: '/vue-sdz/components/search' },
            { name: 'select', redirect: '/vue-sdz/components/select' },
            { name: 'checkbox', redirect: '/vue-sdz/components/checkbox' },
            { name: 'radiobox', redirect: '/vue-sdz/components/radiobox' },
            { name: 'switch', redirect: '/vue-sdz/components/switch' },
            { name: 'button', redirect: '/vue-sdz/components/button' },
            { name: 'link', redirect: '/vue-sdz/components/link' },
          ]
        },
        {
          name: 'Components',
          icon: 'sdz-box',
          child: [
            { name: 'alert', redirect: '/vue-sdz/components/alert' },
            { name: 'card', redirect: '/vue-sdz/components/card' },
            { name: 'carousel', redirect: '/vue-sdz/components/carousel' },
            { name: 'spinner', redirect: '/vue-sdz/components/loader' },
            { name: 'modal', redirect: '/vue-sdz/components/modal' },
            { name: 'popover', redirect: '/vue-sdz/components/popover' },
            { name: 'feedbacks', redirect: '/vue-sdz/components/feedbacks' },
            { name: 'collapse', redirect: '/vue-sdz/components/collapsible' },
            { name: 'tabber', redirect: '/vue-sdz/components/tabber' },
            { name: 'progress bar', redirect: '/vue-sdz/components/progressbar' },
            { name: 'breadcrumb', redirect: '/vue-sdz/components/breadcrumb' },
            { name: 'stepper', redirect: '/vue-sdz/components/stepper' },
            { name: 'pagination', redirect: '/vue-sdz/components/pagination' },
            { name: 'avatar', redirect: '/vue-sdz/components/avatar' },
            { name: 'badge', redirect: '/vue-sdz/components/badge' },
          ]
        },
        {
          name: 'Extented',
          icon: 'sdz-globe',
          child: [
            { name: 'icon', redirect: '/vue-sdz/components/icon' }
          ]
        }
      ]
    }
  },

  created () {
    document.addEventListener('wheel', this.headerHandler)
  },

  computed: {
    classes () {
      return ['header', { '--is-opened': this.isOpened }]
    }
  },

  methods: {
    headerHandler ({ wheelDelta }) {
      this.isOpened = wheelDelta > 0
    },

    onRedirect (link) {
      if (!link || link === this.$route.path) return

      this.$router.push(link)
    },

    documentacao () {
      window.open('https://github.com/seedz-ag/vue-sdz')
    }
  },

  beforeDestroy () {
    document.removeEventListener('wheel', this.headerHandler)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

#app {
  display: flex;
  flex-direction: column;

  & > .header { transition: height .6s ease-in-out; }

  &:not(.--is-opened) {}

  & > .content {
    height: 100%;
    display: flex;
    // transition: margin-top .6s ease;
  }
}

.container {
  width: 100%;
  height: 100%;

  padding: 50px;
  margin: 0 auto;

  overflow-y: auto;
  overflow-x: hidden;
}

.subtitle{
  font-size: 1rem;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  line-height: 1.5;
}

.flex-inline{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-line{
  display: flex;
  flex-direction: column;
}

.flex-center{
  justify-content: center;
}
</style>
