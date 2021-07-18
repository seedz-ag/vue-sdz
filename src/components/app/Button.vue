<template>
  <button :class="classes" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    variant: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        [`btn btn-${this.variant}`]:true,
        'block w-full': this.block
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  padding: 10px 20px;
  outline: none !important;

  &:hover,
  &:active,
  &:focus {
    outline: none !important;
  }

  &-primary {
    background-color: var(--clr-primary);
    color: #fff;
  }
  &-secondary {
    background-color: var(--clr-secondary);
    color: #fff;
  }

  &.large {
    font-size: 18px;
    padding: 15px 38px;
  }
  &.small {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>