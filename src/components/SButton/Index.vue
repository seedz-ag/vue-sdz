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
    primary: Boolean,
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
          '--primary': this.primary,
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

  cursor: pointer;
  padding: 0 40px;
  text-align: center;
  transform-style: preserve-3d;
  background: transparent;

  border: $border-radius-none;
  border-radius: $border-radius-md;

  transition: border .3s,
              border .3s,
              opacity .3s,
              background .3s;

  &:hover {
    &::before { opacity: 1; }
    &::after { opacity: 0.1; }
  }

  &.--has-icon {
    & > .text { margin-left: 15px; }
    & > .icon {
      position: absolute;
      left: 20px;
      color: color(neutral, base);
    }
  }

  & > .text {
    flex: 1;
    color: color(primary, base);
    white-space: nowrap;
    font-size: 16px;

    transition: color 300ms ease, opacity .3s;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover { color: color(primary, medium); }
    &:active { color: color(primary, dark); }
  }

  &.--primary {
    background: color(primary, base);

    &:hover { background: color(primary, medium); }
    &:active { background: color(primary, dark); }
    &::before { background: color(primary, base); }

    &:active::before, &::after { display: none; }

    & > .text { color: color(neutral, base); }

    &.--has-icon > .icon { color: color(neutral, base); }

    &.--loading { background: color(neutral, dark); }

    &.--disabled {
      border-color: color(base, light);

      & > .text { color: color(base, light); }
      &.--has-icon > .icon { color: color(base, light); }
    }
  }

  &.--icon-only {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    justify-content: center;
    border-radius: $border-radius-circular;
  }

  &.--disabled {
    user-select: none;
    pointer-events: none;
    background: color(neutral, dark);
    border-color: color(neutral, dark);

    & > .text {
      text-shadow: unset;
      color: color(base, light);
    }

    &.--has-icon > .icon { color: color(base, light); }
  }

  & > .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex: 1;
  }

  &.--loading {
    pointer-events: none;

    & > .text, .icon { visibility: hidden; }
  }

  &.--white {
    border: 1px solid color(neutral, base);

    & > .text { color: color(neutral, base); }

    &.--disabled {
      border-color: color(base, medium);
      background: transparent !important;

      & > .text { color: color(base, medium); }
      &.--has-icon > .icon { color: color(base, medium); }
    }

    &.--loading { border-color: color(base, medium); }

    &:hover  {
      background: none !important;
      border-color: color(neutral, dark);

      & > .text { color: color(neutral, dark); }
    }

    &:active {
      background: none !important;
      border-color: color(base, light);

      & > .text { color: color(base, light); }
    }
  }

  &.--link {
    padding: 0;
    background: transparent !important;
    border: unset !important;

    &.--disabled {
      background: transparent !important;

      & > .icon {
        color: color(neutral, dark);
      }

      & > .text {
        color: color(base, light);
        font-weight: 600;
        // https://codyhouse.co/nuggets/text-gradients
      }
    }

    & > .icon {
      position: unset;
      color: color(primary, base);
    }

    & > .text {
      color: color(primary, base);
      font-weight: 600;

      &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: color(primary, base);
      }
    }

    &.--white {
      & > .text {
        color: color(neutral, base);

        &:hover, &:active { text-decoration-color: color(neutral, base); }
      }
    }

  }

  &.--outlined {
    background: color(neutral, base);
    border: 1px solid color(primary, base);

    & > .text { color: color(primary, base); }

    &.--has-icon > .icon { color: color(primary, base); }

    &.--loading { border-color: color(base, light); }

    &.--disabled {
      border-color: color(base, light);

      & > .text { color: color(base, light); }
      &.--has-icon > .icon { color: color(base, light); }
    }

    &:hover {
      border-color: color(primary, medium);

      & > .text { color: color(primary, medium); }
      &.--has-icon > .icon { color: color(primary, medium); }
    }

    &:active {
      border-color: color(primary, dark);

      & > .text { color: color(primary, dark); }
      &.--has-icon > .icon { color: color(primary, dark); }
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

  &.--rounded {
    border-radius: 50px;
  }

  // loading transitions
  & > .loading-enter-active { transition: opacity .1s .1s; }
  & > .loading-leave-active { transition: opacity .1s; }
  & > .loading-enter,
  & > .loading-leave-to { opacity: 0; }
}
</style>
