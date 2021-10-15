<template>
  <s-input-container v-bind="$attrs" :validation="validation" :class="sInputClasses">
    <s-icon v-if="icon" :icon="icon" class="left-icon" />

    <component
      :is="componentType"

      ref="input"

      v-mask="mask"
      v-bind="inputAttrs"
      v-html="textArea && value"

      :value="value"
      :class="inputClasses"
      :placeholder="isFloatLabel ? '' : placeholder"

      v-on="listeners"
    />

    <s-icon v-if="rightIcon" :icon="rightIcon" class="right-icon" />
  </s-input-container>
</template>

<script>
import { Money } from 'v-money'
import { mask } from 'vue-the-mask'

import SIcon from '../SIcon/Index.vue'
import SInputContainer from '../SInputContainer/Index.vue'

export default {
  name: 'SInput',

  components: { SInputContainer, SIcon, Money },

  directives: {
    mask (el, binding) {
      if (!binding?.value || !binding?.value?.length) { return }

      return mask(el, binding)
    }
  },

  props: {
    icon: String,

    rightIcon: String,

    iconColor: String,

    round: Boolean,

    disabled: Boolean,

    textArea: Boolean,

    validation: String,

    placeholder: String,

    value: [String, Number, Object],

    isMoney: Boolean,

    isFloatLabel: Boolean,

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

    positiveOnly: Boolean
  },

  computed: {
    sInputClasses () {
      return [
        's-input', {
          '--has-icon': this.icon,
          '--is-money': this.isMoney,
          '--is-not-empty': !!this.value,
          '--is-textarea': this.textArea,
          '--is-disabled': this.disabled,
          '--is-float-label': this.isFloatLabel,
        }
      ]
    },

    inputClasses () {
      return [
        'input',
        {
          '--has-icon': this.icon,
          '--is-rounded': this.round,
          '--is-textarea': this.textArea,
          '--has-right-icon': this.rightIcon
        }
      ]
    },

    componentType () {
      if (this.isMoney) return 'money'

      return this.textArea ? 'textarea' : 'input'
    },

    listeners () {
      return {
        ...this.$listeners,

        input: e => {
          this.$emit('input', this.isMoney ? e : e?.target?.value)
        },

        focus: e => {
          this.$emit('focus', e)
        },

        blur: e => {
          this.$emit('blur', e)
        }
      }
    },

    inputAttrs () {
      return {
        ...this.$attrs,
        ...(this.isMoney ? this.moneyMask : {})
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
  flex-direction: column;

  & > .input {
    outline: 0;
    width: 100%;
    height: 50px;
    font-size: 14px;
    text-indent: 20px;
    border: 1px solid $base-light-color;
    border-radius: $border-radius-sm;
    transition: color .3s, border-color .3s;

    &::placeholder { color: $base-light-color; }

    &.--has-icon { text-indent: 35px; }
    &.--is-textarea { padding-top: 30px; }
    &.--has-right-icon { padding-right: 40px; }
    &.--is-rounded { border-radius: 50px; border: 1px solid $base-light-color; }
  }

  & > .label {
    top: -25px;

    font-size: 14px;
    font-weight: 500;
    pointer-events: none;
    color: $base-color;
    font-family: $font-family;
    transition: font-size .3s, transform .3s;
  }

  &.--has-icon {
    & > .label { left: 25px; }
    & > .input { padding-left: 10px; }
  }

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
      border-color: $neutral-medium-color;
    }

     & > .label {
       color: $neutral-medium-color;
     }
  }

  &.--validation {
    // display: block;

    & > .input {
      box-shadow: none;
      padding-right: 50px;
      color: $negative-color;
      border-color: $negative-color !important;
    }

    & > .label { font-weight: 500; color: $negative-color !important; }
  }

  &:focus-within {
    & > .input { border-color: $primary-color; }
  }
}
</style>
