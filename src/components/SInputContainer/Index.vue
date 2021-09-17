<template>
  <div :class="classes">
    <label v-if="label" class="label">
      <span v-if="required" class="required">*</span>

      <s-icon v-if="leftIcon" :icon="leftIcon" class="left-icon" />

      <span v-else class="text">{{ label }}</span>
    </label>

    <slot />

    <s-icon v-if="rightIcon" v-bind="$attrs" class="right-icon" />

    <transition name="fade">
      <div v-if="!!validation" class="validation">
        <p class="message">
          <span class="text" v-html="validation" />
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import SIcon from '../SIcon'

export default {
  name: 'CInputContainer',

  components: { SIcon },

  props: {
    label: {
      type: String,
      required: true
    },

    leftIcon: String,

    rightIcon: String,

    validation: String,

    required: Boolean
  },

  computed: {
    classes () {
      return [ 's-input-container', {
        '--label': this.label,
        '--validation': this.validation
      }]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-input-container {
  position: relative;

  & > .label {
    position: absolute;

    font-size: 11px;
    font-weight: 500;
    padding-right: 10px;
    text-transform: uppercase;
    font-family: $title-font-family;
    color: map-get($text-color, base-50);

    & > .required { color: $negative-color; margin-top: 5px; }
  }

  & > .validation {
    bottom: -15px;
    position: absolute;

    & > .message {
      font-weight: 600;
      color: $negative-color;
      -webkit-font-smoothing: antialiased;

      & > .text > b { -webkit-font-smoothing: antialiased; }
    }
  }

  & > .fade-enter-active,
  & > .fade-leave-active { transition: opacity .3s !important; }

  & > .fade-enter,
  & > .fade-leave-to { opacity: 0 !important; }
}
</style>
