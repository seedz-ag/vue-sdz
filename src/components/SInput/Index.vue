<template>
  <s-input-container
    v-bind="$attrs"
    :validation="validation"
    :class="['s-input', {
      '--has-icon': icon,
      '--is-money': isMoney,
      '--is-not-empty': !!value,
      '--is-textarea': textArea
    }
    ]"
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
      v-if="rightIcon"
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

    disabled: Boolean,

    textArea: Boolean,

    validation: String,

    value: [String, Number, Object],

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
          '--has-icon': this.icon,
          '--is-rounded': this.round,
          '--is-disabled': this.disabled,
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

  &:focus-within > .label,
  &.--is-money > .label,
  &.--is-not-empty > .label {
    font-size: 11px;
    transform: translateY(30px);
  }

  &.--has-icon {
    & > .label { left: 25px; }
    & > .input { padding-left: 44px; }
  }

  & > .left-icon, & > .right-icon {
    position: absolute;
    top: 50%;

    padding-right: 5px;
    box-sizing: content-box;
    transform: translateY(-50%);
  }

  & > .right-icon { right: $icon-position; }
  & > .left-icon { left: $icon-position; }

  & > .input {
    outline: 0;
    width: 100%;
    height: 50px;
    font-size: 14px;
    text-indent: 20px;
    padding-top: 20px;
    border-radius: 5px;
    border: $base-border;
    transition: box-shadow .3s ease;
    color: map-get($text-color, base-80);

    &::placeholder { color: map-get($text-color, base-30); }

    &.--has-icon { text-indent: 35px; }
    &.--is-textarea { padding-top: 30px; }
    &.--has-right-icon { padding-right: 40px; }
    &.--is-rounded { border-radius: 20px; border: $base-border; }
    &.--is-disabled {
      cursor: default;
      border: 1px solid map-get($text-color, base-01);
      background-color: map-get($text-color, base-05);
    }
  }

  & > .label {
    transform: translateY(35px);

    font-size: 14px;
    padding: 0 20px;
    pointer-events: none;
    font-family: $base-font-family;
    color: map-get($text-color, base-30);
    transition: top .3s, font-size .3s, transform .3s;
    transition: font-size .3s, transform .3s ease-out;
  }

  &.--validation {
    display: block;

    & > .input {
      box-shadow: none;
      padding-right: 50px;
      border-color: rgba($negative-color, .2);
      color: map-get($negative-color-map, light);

      $background: (
        light: rgba(map-get($negative-color-map, light), 0.2),
        dark:  rgba(map-get($negative-color-map, dark), 0.2)
      );
      background: set-linear-gradient(315deg, $background);
    }

    & > .label { color: map-get($negative-color-map, light); }
  }

  @include xs-mobile {
    &:not(.--is-textarea) { height: 50px; }

    & > .label { padding: 0 15px; }

    &:focus-within > .label,
    &.--is-not-empty > .label { top: 6px; }

    & > .input {
      padding: {
        top: 10px;
        left: 15px;
        right: 15px;
      }
    }
  }
}
</style>
