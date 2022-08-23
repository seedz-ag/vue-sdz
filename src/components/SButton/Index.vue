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

    dark: Boolean,

    white: Boolean,

    error: Boolean,

    link: Boolean,

    outlined: Boolean,

    rounded: Boolean,

    loading: Boolean,

    transparent: Boolean
  },

  computed: {
    classes () {
      return [ 's-button',
        {
          '--link': this.link,
          '--dark': this.dark,
          '--small': this.small,
          '--large': this.large,
          '--error': this.error,
          '--white': this.white,
          '--success': this.success,
          '--rounded': this.rounded,
          '--loading': this.loading,
          '--disabled': this.disabled,
          '--outlined': this.outlined,
          '--full-width': this.fullWidth,
          '--transparent': this.transparent,
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

  height: 36px;
  min-width: 50px;
  min-height: 36px;

  outline: none;
  cursor: pointer;
  padding: 0 40px;
  text-align: center;
  transform-style: preserve-3d;
  background: color(primary, base);

  border: $border-radius-none;
  border-radius: $border-radius-sm;

  transition: border .3s,
              border .3s,
              opacity .3s,
              background .3s;

  &:hover { background: color(primary, light); }
  &:active { background: color(primary, dark); }
  &::before { background: color(primary, base); }

  &:hover {
    &::before {
      opacity: 1;
      // filter: blur(14px);
    }

    &::after { opacity: 0.1; }
  }

  &:active::before, &::after { display: none; }

  &.--has-icon {
    & > .text { margin-left: 15px; }
    & > .icon {
      position: absolute;
      left: 20px;
      // color: color(neutral, base);
    }
  }

  & > .text {
    flex: 1;
    color: color(neutral, base);
    white-space: nowrap;
    font-size: 16px;

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
    display: block;
    padding: 0;
    width: auto;
    height: auto;
    min-width: auto;
    min-height: auto;
    background: transparent !important;

    &.--disabled {
      background: transparent !important;

      & > .icon {
        color: color(neutral, dark);
        //background-clip: text;
        //background: color(neutral, dark);
        //-webkit-background-clip: text;
      }

      & > .text {
        color: color(base, light);
       // background-clip: text;
        //background: color(base, light);
        //-webkit-background-clip: text;
        font-weight: 500;
        // https://codyhouse.co/nuggets/text-gradients
      }
    }

    & > .icon {
      position: unset;
      color: color(primary, base);
    }

    &.--dark > .icon {
      color: color(neutral, base);
    }

    & > .text {
      color: color(primary, base);
      font-weight: 500;

      &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: color(primary, base);
      }
    }

    &.--dark > .text {
      color: color(neutral, base);

      &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: color(neutral, base);
      }
    }
  }

  &.--small {
    height: 28px;
    min-width: 35px;
    min-height: 28px;
  }

  &.--large {
    height: 52px;
    min-width: 60px;
    min-height: 52px;
  }

  &.--full-width {
    width: 100%;
  }

  &.--disabled {
    user-select: none;
    pointer-events: none;
    background: color(neutral, dark);
    border-color: color(neutral, dark);

    & > .icon { color: color(neutral, base); }

    & > .text {
      text-shadow: unset;
      color: color(neutral, base);
    }
  }

  &.--outlined {
    background: color(neutral, base);
    border: 1px solid color(primary, base);

    & > .text { color: color(primary, base); }

    &.--disabled {
      border-color: color(neutral, dark);

      & > .icon { color: color(neutral, base); }
      & > .text { color: color(neutral, dark); }
    }

    &:hover { background: color(neutral, light); }
    &:active { background: color(neutral, medium); }
  }

  &.--rounded {
    border-radius: 50px;
  }

  &.--transparent { background: transparent !important; }

  &.--loading {
    pointer-events: none;
    background: color(neutral, light);

    & > .text, .icon { visibility: hidden; }
    // & > .loader > .loader > path { fill: white; }
  }

  &.--success {
    background: color(positive, base);

    &::before { background: color(positive, base); }
    &:hover { background: color(positive, medium); }
    &:active { background: color(positive, dark); }
  }

  &.--error {
    background: color(negative, base);

    &::before { background: color(negative, base); }
    &:hover { background: color(negative, medium); }
    &:active { background: color(negative, dark); }
  }

  &.--white {
    border: 1px solid color(neutral, base);

    & > .text { color: color(neutral, base); }
    &:hover { background: none !important; }
    &:active { background: none !important; }
  }

  // loading transitions
  & > .loading-enter-active { transition: opacity .1s .1s; }

  & > .loading-leave-active { transition: opacity .1s; }

  & > .loading-enter,
  & > .loading-leave-to { opacity: 0; }
}
</style>
