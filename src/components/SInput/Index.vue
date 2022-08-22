<template>
  <s-input-container v-bind="$attrs" :class="inputClasses">
    <s-icon v-if="icon" :icon="icon" class="left-icon" />

    <!-- value.prop motivation: https://github.com/vuejs/vue/issues/7393 -->
    <component
      :is="componentType"
      :value.prop="value"

      class="input"
      autocomplete="new-password"

      v-mask="mask"
      v-bind="inputAttrs"
      v-html="textArea && value"
      v-on="listeners"
    />

    <s-icon v-if="rightIcon" :icon="rightIcon" class="right-icon" />

    <s-button
      v-if="button"

      :icon="buttonIcon"

      v-bind="$attrs"
      v-on="$listeners"

      @click="onClick"
    >
      {{ button }}
    </s-button>
  </s-input-container>
</template>

<script>
import { Money } from 'v-money'
import { mask } from 'vue-the-mask'

import SInputContainer from '../SInputContainer/Index.vue'

const convertToRaw = data => data
  .replace(/[^\w\s]/gi, '')
  .replace(/\s/g, '')

export default {
  name: 'SInput',

  components: {
    Money,
    SInputContainer,
    SIcon: () => import('../SIcon/Index.vue').then(d => d.default),
    SButton: () => import('../SButton/Index.vue').then(d => d.default)
  },

  directives: {
    mask (el, binding) {
      if (!binding?.value || !binding?.value?.length) { return }

      return mask(el, binding)
    }
  },

  props: {
    small: Boolean,

    larger: Boolean,

    icon: String,

    disabled: Boolean,

    rightIcon: String,

    iconColor: String,

    button: String,

    buttonIcon: String,

    round: Boolean,

    textArea: Boolean,

    placeholder: String,

    value: [String, Number, Object],

    isMoney: Boolean,

    floatLabel: Boolean,

    moneyMask: {
      type: Object,
      default: () => ({
        prefix: 'R$ ',
        decimal: ',',
        thousands: '.'
      })
    },

    mask: {
      type: [String, Array],
      default: ''
    },

    raw: Boolean,

    positiveOnly: Boolean,

    onClick: Function
  },

  computed: {
    inputClasses () {
      return [
        's-input', {
          '--small': this.small,
          '--larger': this.larger,
          '--has-icon': this.icon,
          '--has-button': this.button,
          '--is-money': this.isMoney,
          '--is-rounded': this.round,
          '--is-not-empty': !!this.value,
          '--is-textarea': this.textArea,
          '--is-disabled': this.disabled,
          '--has-right-icon': this.rightIcon,
          '--is-float-label': this.floatLabel,
        }
      ]
    },

    componentType () {
      if (this.isMoney) return 'money'
      if (this.textArea) return 'textarea'

      return 'input'
    },

    listeners () {
      const emitInput = (ev) => {
        const targetValue = typeof (ev.target || {}).value === 'string'
          ? (ev.target || {}).value
          : ev

        const value = this.isMoney
          ? ev
          : this.raw ? convertToRaw(targetValue) : targetValue

        if (value !== this.value) this.$emit('input', value)
      }

      return { ...this.$listeners, input: emitInput, update: emitInput }
    },

    inputAttrs () {
      return {
        ...this.$attrs,
        ...(this.isMoney ? this.moneyMask : {}),

        value: this.value,
        disabled: this.disabled,
        placeholder: this.floatLabel ? '' : this.placeholder
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

$icon-position: 8px;

.s-input {
  display: flex;

  & > .input {
    outline: 0;
    width: 100%;
    height: 36px;
    font-size: 14px;
    text-indent: 20px;

    border-width: 1px;
    border-style: solid;
    border-image-slice: 1;
    border-radius: $border-radius-sm;
    border-image-source: color(base, light);

    transition: color .3s, border-color .3s;

    &::placeholder { color: color(base, light); }
    &::-webkit-input-placeholder { color: color(base, light); }

    &.--has-icon { text-indent: 35px; }
    &.--is-rounded { border-radius: 50px; }
  }

  & > .label {
    top: -30px;
    position: absolute;

    pointer-events: none;
    color: color(base, base);
    font-size: $font-size-xs;
    font-family: $font-family;
    font-weight: $font-weight-regular;
    transition: font-size .3s, transform .3s;
  }

  &.--is-textarea > .input {
    height: unset;
    padding: 10px;
    text-indent: 0;
  }

  &.--small > .input { height: 28px; }

  &.--larger > .input { height: 52px; }

  &.--has-button {
    & > .input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    & > .s-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.--has-icon > .input { padding-left: 25px; }
  &.--has-right-icon > .input { padding-right: 40px; }

  & > .left-icon, & > .right-icon {
    top: 50%;
    position: absolute;
    padding-right: 5px;
    padding-left: 5px;
    box-sizing: content-box;
    transform: translateY(-50%);
  }

  & > .right-icon { right: $icon-position; }
  & > .left-icon { left: $icon-position; }

  // &:not(.--is-float-label) { margin-top: 30px; }

  &.--is-float-label {
    & > label {
      top: -20px;

      padding: 0 20px;
      transform: translateY(35px);
    }

    & > .input { padding-top: 20px; }

    &:focus-within > .label,
    &.--is-money > .label,
    &.--is-not-empty > .label {
      font-size: 11px;
      transform: translateY(30px);
    }
  }

  &.--is-disabled {
    cursor: default;
    & > .input {
      border-color: color(neutral, dark);
      background-color: color(neutral, light);
    }
  }

  &:focus-within {
    & > .input { border-color: color(primary, base); }
    & > .s-icon {color: color(primary, base);}
  }
}
</style>
