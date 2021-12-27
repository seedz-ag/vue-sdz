<template>
  <div class="s-badge">
    <div v-if="status === 'alert' " class="--is-alert">
      <slot />
    </div>
    <div v-if="status === 'number'" class="--is-alert-number">
      <slot /><div class="--is-number">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SBadge',

  props: {
    status: {
      type: String,
      validator: function (value) {
        return ['alert', 'number'].indexOf(value) !== -1
      },
      default: 'alert'
    },

    number: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-badge {
  color: color(base, light);
  position: relative;

  & > .--is-alert{
    &::after{
      content: '';
      position: absolute;
      right: 0px;
      top: -2px;
      height: 8px;
      width: 8px;
      background: color(highlight, base);
      border-radius: 50px;
    }
  }

  & > .--is-alert-number > .--is-number{
    position: absolute;
    right: -12px;
    top: -11px;
    padding: 3px 8px;
    background: color(highlight, base);
    border-radius: 50px;

    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
  }
}
</style>
