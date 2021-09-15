<template>
  <div :class="classes">
    <label v-if="label || labelIcon" class="label">
      <span v-if="required" class="required">*</span>

      <s-icon
        v-if="labelIcon"
        :size="labelIconSize"
        :icon="labelIcon"
        class="icon"
      />

      <span v-else class="text">{{ label }}</span>
    </label>

    <!-- @slot The default slot for the form field. -->
    <slot />

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
      default: ''
    },

    labelIcon: String,

    labelIconSize: {
      type: [String, Number],
      default: 24
    },

    validation: String,

    required: Boolean
  },

  computed: {
    classes () {
      return [ 's-input-container', {
        '-label': this.label,
        '-validation': this.validation
      }]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-input-container {
  position: relative;

  &.-label:not(.-label-left) {
    margin-top: 22px;
  }

  & > .label {
    position: absolute;
    top: -20px;
    font-size: 11px;
    margin-bottom: 5px;
    padding-right: 10px;
    text-transform: uppercase;
    font-weight: 500;

    & > .required { color: $negative-color; margin-top: 5px; }
  }

  & > .validation {
    overflow: hidden;
    height: 17px;
    position: absolute;
    bottom: -23px;

    & > .message {
      color: $negative-color;
      font-weight: 600;
      -webkit-font-smoothing: antialiased;

      & > .text > b { -webkit-font-smoothing: antialiased; }
    }
  }

  & > .fade-enter-active,
  & > .fade-leave-active {
     transition: opacity .3s !important;
   }

  & > .fade-enter,
  & > .fade-leave-to {
    opacity: 0 !important;
  }
}
</style>
