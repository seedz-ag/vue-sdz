<template>
  <component
    :is="type"
    :to="to || null"
    :href="external && to"
    :target="external && '_blank'"

    v-bind="$attrs"

    class="c-link"

    v-on="$listeners"
  >
    <!-- @slot The text/label of the link -->
    <slot />
  </component>
</template>

<script>

/**
 * Generic link component.
 */
export default {
  name: 'SLink',

  props: {
    /**
     * The link's path, can be either an external URL or the path to an
     * internal route in the app (must follow the vue-router api).
     */
    to: {
      type: [String, Object],
      default: () => null
    },

    link: Boolean,

    /**
     * Whether the link is external or not
     */
    external: {
      type: Boolean,
      default: false
    },

    /**
     * Whether to use the nuxt component for route links.
     */
    nuxt: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    type () {
      if (this.link) return 'a'

      return !this.to
        ? 'button' : this.external
          ? 'a' : this.nuxt
            ? 'nuxt-link' : 'router-link'
    }
  }
}
</script>
