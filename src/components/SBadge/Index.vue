<template>
  <div class="s-badge">
    <div :class="classes">{{ content }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SBadge',

  props: {
    primary: {
      type: Boolean,
      default: true
    },

    dot: Boolean,

    icon: String,

    content: String

  },

  computed: {
    classes () {
      return [ 'content',
        {
          '--dot': this.dot,
          '--primary': this.primary
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-badge {
  color: color(base, light);
  position: relative;

  & > .content {
    position: absolute;
    right: -12px;
    top: -11px;
    padding: 3px 8px;
    border-radius: 50px;

    font-size: 12px;
    line-height: 15px;
    font-weight: 500;

    &.--dot{
      height: 8px;
      width: 8px;
      padding: unset;
      top: 0;
      right: -2px;
    }

    &.--primary{
      background: color(highlight, base);
    }
  }
}
</style>
