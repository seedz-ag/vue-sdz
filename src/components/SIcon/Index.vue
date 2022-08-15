<template>
  <!-- https://docs.iconify.design/icon-components/vue2/dimensions.html -->
  <icon
    :icon="icon"
    :class="classes"
    :width="size"
    :height="size"

    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
// https://github.com/antfu/unplugin-icons/issues/5
// unplugin-icon limitation: designed to be used statically
// because of that it had to be combined with @iconify/vue2
import { listIcons , Icon } from '@iconify/vue2'

export default {
  name: 'SIcon',

  components: { Icon },

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

  created () {
    console.log(listIcons())
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
