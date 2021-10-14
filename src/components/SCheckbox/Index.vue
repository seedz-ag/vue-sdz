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

    border-width: 1px;
    border-style: solid;
    border-color: $base-light-color;
    border-radius: $border-radius-sm;

    background-color: $neutral-color;

    &:hover {
      border-width: 2px;
      border-color: $positive-color;
    }

    & > .icon {
      opacity: 0.2;
      font-size: 18px;
      font-weight: bold;
      color: transparent;
      transition: opacity .3s .1s ease-in-out;
    }
  }

  & > .text {
    margin-left: 10px;
    font-size: $font-size-xs;
  }

  & > .input + .check { transition: background-color .6s ease; }

  & > .input:checked + .check {
    background-color: $positive-color;
    animation: check;

    & > .icon {
      opacity: 1;
      color: white;
      transform: scale(0);
      animation: icon .3s ease-in-out .1s forwards;
    }
  }

  &.--is-checked {
    & > .check { border-color: $positive-color; }
  }

  &.--is-negative {
    & > .check { border-color: $negative-color; }
    & > .input:checked + .check { background-color: $negative-color; }
  }

  &.--is-disabled {
    & > .check { border-color: $neutral-dark-color; }
    & > .input:checked + .check { background-color: $neutral-dark-color; }
  }

  @keyframes check {
    0% { opacity: .3; }
    50% { opacity: .5; }
    100% { opacity: 1; }
  }

  @keyframes icon {
    from { opacity: 0; transform: scale(0.3); }
    to { opacity: 1; transform: scale(1) }
  }
}
</style>
