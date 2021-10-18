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
import SIcon from '../SIcon/Index.vue'

export default {
  name: 'SInputContainer',

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

    text-transform: uppercase;
    font-size: $font-size-xxxs;
    padding: { right: 10px; bottom: 5px; }

    & > .required { color: $negative-color; margin-top: 5px; }
  }

  & > .validation {
    bottom: -18px;
    position: absolute;

    & > .message {
      color: $negative-color;
      font-weight: $font-weight-medium;
    }
  }

  & > .fade-enter-active,
  & > .fade-leave-active { transition: opacity .3s !important; }

  & > .fade-enter,
  & > .fade-leave-to { opacity: 0 !important; }
}
</style>
