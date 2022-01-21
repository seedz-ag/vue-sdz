<template>
  <div
    ref="tabberEl"
    :class="['s-tabber', { '-full-width': fullWidth, '-alternative': alternative }]"
    @mousedown="!noSwipe && bindScroll($event)"
  >
    <div
      ref="wrapperEl"
      :class="[ 'wrapper', { '-resizable': resizable } ]"
      :style="{ transform: `translateX(${scrollLeftOffset}px)` }"
    >
      <div
        v-for="tab in tabs"
        :key="tab.value"
        :ref="tab.value"
        :class="getClasses(tab)"
        @click="changeTab(tab)"
      >
        <span class="content">
          <s-icon v-if="tab.icon" :icon="tab.icon" size="20" class="icon" />
          <span class="text">{{ tab.name }}</span>
        </span>
      </div>

      <div
        :style="[activeStyle, borderStyle]"
        :class="['border', { '-alternative': alternative }]"
      />
    </div>
  </div>
</template>

<script>
import SIcon from '../SIcon/Index.vue'

export default {
  name: 'STabber',

  components: { SIcon },

  props: {
    /**
     * An array of tab object items.
     */
    tabs: {
      type: Array,
      required: true
    },

    /**
     * The value of the current active tab, must match of the values in the
     * tabs Array.
     */
    activeTab: String,

    /**
     * Makes the tabber take up the full width of the container, and adds a
     * listener to the window `resize` event, so that it recalculates it's
     * size and its tabs size whever the screen's width/height changes.
     */
    resizable: Boolean,

    /**
     * Displays only the tab's icons.
     */
    iconOnly: Boolean,

    /**
     * Disables the tabber's swipe feature.
     */
    noSwipe: Boolean,

    /**
     * Whether the tabber should take full width.
     */
    fullWidth: Boolean,

    /**
     * Alternative style for the current active tab highlight.
     */
    alternative: Boolean,

    /**
     * The color of the border (the highlight that appears under the active tab).
     */
    borderColor: {
      type: [String, Array],
      validator: v => v.length
    }
  },
  data () {
    return {
      activeStyle: {},
      scrollLeftOffset: 0,
      previousPosition: 0,
      lastClickPosition: 0,
      lastScrollPosition: 0,
    }
  },
  watch: {
    activeTab: {
      immediate: true,
      handler: 'getActiveStyle'
    }
  },

  mounted () {
    addEventListener('resize', this.getActiveStyle)
  },
  computed: {
    borderStyle () {
      const background = Array.isArray(this.borderColor)
        ? 'linear-gradient(90deg, ' + this.borderColor.join(', ') + ')'
        : this.borderColor
      return { background }
    }
  },
  methods: {
    getClasses (tab) {
      return ['tab', {
        '-active': this.getActiveTab(tab),
        '-icon-only': tab.iconOnly || this.iconOnly,
        '-alternative': this.alternative,
        '-disabled': tab.disabled,
        '-has-icon': tab.icon
      }]
    },
    getActiveTab (tab) {
      if (tab.subTabs) return tab.subTabs.find(subTab => subTab === this.activeTab)
      return tab.value === this.activeTab
    },
    getActiveStyle () {
      this.$nextTick(() => {
        const hasSubTabs = this.tabs.some(tab => tab.subTabs)
        const activeSubTab = (this.tabs.find(tab => tab.subTabs && tab.subTabs.includes(this.activeTab)) || {}).value
        const activeTab = hasSubTabs ? activeSubTab : this.activeTab

        const tabberPosition = this.$refs.wrapperEl.getBoundingClientRect().left || 0
        const tab = this.$refs[activeTab] && this.$refs[activeTab][0]
        const left = tab ? (tab.getBoundingClientRect().left - tabberPosition) + 'px' : 0
        const width = tab ? tab.offsetWidth + 'px' : 0
        const activeStyle = { left, width }

        this.activeStyle = activeStyle
        this.scrollLeftOffset = this.centralizeActiveTab(parseInt(left), parseInt(width))
      })
    },
    centralizeActiveTab (left, width) {
      const tabberWidth = this.$refs.tabberEl.getBoundingClientRect().width
      const wrapperWidth = this.$refs.wrapperEl.getBoundingClientRect().width
      const wrapperScrollWidth = this.$refs.wrapperEl.scrollWidth
      const coordinate = (-left + tabberWidth / 2) - (width / 2)

      if (tabberWidth >= wrapperScrollWidth || coordinate > 0) return 0
      if (wrapperScrollWidth + coordinate <= tabberWidth) {
        return (left + width) >= tabberWidth
          ? wrapperWidth - (left + width)
          : tabberWidth - wrapperScrollWidth
      }

      return coordinate
    },
    changeTab (tab) {
      /**
       * Emitted when the user has changed tabs. Contains the value
       * of the tab selected by the user.
       *
       * @event change-tab
       * @type {string}
       */
      if (!tab.disabled) this.$emit('change-tab', tab.value)
    },
    bindScroll ({ clientX }) {
      this.lastClickPosition = clientX
      this.lastScrollPosition = this.scrollLeftOffset

      window.addEventListener('mousemove', this.updateScrollPosition)
      window.addEventListener('mouseup', this.unbindScroll)
    },
    unbindScroll () {
      window.removeEventListener('mousemove', this.updateScrollPosition)
      window.removeEventListener('mouseup', this.unbindScroll)
    },
    updateScrollPosition ({ clientX }) {
      const tabberWidth = this.$refs.tabberEl.getBoundingClientRect().width
      const wrapperWidth = this.$refs.wrapperEl.getBoundingClientRect().width
      const wrapperScrollWidth = this.$refs.wrapperEl.scrollWidth

      const distance = clientX - this.lastClickPosition
      const coordinate = this.lastScrollPosition + distance
      const { left, width } = this.activeStyle

      if (tabberWidth >= wrapperScrollWidth || coordinate >= 0)
        return this.scrollLeftOffset = 0
      else if (wrapperScrollWidth + coordinate <= tabberWidth)
        return this.scrollLeftOffset = (parseInt(left) + parseInt(width)) >= tabberWidth
          ? wrapperWidth - (parseInt(left) + parseInt(width))
          : tabberWidth - wrapperScrollWidth

      this.scrollLeftOffset = coordinate
      this.previousPosition = coordinate
    }
  },
  beforeDestroy () {
    removeEventListener('resize', this.getActiveStyle)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-tabber {
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  // This is so the 'overflow: hidden' doesn't conflict with the
  // alternative style's box-shadow
  &.-alternative {
    padding: 15px;
    margin: -15px 0;
  }

  &.-full-width, &.-full-width > .wrapper { width: 100%; }

  & > .wrapper {
    display: flex;
    flex-shrink: 0;
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  & > .wrapper > .tab {
    display: flex;
    cursor: pointer;
    align-items: center;
    z-index: 1;

    // Review that later
    flex-shrink: 0;

    transition: color .3s ease;
    padding: 0px 20px 12px 20px;
    @include responsive (xs-mobile, mobile) { padding-bottom: 10px; }

    & > .content > .icon {
      transition: fill .3s ease;
      color: color(primary, base);
      // fill: map-get($text-color, base-30);
    }

    & > .content > .text {
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      color: color(primary, base);
      // color: map-get($text-color, base-50);
      transition: color .3s ease;
      user-select: none;
      -moz-osx-font-smoothing: grayscale;
    }

    &.-active > .content > .icon { color: color(positive, base); }
    &.-active > .content > .text { color: color(positive, base); }

    &.-disabled > .content > .icon {
      color: color(neutral, dark);
      //background-clip: text;
      //background: color(neutral, dark);
      //-webkit-background-clip: text;
    }
    &.-disabled > .content > .text {
      color: color(neutral, dark);
      //background-clip: text;
      //background: color(neutral, dark);
      //-webkit-background-clip: text;
    }

    &:not(.-active):not(.-disabled):hover > .content {
      & > .icon { color: color(primary, base); }
      & > .text { color: color(primary, base); }
    }

    &.-has-icon.-icon-only {
      flex: 1;

      & > .content {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0;

        & > .text { display: none; }
        & > .icon { position: initial; transform: none; }
      }
    }

    &.-alternative {
      padding: 4px 20px;
      &.-active:not(.-disabled) > .content > .icon { fill: rgba(#FFF, .9); }
      &.-active:not(.-disabled) > .content > .text {
        font-weight: 500;
        color: #FFF !important;
        -webkit-font-smoothing: antialiased;
      }
    }
  }

  & > .wrapper.-resizable {
    width: 100%;

    & > .tab { flex-grow: 1; justify-content: center; }
  }

  & > .wrapper > .-disabled { cursor: default; }

  & > .wrapper > .-has-icon > .content {
    position: relative;
    padding-left: 28px;
    & > .icon {
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      left: 0px;
    }
  }

  & > .wrapper > .border {
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 4px;
    margin-bottom: 4px;
    border-radius: 4px;
    transition: left .3s ease, width .3s ease;
    background: color(positive, base);

    &.-alternative {
      height: 100%;
      border-radius: 20px;
    }

    &.-alternative::before {
      content: '';
      display: block;
      position: absolute;
      width: 93%;
      height: 75%;
      border-radius: inherit;
      bottom: -2px;
      filter: blur(8px);
      opacity: 0.6;
      transform: translateZ(-1px);
      transition: filter .3s, opacity .3s;
      background: color(primary, base);
    }
  }
}
</style>
