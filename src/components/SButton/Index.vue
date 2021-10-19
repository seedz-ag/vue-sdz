<template>
  <s-link
    ref="btn"

    :link="link"
    :class="classes"
    :disabled="disabled"

    v-bind="$attrs"
    v-on="$listeners"
  >
    <s-icon
      v-if="icon"
      :icon="icon"
      :size="iconSize"
      class="icon"
    />

    <span v-if="$slots.default" class="text">
      <!-- @slot The content of the button -->
      <slot />
    </span>

    <transition name="loading">
      <div v-if="loading" size="25" class="loader" />
    </transition>
  </s-link>
</template>

<script>
import SLink from '../SLink/Index.vue'
import SIcon from '../SIcon/Index.vue'

/**
 * The standard button used throught convenia projects.
 */
export default {
  name: 'SButton',

  components: { SIcon, SLink },

  props: {
    size: {
      type: [String, Number],
      default: 40,
      validator: size => typeof +size === 'number' && +size > 0
    },

    icon: {
      type: String,
      default: ''
    },

    iconSize: {
      type: [String, Number],
      default: '20'
    },
    
    small: Boolean,

    large: Boolean,

    fullWidth: Boolean,

    disabled: Boolean,

    primary: Boolean,

    success: Boolean,

    grey: Boolean,

    error: Boolean,

    link: Boolean,

    outlined: Boolean,

    loading: Boolean
  },

  computed: {
    classes () {
      return [ 's-button',
        {
          '--link': this.link,
          '--grey': this.grey,
          '--small': this.small,
          '--large': this.large,
          '--error': this.error,
          '--primary': this.primary,
          '--success': this.success,
          '--loading': this.loading,
          '--disabled': this.disabled,
          '--outlined': this.outlined,
          '--full-width': this.fullWidth,
          '--icon-only': !this.$slots.default,
          '--has-icon': this.icon && this.$slots.default
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  min-width: 50px;
  min-height: 50px;

  outline: none;
  cursor: pointer;
  padding: 0 40px;
  transform-style: preserve-3d;
  background-color: $primary-color;

  border: $border-radius-none;
  border-radius: $border-radius-sm;

  transition: border .3s,
              border .3s,
              opacity .3s,
              background-color .3s;

  // &::before {
  //   content: '';
  //   display: block;

  //   position: absolute;
  //   left: 50%;
  //   top: calc(50% + 4px);

  //   width: 93%;
  //   height: 75%;

  //   filter: blur(8px);
  //   opacity: $opacity-intense;
  //   transition: filter .3s, opacity .3s;
  //   transform: translateX(-50%) translateY(-50%) translateZ(-1px);
  // }

  // &::after {
  //   content: '';
  //   display: block;

  //   position: absolute;
  //   top: 0;
  //   left: 0;

  //   width: 100%;
  //   height: 100%;

  //   opacity: 0;
  //   transition: opacity .3s;
  // }

  &:hover {
    &::before {
      opacity: 1;
      // filter: blur(14px);
    }

    &::after { opacity: 0.1; }
  }

  &:active::before, &::after { display: none; }

  & > .icon {
    flex-shrink: 0;
    transition: filter .3s;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, .3));
  }

  &.--has-icon {
    & > .icon { left: 20px; }
    & > .text { padding-left: 10px; }
  }

  & > .text {
    flex: 1;
    color: #FFF;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: $font-size-xxxs;

    transition: color 300ms ease, opacity .3s;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  & > .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex: 1;
  }

  &.--icon-only {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius-circular;
  }

  &.--link {
    display: inline-flex;
    padding: 0;
    width: auto;
    height: auto;
    min-width: auto;
    min-height: auto;
    background-color: $neutral-color;

    &:hover, &:active {
      text-decoration: underline;
      text-decoration-color: $primary-color;
      }

    & > .text {
      color: $primary-color;
    }
  }

  &.--small {
    height: 35px;
    min-width: 35px;
    min-height: 35px;
  }

  &.--large {
    height: 60px;
    min-width: 60px;
    min-height: 60px;
  }

  &.--grey {
    background-color: $base-light-color;

    & > .border { border-color: $base-light-color; }

    &::before { background-color: $base-light-color; }
    &:hover { background-color: $base-medium-color; }
    &:active { background-color: $base-dark-color !important; }
  }

  &.--primary {
    background-color: $primary-color;

    & > .border { border-color: $primary-color; }

    &::before { background-color: $primary-color; }
    &:hover { background-color: $primary-medium-color; }
    &:active { background-color: $primary-dark-color !important; }
  }

  &.--success {
    background: $positive-color;

    & > .border { border-color: $positive-color; }

    &::before { background-color: $positive-color; }
    &:hover { background-color: $positive-medium-color; }
    &:active { background-color: $positive-dark-color !important; }
  }

  &.--error {
    background: $negative-color;

    & > .border { border-color: $negative-color; }

    &::before { background-color: $negative-color; }
    &:hover { background-color: $negative-medium-color; }
    &:active { background-color: $negative-dark-color !important; }
  }

  &.--full-width { width: 100%; }

  &.--outlined {
    opacity: 1;
    background: $neutral-color;
    border: 1px solid $primary-color;

    &::before, &::after { display: none; }

    & > .icon { filter: unset; }
    & > .text { color: $primary-color; }
    & > .loader {}

    &:hover { background: $neutral-light-color; }
    // &:active { background: $neutral-medium-color; }
  }

  &.--disabled {
    cursor: default;
    background: $neutral-dark-color;

    &::before, &::after { opacity: 0; }

    & > .icon {}

    & > .text {
      text-shadow: unset;
    }
  }

  &.--loading {
    pointer-events: none;

    & > .text, .icon { visibility: hidden; }
  }

  // loading transitions
  & > .loading-enter-active { transition: opacity .1s .1s; }

  & > .loading-leave-active { transition: opacity .1s; }

  & > .loading-enter,
  & > .loading-leave-to { opacity: 0; }
}
</style>
