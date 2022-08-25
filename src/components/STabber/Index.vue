<template>
  <s-carousel
    class="s-tabber"

    :items="tabs"
    :controllers="true"
    :pagination="false"
    :is-loopable="false"

    v-bind="$attrs"
    v-on="$listeners"
  >
    <div
      slot-scope="{ item: tab }"
      :class="classes(tab)"
      @click="changeTab(tab)"
    >
      <s-icon v-if="tab.icon" :icon="tab.icon" size="20" class="icon" />
      <span class="text">{{ tab.name }}</span>
    </div>
  </s-carousel>
</template>

<script>
import SIcon from '../SIcon/Index.vue'
import SCarousel from '../SCarousel/Index.vue'

export default {
  name: 'STabber',

  components: { SCarousel, SIcon },

  props: {
    tabs: {
      type: Array,
      required: true
    },

    activeTab: String
  },

  methods: {
    classes (tab) {
      return ['tab', {
        '--is-disabled': tab.disabled,
        '--is-active': tab.value === this.activeTab
      }]
    },

    changeTab (tab) {
      if (!tab.disabled) this.$emit('change-tab', tab.value)
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-tabber {
  display: flex;
  align-items: flex-end;

  & > .controller {
    width: unset;
    height: unset;
    border: unset;

    &.next { right: -40px }
    &.previous { left: -40px; }
  }

  & > .wrapper > .inner > .carousel-item > .tab {
    width: 100%;
    padding-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    & > .icon {
      margin-right: 10px;
      transition: color .3s ease;
      color: color(primary, base);
    }

    & > .text {
      text-transform: uppercase;
      color: color(primary, base);
      transition: color .3s ease;
      font-size: $font-size-xxxs;
      user-select: none;
      -moz-osx-font-smoothing: grayscale;
    }

    &:hover { cursor: pointer; }

    &.--is-active {
      position: relative;

      &::before {
        content: '';
        bottom: 0;
        position: absolute;

        width: 100%;
        opacity: 0.6;
        border-radius: $border-radius-md;
        transition: border-bottom .3s, opacity .3s;
        border-bottom: 2px solid color(positive, base);
      }

      & > .icon { color: color(positive, base); }
      & > .text { color: color(positive, base); }
    }

    &.--is-disabled {
      & > .icon { color: color(neutral, dark); }
      & > .text { color: color(neutral, dark); }
    }

    &:not(.--is-active):not(.--is-disabled):hover {
      & > .icon { color: color(primary, base); }
      & > .text { color: color(primary, base); }
    }
  }
}
</style>
