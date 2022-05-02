<template>
  <label :class="classes">
    <input
      class="input"
      type="checkbox"

      :checked="value"
      :disabled="disabled"

      @input="ev => $emit('input', ev.target.checked)"
    >

    <span class="check">
      <i class="icon sdz-check" />
    </span>

    <span class="text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'SCheckbox',

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
    border-radius: $border-radius-sm;
    border-color: color(neutral, dark);

    background-color: color(neutral, base);

    &:hover {
      border-width: 2px;
      border-color: color(positive, base);
    }

    & > .icon {
      font-size: 18px;
      margin-top: 3px;
      color: transparent;
      opacity: $opacity-light;
      font-weight: $font-weight-bold;
      transition: opacity .3s .1s ease-in-out;
    }
  }

  & > .text {
    margin-left: 10px;
    font-size: $font-size-xs;
  }

  & > .input + .check { transition: background-color .6s ease; }

  & > .input:checked + .check {
    animation: check;
    background-color: color(positive, base);

    & > .icon {
      opacity: 1;
      transform: scale(0);
      color: color(neutral, base);
      animation: icon .3s ease-in-out .1s forwards;
    }
  }

  &.--is-checked {
    & > .check { border-color: color(positive, base); }
  }

  &.--is-negative {
    & > .check { border-color: color(negative, base); }
    & > .input:checked + .check { background-color: color(negative, base); }
  }

  &.--is-disabled {
    & > .text { color : color(neutral, dark); }
    & > .check { border-color: color(neutral, light); }
    & > .input:checked + .check { background-color: color(neutral, dark); }
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
