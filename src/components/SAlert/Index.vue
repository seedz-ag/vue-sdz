<template>
  <div :class="classes">
    <div class="header">
      <slot name="header">{{ header }}</slot>
    </div>

    <div class="msg">
      <slot name="msg">{{ msg }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SAlert',

  props: {
    msg: String,

    header: String,

    positive: Boolean,

    negative: Boolean
  },

  computed: {
    classes () {
      return ['s-alert',
        {
          '--is-positive': this.positive,
          '--is-negative': this.negative
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-alert {
  padding: 16px;
  max-width: 335px;
  text-align: center;
  border-radius: $border-radius-sm;

  & > .header {
    padding-bottom: 5px;
    font-size: $font-size-xxxs;
    font-weight: $font-weight-bold;
  }

  & > .msg { font-size: $font-size-xxxs; }

  &.--is-positive {
    color: color(positive, base);
    background: color(positive, light);
  }

  &.--is-negative {
    color: color(negative, base);
    background: color(negative, light);
  }
}
</style>
