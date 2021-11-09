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

      class="icon"

      :primary-color="primaryIconColor"
      :secondary-color="secondaryIconColor"

      :icon="icon"
      :size="iconSize"
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

    primaryIconColor: Boolean,

    secondaryIconColor: Boolean,

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
  background: color(primary, base);

  border: $border-radius-none;
  border-radius: $border-radius-sm;

  transition: border .3s,
              border .3s,
              opacity .3s,
              background .3s;

  &::before { background: color(primary, base); }
  &:hover { background: color(primary, light); }
  &:active { background: color(primary, dark); }

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
    & > .text { padding-left: 10px; }
    & > .icon {
      position: absolute;
      left: 20px;
      color: color(neutral, base);
    }
  }

  & > .text {
    flex: 1;
    color: color(neutral, base);
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
    background: color(neutral, base);

    &.--disabled {
      background: transparent;

      & > .icon {
        color: transparent;
        background-clip: text;
        background: color(neutral, dark);
        -webkit-background-clip: text;
      }

      & > .text {
        color: transparent;
        background-clip: text;
        background: color(neutral, dark);
        -webkit-background-clip: text;
        // https://codyhouse.co/nuggets/text-gradients
      }
    }

    & > .icon {
      position: unset;
      color: color(primary, base);
    }

    & > .text {
      color: color(primary, base);

      &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: color(primary, base);
      }
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
    background: color(neutral, light);

    &::before { background: color(neutral, light); }
    &:hover { background: color(neutral, medium); }
    &:active { background: color(neutral, dark) !important; }
  }

  // &.--primary {
  //   background: color(primary, base);

  //   &::before { background: color(primary, base); }
  //   &:hover { background: color(primary, light); }
  //   &:active { background: map-get($primary-color, base-48) !important; }
  // }

  &.--success {
    background: color(positive, base);

    &::before { background: color(positive, base); }
    &:hover { background: color(positive, medium); }
    &:active { background: color(positive, dark) !important; }
  }

  &.--error {
    background: color(negative, base);

    &::before { background: color(negative, base); }
    &:hover { background: color(negative, medium); }
    &:active { background: color(negative, dark) !important; }
  }

  &.--full-width { width: 100%; }

  &.--outlined {
    opacity: 1;
    background: color(neutral, base);
    border: 1px solid color(primary, base);

    &.--disabled {
      background: color(neutral, base);
      border-color: color(neutral, light);

      & > .text { color: color(neutral, light); }
    }

    &::before, &::after { display: none; }

    & > .icon { filter: unset; }
    & > .text { color: color(primary, base); }
    & > .loader {}

    &:hover { background: color(neutral, light); }
    &:active { background: color(neutral, medium); }
  }

  &.--disabled {
    user-select: none;
    pointer-events: none;
    // cursor: not-allowed;
    background: color(neutral, dark);
    border-color: color(neutral, light);

    &::before, &::after { opacity: 0; }

    & > .icon {}

    & > .text {
      text-shadow: unset;
    }
  }

  &.--loading {
    pointer-events: none;
    background: color(neutral, light);

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
