<template>
  <div :class="classes" v-bind="$attrs">
    <label v-if="label" class="label">
      <span v-if="required" class="required">*</span>

      <s-icon v-if="leftIcon" :icon="leftIcon" class="left-icon" />
      <span v-else class="text">{{ label }}</span>
    </label>

    <slot />

    <s-icon v-if="rightIcon" v-bind="$attrs" class="right-icon" />

    <transition name="fade">
      <div v-if="validation" class="validation">
        <p class="message">{{ validationMessage }}</p>
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
    label: String,

    leftIcon: String,

    rightIcon: String,

    validation: [Array, String],

    required: Boolean
  },

  computed: {
    classes () {
      return [ 's-input-container', {
        '--label': this.label,
        '--validation': this.validation
      }]
    },

    validationMessage () {
      if (Array.isArray(this.validation)) return this.validation[0]

      return this.validation
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-input-container {
  position: relative;

  & > .label {
    font-size: $font-size-xxxs;
    padding: { right: 10px; bottom: 5px; }

    & > .required { color: color(negative, base); margin-top: 5px; }
  }

  &.--label { margin-top: 30px; }

  &.--validation > .input { border-color: color(negative, base); }

  & > .validation {
    bottom: -18px;
    position: absolute;
    width: calc(100% - 20px);

    & > .message {
      font-size: 10px;
      color: color(negative, base);
      font-weight: $font-weight-medium;

      // truncate
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  & > .fade-enter-active,
  & > .fade-leave-active { transition: opacity .3s !important; }

  & > .fade-enter,
  & > .fade-leave-to { opacity: 0 !important; }
}
</style>
