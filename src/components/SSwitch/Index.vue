<template>
  <label :class="classes">
    <input
      class="input"
      type="checkbox"

      :checked="value"
      :disabled="disabled"

      @input="ev => $emit('input', ev.target.checked)"
    >

    <span class="switch" />

    <span class="text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'SSwitch',

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
      return ['s-switch', {
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

.s-switch {
  display: flex;
  position: relative;


  & > .input { display: none; }

  & > .switch {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: border-width .1s ease;
    width: 40px;
    height: 24px;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-width: 2px;
    border-style: solid;
    border-radius: $border-radius-lg;
    border-color: color(base, light);

    background-color: color(neutral, base);
    -webkit-transition: .4s;
    transition: .4s;
  }

  & > .switch:before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: color(base, light);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: $border-radius-circular;
  }

  & > .text {
    margin-left: 8px;
    font-size: $font-size-xs;
  }

  input:checked + .switch {
    background-color: color(primary, base);
    border-color: color(primary, base);
  }

  & > input:checked + .switch:before {
    background-color: color(neutral, base);
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  & .input:focus + .switch {
    box-shadow: 0 0 1px #2196F3;
  }

  &.--is-disabled {
    cursor: not-allowed;

    & > .switch {
      border-color: color(neutral, dark);
      cursor: not-allowed;

      &:before {
        background-color: color(neutral, dark);
      }
    }

    & > .input:checked + .switch {
      background-color: color(neutral, dark);
      border-color: color(neutral, dark);
    }
  }

  @keyframes check {
    0% { opacity: $opacity-medium; }
    50% { opacity: $opacity-intense; }
    100% { opacity: 1; }
  }

}
</style>
