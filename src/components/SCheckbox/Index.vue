<template>
  <label :class="classes">
    <input
      class="input"
      type="checkbox"

      :checked="value"
      :disabled="disabled"
    >

    <span class="check" @click="emit">
      <s-icon class="icon" icon="bi:check-lg" />
    </span>

    <span class="text" @click="emit">{{ label }}</span>
  </label>
</template>

<script>
import SIcon from '../SIcon/Index.vue'

export default {
  name: 'SCheckbox',

  components: { SIcon },

  props: {
    value: {
      type: Boolean,
      required: true
    },

    label: String,

    negative: Boolean,

    disabled: Boolean
  },

  computed: {
    classes () {
      return ['s-checkbox', {
        '--is-checked': this.value,
        '--is-negative': this.negative,
        '--is-disabled': this.disabled
      }]
    }
  },

  methods: {
    emit () {
      this.$attrs.onInput?.()
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-checkbox {
  display: flex;

  & > .input { display: none; }

  & > .check {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: border-width .1s ease;

    border-width: 2px;
    border-style: solid;
    border-radius: $border-radius-md;
    border-color: color(base, light);

    transition: background-color .6s ease;
    background-color: color(neutral, base);

    & > .icon {
      opacity: 1;
      transform: scale(0);
      color: color(neutral, base);
      animation: icon .3s ease-in-out .1s forwards;

      color: transparent;
      opacity: $opacity-light;
      transition: opacity .3s .1s ease-in-out;
      margin-left: -2px;
    }
  }

  & > .text {
    margin-top: 2px;
    margin-left: 8px;
    font-size: $font-size-xs;
  }

  &.--is-negative > .check {
    border-color: color(negative, base);
  }

  &.--is-checked {
    & > .check {
      border-color: color(primary, base);
      background-color: color(primary, base);
    }

    &.--is-disabled {
      & > .check {
        border-color: color(neutral, dark);
        background-color: color(neutral, dark);
      }
      & > .text { color : color(neutral, dark); }
    }
  }

  @keyframes check {
    0% { opacity: $opacity-medium; }
    50% { opacity: $opacity-intense; }
    100% { opacity: 1; }
  }

  @keyframes icon {
    from { opacity: 0; transform: scale(0.3); }
    to { opacity: 1; transform: scale(1) }
  }
}
</style>
