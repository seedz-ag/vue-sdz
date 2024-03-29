<template>
  <s-input-container v-bind="$attrs" class="s-radio-group-container">
    <div :class="classes">
      <label
        v-for="(option, index) in options"
        :key="index"
        :class="getClasses(option)"
        @click.prevent="!option.disabled && emit(option)"
      >
        <input
          type="radio"
          class="input"
          :value="option.value"
          :disabled="option.disabled"
          :checked="option.value === value"
        >
  
        <span class="radio" />
  
        <span class="text">{{ option.label }}</span>
      </label>
    </div>
  </s-input-container>
</template>

<script>
import SInputContainer from '../SInputContainer/Index.vue'

export default {
  name: 'SRadioGroup',

  components: {
    SInputContainer,
  },

  model: {
    prop: 'checked',
    event: 'input'
  },

  props: {
    value: String,

    options: {
      type: Array,
      required: true
    },

    row: Boolean,
  },

  computed: {
    classes () {
      return ['s-radio-group', { '--is-row': this.row }]
    }
  },

  methods: {
    getClasses ({ disabled, negative }) {
      return ['s-radio', {
        '--is-negative': negative,
        '--is-disabled': disabled
      }]
    },

    emit (option) {
      this.$attrs.onInput?.(option.value)
      this.$emit('input', option.value)
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-radio-group-container {
  & .label {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    pointer-events: none;
    color: color(base, base);
    font-size: $font-size-xs;
    font-family: $font-family;
    font-weight: $font-weight-regular;
    transition: font-size .3s, transform .3s;
  }

  & .s-radio-group {
    display: flex;
    flex-direction: column;
  
    & > .s-radio {
      display: flex;
      align-items:center;
  
      &:not(:last-child) { margin-bottom: 10px; }
  
      & > .input { display: none; }
  
      & > .radio {
        display: flex;
        align-items: center;
        justify-content: center;
  
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: border-width .1s ease;
  
        border-width: 2px;
        border-style: solid;
        border-color: color(base, light);
        border-radius: $border-radius-circular;
  
        &:hover {
          border-width: 2px;
          border-color: color(base, light);
        }
      }
  
      & > .text {
        margin-left: 8px;
        font-size: $font-size-xs;
      }
  
      & > .input + .radio { transition: background-color .6s ease; }
  
      & > .input:checked + .radio {
        animation: check;
        background-color: color(neutral, base);
  
        border-width: 7px;
        border-style: solid;
        border-color: color(primary, light);
      }
  
      &.--is-negative {
        & > .text { border-color: color(negative, base); }
        & > .radio { border-color: color(negative, base); }
        & > .input:checked + .radio { border-color: color(negative, base); border: 7px solid; }
      }
  
      &.--is-disabled {
        & > .text { border-color: color(neutral, dark); }
        & > .radio { border-color: color(neutral, dark); cursor: not-allowed; }
        & > .input:checked + .radio { border-color: color(neutral, dark); cursor: not-allowed; }
      }
  
      @keyframes check {
        0% { opacity: $opacity-medium; }
        50% { opacity: $opacity-intense; }
        100% { opacity: 1; }
      }
    }
  
    &.--is-row {
      flex-direction: row;
  
      & > .s-radio {
        margin-bottom: 10px;
        &:not(:last-child) { margin-right: 15px; }
      }
    }
}
}
</style>
