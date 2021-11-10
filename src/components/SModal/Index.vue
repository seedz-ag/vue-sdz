<template>
  <transition v-if="isOpened" name="s-modal-fade" appear>
    <div class="s-modal">
      <s-overlay v-if="isOpened && !noOverlay" show @close="emit" />

      <div :class="classes" @focusout="onClickOutside">
        <div v-if="!noHeader" class="header">
          <slot name="header">
            <div class="title">{{ title }}</div>
          </slot>

          <div class="actions">
            <slot name="actions" />
            <s-button icon="sdz-close" :disabled="disabled" @click="$emit('close')" />
          </div>
        </div>

        <div :class="['wrapper-content', { '-shadow-top': showScrollShadow }]">
          <div ref="content" class="content" @scroll="toggleScrollShadow">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SOverlay from '../SOverlay/Index.vue'
import SButton from '../SButton/Index.vue'

export default {
  name: 'SModal',

  components: { SOverlay, SButton },

  props: {
    /**
     * Whether to show or not the modal.
     */
    isOpened: {
      type: Boolean,
      required: true
    },

    /**
     * The title of the modal (diplayed in the header section by default).
     */
    title: {
      type: String,
      default: ''
    },

    /**
     * Disables the modal actions.
     */
    disabled: Boolean,

    /**
     * Removes the close button.
     */
    noClose: Boolean,

    /**
     * Removes the header section from the modal.
     */
    noHeader: Boolean,

    /**
     * Makes the modal fullscreen
     */
    fullscreen: Boolean,

    /**
     * Whether to show the scroll shadows on top and bottom.
     */
    hasScrollShadow: Boolean,

    /**
     * Whether to show the background overlay or not.
     */
    noOverlay: Boolean,

    // By default, we set `overflow: hidden` in the body element
    // when the modal is open, but in some instances, when the modal
    // is inside a fixed element for example, this won't work.
    // In this case we need to pass the id of the element that should
    // be targeted instead.

    /**
     * The element to set the property { overflow: hidden } to,
     * by default it targets the body element on the page, but in
     * some cases it is necessary to block the overflow of another
     * parent element.
     */
    scrollEl: String
  },

  data () {
    return {
      showScrollShadow: false
    }
  },

  watch: {
    isOpened (newValue, oldValue) {
      if (newValue === oldValue) return
      this.checkOverflow()
    },

    scrollEl (newValue, oldValue) {
      if (newValue === oldValue) return
      this.checkOverflow()
    }
  },

  mounted () {
    this.checkOverflow()
  },

  computed: {
    classes () {
      return [ 'modal',
        {
          '-fullscreen': this.fullscreen,
          '-scroll-shadow': this.hasScrollShadow
        }]
    }
  },

  methods: {
    checkOverflow () {
      this.isOpened ? this.open() : this.close()
    },

    toggleScrollShadow () {
      if (!this.hasScrollShadow) return

      const contentEl = this.$refs.content
      const scrollTop = contentEl.scrollTop
      const scrollHeight = contentEl.scrollHeight
      const clientHeight = contentEl.clientHeight

      this.showScrollShadow = !(scrollHeight <= clientHeight) &&
        (scrollTop > 15 || (scrollTop + clientHeight >= scrollHeight))
    },

    open () {
      const styles = { overflow: 'hidden' }
      const el = this.scrollEl
        ? document.getElementById(this.scrollEl)
        : document.body

      Object.assign(el.style, styles)
      window.addEventListener('keydown', this.closeOnEsc)
    },

    close () {
      const styles = { overflow: '' }
      const el = this.scrollEl
        ? document.getElementById(this.scrollEl)
        : document.body

      Object.assign(el.style, styles)
      window.removeEventListener('keydown', this.closeOnEsc)
    },

    emit () {
      this.$emit('close')
      this.close()
    },

    closeOnEsc (ev) {
      if (ev.keyCode === 27) this.emit()
    },

    onClickOutside () {
      if (this.noOverlay) this.emit()
    }
  },

  beforeDestroy () {
    this.close()
    window.removeEventListener('keydown', this.closeOnEsc)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: $z-index-5;

  & > .modal {
    opacity: 1;
    display: flex;
    margin: 0 auto;
    position: fixed;
    z-index: $z-index-3;
    flex-direction: column;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
    background:linear-gradient(180deg, #FFF, rgba(255, 255, 255, .83) 100%);

    max-width: 100%;
    @include responsive (xs-mobile, mobile) { width: 100vw; height: 100vh; }

    &.-scroll-shadow { background: #FFF; }

    &:not(.-fullscreen) {
      border-radius: $border-radius-md;

      @include responsive(tablet, desktop) {
        width: 100%;
        min-height: 250px;

        max-width: 580px;
        max-height: 100vh;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &.-fullscreen { height: 100vh; max-width: 100vw; }

    & > .header {
      display: flex;
      flex-shrink: 0;
      align-items: center;

      padding: 20px 20px 15px;

      & > .title { margin-right: auto; }

      & > .actions {
        display: flex;
        align-items: center;

        margin-left: auto;

        & > a:not(:last-child),
        & > button:not(:last-child) { margin-right: 10px; }
      }
    }

    & > .wrapper-content {
      flex-grow: 1;
      display: flex;

      overflow: hidden;
      position: relative;

      border-top: 1px solid rgba(0, 0, 0, 0.0);

      &.-shadow-top {
        &::before { box-shadow: 0px 4px 17px 0 rgba(0, 0, 0, 0.30); }
      }

      &::before {
        content: "";
        position: absolute;
        top: -17px;
        left: 2.5%;
        z-index: 50;

        width: 95%;
        height: 17px;

        border-radius: 50%;

        transition: box-shadow 350ms ease-in-out;
        box-shadow: 0 0 17px 0 rgba(0, 0, 0, 0.0);
      }

      & > .content {
        width: 100%;
        overflow-y: auto;
        padding: 5px 20px 50px;
      }
    }
  }
}

.s-modal-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;

    & > .modal { transition: transform .5s, opacity 350ms; }
  }

  &-enter,
  &-leave-to {
    opacity: 0;

    & > .modal {
      opacity: 0;
      transform: scale(0.3);
    }
  }
}
</style>
