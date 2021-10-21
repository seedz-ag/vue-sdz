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
      <s-loader v-if="loading" size="25" class="loader" />
    </transition>
  </s-link>
</template>

<script>
/**
 * The standard button used throught convenia projects.
 */
export default {
  name: 'SButton',

  components: {
    SIcon: () => import('../SIcon/Index.vue').then(c => c.default),
    SLink: () => import('../SLink/Index.vue').then(c => c.default),
    SLoader: () => import('../SLoader/Index.vue').then(c => c.default)
  },

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

    // primary: Boolean,

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
          // '--primary': this.primary,
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
  background-color: color(primary, base);

  border: $border-radius-none;
  border-radius: $border-radius-sm;

  transition: border .3s,
              border .3s,
              opacity .3s,
              background-color .3s;

  & > .border { border-color: color(primary, base); }

  &::before { background-color: color(primary, base); }
  &:hover { background-color: color(primary, light); }
  &:active { background-color: color(primary, dark); }
  // &:active { background-color: map-get($primary-color, base-48) !important; }

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
    font-size: $font-size-xs;

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
    background-color: color(neutral, base);

    &:hover, &:active {
      text-decoration: underline;
      text-decoration-color: color(primary, base);
      }

    & > .text {
      color: color(primary, base);
    }
  }

  &.--small {
    height: 35px;
    min-width: 35px;
    min-height: 35px;

    & > .text { font-size: $font-size-xxs; }
  }

  &.--large {
    height: 60px;
    min-width: 60px;
    min-height: 60px;

    & > .text { font-size: $font-size-sm; }
  }

  &.--grey {
    background-color: color(neutral, light);

    & > .border { border-color: color(neutral, light); }

    &::before { background-color: color(neutral, light); }
    &:hover { background-color: color(neutral, medium); }
    &:active { background-color: color(neutral, dark) !important; }
  }

  // &.--primary {
  //   background-color: color(primary, base);

  //   & > .border { border-color: color(primary, base); }

  //   &::before { background-color: color(primary, base); }
  //   &:hover { background-color: color(primary, light); }
  //   &:active { background-color: map-get($primary-color, base-48) !important; }
  // }

  &.--success {
    background: color(positive, base);

    & > .border { border-color: color(positive, base); }

    &::before { background-color: color(positive, base); }
    &:hover { background-color: color(positive, medium); }
    &:active { background-color: color(positive, dark) !important; }
  }

  &.--error {
    background: color(negative, base);

    & > .border { border-color: color(negative, base); }

    &::before { background-color: color(negative, base); }
    &:hover { background-color: color(negative, medium); }
    &:active { background-color: color(negative, dark) !important; }
  }

  &.--full-width { width: 100%; }

  &.--outlined {
    opacity: 1;
    background: color(neutral, base);
    border: 1px solid color(primary, base);

    &::before, &::after { display: none; }

    & > .icon { filter: unset; }
    & > .text { color: color(primary, base); }
    & > .loader {}

    &:hover { background: color(neutral, light); }
    // &:active { background: color(neutral, medium); }
  }

  &.--disabled {
    cursor: default;
    user-select: none;
    pointer-events: none;
    background: color(neutral, dark);

    &::before, &::after { opacity: 0; }

    & > .icon {}

    & > .text {
      text-shadow: unset;
    }
  }

  &.--loading {
    pointer-events: none;
    background-color: color(neutral, light);

    & > .text, .icon { visibility: hidden; }
    // & > .loader > .loader > path { fill: white; }
  }

  // loading transitions
  & > .loading-enter-active { transition: opacity .1s .1s; }

  & > .loading-leave-active { transition: opacity .1s; }

  & > .loading-enter,
  & > .loading-leave-to { opacity: 0; }
}
</style>
