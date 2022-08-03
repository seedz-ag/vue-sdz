<template>
  <component
    :is="`sdz-${icon}`"
    :class="classes"
    :width="size"
    :height="size"
    :view-box="`0 0 ${size} ${size}`"

    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
const loadIcons = data => data.reduce((acc, icon) => {
  acc[`sdz-${icon}`] = () => import(`../../assets/icons/${icon}.svg`)

  return acc
}, {})

const paths = import.meta.importGlob('../../assets/icons/*.svg')

const files = Object
  .keys(paths)
  .map(path => path
    .split('/')
    .at(-1)
    .split('.')
    .shift()
  )

console.log('icons: ',loadIcons(files))

export default {
  name: 'SIcon',

  components: { ...loadIcons(files) },

  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 50
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
    color: color(neutral, dark);;
    //background-clip: text;
    //background: color(neutral, dark);
    //-webkit-background-clip: text;
  }

  &.--primary { color: color(primary, base); }
  &.--secondary { color: color(secondary, base); }
}
</style>
