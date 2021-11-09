<template>
  <i
    :class="classes"
    :style="{ 'font-size': size + 'px' }"
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
      default: 20
    },

    disabled: Boolean,

    primaryColor: Boolean,

    secondaryColor: Boolean
  },

  computed: {
    classes () {
      return [
        `s-icon icon ${this.icon}`,

        {
          '--disabled': this.disabled,
          '--primary': this.primaryColor,
          '--secondary': this.secondaryColor
        }
      ]
    }
  }

  // methods: {
  //   getImage () {
  //     return new URL(`../../assets/icons/${this.icon}.svg`, import.meta.url).href
  //   }
  // }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-icon {
  display: inline-block;

  &.--disabled {
    color: transparent;
    background-clip: text;
    background: color(neutral, dark);
    -webkit-background-clip: text;
  }

  &.--primary { color: color(primary, base); }
  &.--secondary { color: color(secondary, base); }
}
</style>
