<template>
  <s-input-container
    v-bind="$attrs"
    :validation="validation"
    :class="['c-input', {'-has-icon': icon, '-not-empty': !!value, '-textarea': textArea }]"
  >
    <s-icon
      v-if="icon"
      :icon="icon"
      class="left-icon"
    />

    <component
      :is="componentType"

      ref="input"

      v-mask="mask"
      v-bind="inputAttrs"
      v-html="textArea && value"

      :value="value"
      :class="classes"

      v-on="listeners"
    />

    <s-icon
      v-if="rightIcon && !(validation && jumbo)"
      :icon="rightIcon"
      class="right-icon"
    />
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

    noHover: Boolean,

    disabled: Boolean,

    textArea: Boolean,

    validation: String,

    value: null,

    isMoney: Boolean,

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
    classes () {
      return [
        'input',
        {
          '-has-icon': this.icon,
          '-has-right-icon': this.rightIcon,
          '-round': this.round,
          '-no-hover': this.noHover,
          '-disabled': this.disabled,
          '-textarea': this.textArea
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
          this.$emit('input', e?.target?.value)
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

.c-input {
  position: relative;
  display: flex;
  flex-direction: column;

  & > .left-icon, & > .right-icon {
    box-sizing: content-box;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 5px;
  }

  & > .right-icon { right: $icon-position; }
  & > .left-icon { left: $icon-position; }

  & > .input {
    outline: 0;
    font-size: 14px;
    border-radius: 5px;
    border: $base-border;
    transition: box-shadow .3s ease;
    color: map-get($text-color, base-80);

    margin: 0;
    resize: none;

    &::placeholder { color: map-get($text-color, base-30); }

    &:focus:not(.-no-hover) {
      border-color: rgba($primary-color, .35);
      @include hover();
    }

    &.-textarea { padding: 15px; }
    &:not(.-textarea) { height: 40px; text-indent: 20px; }

    &.-has-icon { text-indent: 35px; }
    &.-has-right-icon { padding-right: 40px; }

    &.-round {
      border-radius: 20px;
      border: $base-border;
    }

    &.-disabled {
      cursor: default;
      border: 1px solid map-get($text-color, base-01);
      background-color: map-get($text-color, base-05);
    }
  }

  & > .validation { display: block; }

  &.-validation > .input,
  &.-validation > .input:focus:not(.-no-hover) {
    border-color: rgba($negative-color, .35);
    @include hover($negative-color);
  }
}
</style>
