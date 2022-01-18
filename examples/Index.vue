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
            { name: 'Home', redirect: '/vue-sdz/commons/getting-started' }
          ]
        },
        {
          name: 'Styles',
          icon: 'sdz-painting-roller',
          child: [
            { name: 'Breakpoints', redirect: '/vue-sdz/styles/breakpoints' },
            { name: 'Colors', redirect: '/vue-sdz/styles/palettes' },
          ]
        },
        {
          name: 'Content',
          icon: 'sdz-archive',
          child: [
            { name: 'Grid', redirect: '/vue-sdz/components/grid' },
            { name: 'Image', redirect: '/vue-sdz/components/image' },
            { name: 'Shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'Table', redirect: '/vue-sdz/components/table' }
          ]
        },
        {
          name: 'Forms',
          icon: 'sdz-file-text',
          child: [
            { name: 'Button', redirect: '/vue-sdz/components/button' },
            { name: 'Checkbox', redirect: '/vue-sdz/components/checkbox' },
            { name: 'Input', redirect: '/vue-sdz/components/input' },
            { name: 'Link', redirect: '/vue-sdz/components/link' },
            { name: 'Password', redirect: '/vue-sdz/components/password' },
            { name: 'Radiobox', redirect: '/vue-sdz/components/radiobox' },
            { name: 'Search', redirect: '/vue-sdz/components/search' },
            { name: 'Select', redirect: '/vue-sdz/components/select' },
            { name: 'Switch', redirect: '/vue-sdz/components/switch' },
            { name: 'Text area', redirect: '/vue-sdz/components/textarea' },
          ]
        },
        {
          name: 'Components',
          icon: 'sdz-box',
          child: [
            { name: 'Alert', redirect: '/vue-sdz/components/alert' },
            { name: 'Avatar', redirect: '/vue-sdz/components/avatar' },
            { name: 'Badge', redirect: '/vue-sdz/components/badge' },
            { name: 'Breadcrumb', redirect: '/vue-sdz/components/breadcrumb' },
            { name: 'Card', redirect: '/vue-sdz/components/card' },
            { name: 'Carousel', redirect: '/vue-sdz/components/carousel' },
            { name: 'Collapse', redirect: '/vue-sdz/components/collapsible' },
            { name: 'Feedbacks', redirect: '/vue-sdz/components/feedbacks' },
            { name: 'Modal', redirect: '/vue-sdz/components/modal' },
            { name: 'Pagination', redirect: '/vue-sdz/components/pagination' },
            { name: 'Popover', redirect: '/vue-sdz/components/popover' },
            { name: 'Progress bar', redirect: '/vue-sdz/components/progressbar' },
            { name: 'Spinner', redirect: '/vue-sdz/components/loader' },
            { name: 'Stepper', redirect: '/vue-sdz/components/stepper' },
            { name: 'Tabber', redirect: '/vue-sdz/components/tabber' },
            { name: 'Skeleton', redirect: '/vue-sdz/components/skeleton' },
          ]
        },
        {
          name: 'Extented',
          icon: 'sdz-globe',
          child: [
            { name: 'Icon', redirect: '/vue-sdz/components/icon' }
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

  & > .header { transition: height .6s ease-in-out; z-index:10 }

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
  // margin: 0 auto;

  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: row;
  justify-content:center;
  & > div{
    max-width:800px;
  }
}

.subtitle{
  font-size: 1rem;
  line-height: 20px;
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
