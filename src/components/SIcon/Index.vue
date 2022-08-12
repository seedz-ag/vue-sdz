<template>
  <component
    :is="`icon-mdi:${icon}`"
    :class="classes"
    :width="size"
    :height="size"

    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'SIcon',

  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 24
    },

    disabled: Boolean,

    primaryColor: Boolean,

    secondaryColor: Boolean
  },

  computed: {
    classes () {
      return [
        's-icon',
        {
          '--disabled': this.disabled,
          '--primary': this.primaryColor,
          '--secondary': this.secondaryColor
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-icon {
  display: inline-block;

  &.--disabled {
    fill: color(neutral, dark);

    & > * { stroke: color(neutral, dark); }
  }

  &.--primary {
    fill: color(primary, base);

    & > * { stroke: color(primary, base); }
  }

  &.--secondary {
    fill: color(secondary, base);

    & > * { stroke: color(secondary, base); }
  }
}
</style>
