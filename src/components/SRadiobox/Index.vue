<template>
  <label :class="classes">
    <input
      class="input"
      type="radio"

      :checked="value"
      :disabled="disabled"
      :name="name"
      
      @change="$emit('change', value)"
    >

    <span class="radio" />

    <span class="text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'SRadiobox',

  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    value: {
      type: String,
      required: true
    },

    label: String,

    negative: Boolean,

    disabled: Boolean,
    
    name: String
  },

  computed: {
    classes () {
      return ['s-radiobox', {
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

.s-radiobox {
  display: flex;
  align-items:center;
  margin: 4px 0;
  & > .input { display: none; }

  & > .radio {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: border-width .1s ease;

    border-width: 1px;
    border-style: solid;
    border-radius: $border-radius-circular;
    border-color: color(neutral, light);

    background-color: color(neutral, base);

    &:hover {
      border-width: 2px;
      border-color: color(positive, base);
    }
  }

  & > .text {
    margin-left: 10px;
    font-size: $font-size-xs;
  }

  & > .input + .radio { transition: background-color .6s ease; }

  & > .input:checked + .radio {
    animation: check;
    background-color: color(neutral, base);

    border-width: 7px;
    border-style: solid;
    border-color: color(primary, base);
  }

  &.--is-checked {
    & > .radio { border-color: color(positive, base); }
  }

  &.--is-negative {
    & > .radio { border-color: color(negative, base); }
    & > .input:checked + .radio { border: color(negative, base) 7px solid; }
  }

  &.--is-disabled {
    & > .radio { border-color: color(neutral, light); }
    & > .input:checked + .radio { background-color: color(neutral, light); }
  }

  @keyframes check {
    0% { opacity: $opacity-medium; }
    50% { opacity: $opacity-intense; }
    100% { opacity: 1; }
  }

}
</style>
