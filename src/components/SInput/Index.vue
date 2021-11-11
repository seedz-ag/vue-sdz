<template>
  <s-input-container v-bind="$attrs" :validation="validation" :class="sInputClasses">
    <s-icon v-if="icon" :icon="icon" class="left-icon" />

    <component
      :is="componentType"
      :key="id"

      ref="input"

      v-mask="mask"
      v-bind="inputAttrs"
      v-html="textArea && value"

      :value="value"
      :class="inputClasses"
      :placeholder="floatLabel ? '' : placeholder"

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

const convertToRaw = data => data
  .replace(/[^\w\s]/gi, '')
  .replace(/\s/g, '')

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
    small: Boolean,

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

    positiveOnly: Boolean
  },

  data: () => ({ id: 0 }),

  watch: {
    value (newV, oldV) {
      if (oldV && !newV) this.id++
    }
  },

  computed: {
    sInputClasses () {
      return [
        's-input', {
          '--small': this.small,
          '--has-icon': this.icon,
          '--is-money': this.isMoney,
          '--is-not-empty': !!this.value,
          '--is-textarea': this.textArea,
          '--is-disabled': this.disabled,
          '--is-float-label': this.floatLabel,
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
      if (this.textArea) return 'textarea'

      return 'input'
    },

    listeners () {
      return {
        ...this.$listeners,

        input: e => {
          const v = e?.target?.value

          this.$emit('input', this.isMoney
            ? e
            : this.raw ? convertToRaw(v) : v)
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

    border-width: 1px;
    border-style: solid;
    border-image-slice: 1;
    border-radius: $border-radius-sm;
    border-image-source: color(base, light);

    transition: color .3s, border-color .3s;

    &::placeholder { color: color(base, light); }

    &.--has-icon { text-indent: 35px; }
    &.--is-textarea { padding-top: 30px; }
    &.--is-rounded { border-radius: 50px; }
    &.--has-right-icon { padding-right: 40px; }
  }

  & > .label {
    top: -25px;
    position: absolute;

    font-size: 14px;
    font-weight: 500;
    pointer-events: none;
    color: color(base, base);
    font-family: $font-family;
    transition: font-size .3s, transform .3s;
  }

  &.--small > .input { height: 35px; }

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

  &:not(.--is-float-label) { margin-top: 30px; }

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
    & > .input { border-color: color(neutral, medium); }
    & > .label { color: color(neutral, medium); }
  }

  &.--validation {
    // display: block;

    & > .input {
      box-shadow: none;
      padding-right: 50px;
      color: color(negative, base);
      border-color: color(negative, base) !important;
    }

    & > .label { font-weight: 500; color: color(negative, base) !important; }
  }

  &:focus-within {
    & > .input { border-color: color(primary, base); }
  }
}
</style>
