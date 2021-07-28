<template>
  <component
    :is="'componentX'"

    class="foo"
    a-custom-prop="value"

    z-prop="Z"
    boolean-prop

    :another-custom-prop="value"
    :blue-color="false"
    :class="bar"

    @[c]="functionCall"
    @change="functionCall"
    @click="functionCall"
    @input="functionCall"

    v-text="textContent"
  />
</template>

<script>
export default {
  name: 'SCard',

  functional: false,

  components: {},

  mixins: [],

  inheritAttrs: false,

  propsData: {},

  props: {
    a: {
      type: String,
      required: true
    }
  },

  data () {
    return {}
  },
  watch: {},
  renderError () {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  computed: {},
  methods: {},
  render: () => ({}),
  beforeUnmount () {},
  unmounted () {}
}
</script>

<style lang="scss">
.c-card { background: red; }
</style>
