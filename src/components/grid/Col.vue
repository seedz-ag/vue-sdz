<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    cols: {
      type: String,
      default: ''
    },
    col: {
      type: String,
      default: ''
    },
    sm: {
      type: String,
      default: ''
    },
    md: {
      type: String,
      default: ''
    },
    lg: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.breakpoint, 'teste')
  },
  computed: {
    classes() {
      return {
        'max-w-full relative px-3' : true,
        [`sm:w-${this.calculateW(this.sm)}`] : this.sm,
        [`md:w-${this.calculateW(this.md)}`] : this.md,
        [`lg:w-${this.calculateW(this.lg)}`] : this.lg
      }
    }
  },
  methods: {
    calculateW(value) {
      if (value === '12') {
        return 'full'
      }
      return value + '/12'
    }
  }
}
</script>
