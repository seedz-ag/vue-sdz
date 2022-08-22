<template>
  <div id="app">
    <s-header :class="classes" is-opened :height="isOpened ? 70 : 50">
      <div class="logo">
        <!-- <img src="../src/assets/images/logo.svg"> -->
      </div>

      <div class="search">
        <s-input
          round
          icon="carbon:search"
          :value="inputSearch"
          :placeholder="'Search'"
          @input="value => inputSearch = value"
        />
      </div>

      <div class="links">
        <s-button link @click.native="documentacao">Sobre</s-button>
        <s-button link @click.native="example1">Design Tokens</s-button>
        <s-button link @click.native="example2">Componentes</s-button>
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
import SInput from '../src/components/SInput/Index.vue'
import SHeader from '../src/components/SHeader/Index.vue'
import SButton from '../src/components/SButton/Index.vue'

export default {
  name: 'Examples',

  components: { SSidebar, SInput, SHeader, SButton },

  data () {
    return {
      isOpened: true,

      inputSearch: '',

      items: [
        {
          name: 'Getting Started',
          icon: 'akar-icons:star',
          redirect: '/vue-sdz/getting-started'
        },
        {
          name: 'Styles',
          icon: 'clarity:paint-roller-line',
          child: [
            { name: 'Breakpoints', redirect: '/vue-sdz/styles/breakpoints' },
            { name: 'Colors', redirect: '/vue-sdz/styles/palettes' },
            { name: 'Typography', redirect: '/vue-sdz/styles/typography' },
          ]
        },
        {
          name: 'Content',
          icon: 'bytesize:archive',
          child: [
            { name: 'Grid', redirect: '/vue-sdz/components/grid' },
            { name: 'Image', redirect: '/vue-sdz/components/image' },
            { name: 'Shadowed', redirect: '/vue-sdz/components/shadowed' },
            { name: 'Table', redirect: '/vue-sdz/components/table' }
          ]
        },
        {
          name: 'Forms',
          icon: 'ant-design:file-text-outlined',
          child: [
            { name: 'Button', redirect: '/vue-sdz/components/button' },
            { name: 'Checkbox', redirect: '/vue-sdz/components/checkbox' },
            { name: 'FormBuilder', redirect: '/vue-sdz/components/formbuilder' },
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
          icon: 'akar-icons:shipping-box-01',
          child: [
            { name: 'Alert', redirect: '/vue-sdz/components/alert' },
            { name: 'Avatar', redirect: '/vue-sdz/components/avatar' },
            { name: 'Badge', redirect: '/vue-sdz/components/badge' },
            { name: 'Breadcrumb', redirect: '/vue-sdz/components/breadcrumb' },
            { name: 'Card', redirect: '/vue-sdz/components/card' },
            { name: 'Carousel', redirect: '/vue-sdz/components/carousel' },
            { name: 'Collapse', redirect: '/vue-sdz/components/collapsible' },
            { name: 'Container', redirect: '/vue-sdz/components/container' },
            { name: 'Drawer', redirect: '/vue-sdz/components/drawer' },
            { name: 'Feedbacks', redirect: '/vue-sdz/components/feedbacks' },
            { name: 'Modal', redirect: '/vue-sdz/components/modal' },
            { name: 'Pagination', redirect: '/vue-sdz/components/pagination' },
            { name: 'Pin', redirect: '/vue-sdz/components/pin' },
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
          icon: 'akar-icons:globe',
          child: [
            { name: 'Icons', redirect: '/vue-sdz/components/icon' }
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

  overflow: hidden;

  & > .content {
    height: 100%;
    display: flex;
    padding-top: 70px;
    // transition: margin-top .6s ease;

     & > .s-sidebar {
      background: color(neutral, light);
      box-shadow: unset;
      overflow: auto;

      height: auto;
      margin-top: -20px;
      padding-top: 20px;

      & > .s-sidebar-item > .item > .content > .name, & > .s-sidebar-item > .item > .content > .icon {
        color: color(base, light);
        font-weight: bold;
      }

      & > .s-sidebar-item > .item.--is-active-item {
        background-color: color(neutral, light) !important;
      }

      & > .s-sidebar-item.--is-opened > .item.--is-active-item {
        background-color: color(neutral, light) !important;

        & > .s-collapsible > .wrapper > .item-child > .content > .name {
          color: color(neutral, base);
        }

        & > .item.--is-active-item {
          & > .content > .name {
            color: color(base, medium) !important;
          }

          & > .s-collapsible > .wrapper > .item-child > .content > .name {
            color: color(base, medium) !important;
          }
        }
      }
    }
  }

  & > .s-header{
    background: color(primary, base);

    & > .wrapper {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 15px;
      border-radius: 10px 10px;
      box-shadow: 0px 6px 17px -12px color(base, base);
      -webkit-box-shadow: 0px 6px 17px -12px color(base, base);

      & > .logo{
        max-width: 250px;
      }

      & > .search {
        width: 30%;

        & > .s-input > .s-icon{
          color: color(neutral, base);
        }

        & > .s-input > input {
          background: color(primary, light);
          border: 0px;
          color: color(neutral, base);
        }

        & > .s-input > input::-webkit-input-placeholder{
          color: color(neutral, base);
        }
      }

      & > .links {
        display: inline-flex;
        justify-content: flex-end!important;
        margin-left: 10%;

        & > s-button {
          color: white;
          cursor: pointer;

          & > .text { color: color(neutral, base) }
        }

        & > s-button:not(:last-child) {
          margin-right: 35px;
        }
      }
    }
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
