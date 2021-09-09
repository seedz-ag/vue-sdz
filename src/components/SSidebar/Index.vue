<template>
  <div class="s-sidebar">
    <slot name="header" />

    <s-sidebar-item
      v-for="(item, index) in items"
      v-bind="$attrs"

      :key="index"
      :item="item"
      :index="index"
      :active-item="activeItem"
      :active-child="activeChild"
      :active-children="activeChildren"

      v-on="$listeners"
      @active-item="index => activeItem = index"
      @active-child="index => activeChild = index"
    />

    <slot name="footer" />

    <!-- <button>X</button> -->
  </div>
</template>

<script>
import SSidebarItem from './Item.vue'

export default {
  name: 'SSidebar',

  components: { SSidebarItem },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      activeItem: null,
      activeChild: null
    }
  },

  computed: {
    activeChildren () {
      const activeItem = this.items.find(({ child }, index) => index === this.activeItem && child)

      if (!activeItem) return []

      return activeItem.child
    }
  }
}
</script>

<style lang="scss">
.s-sidebar {
  left: 0;
  position: absolute;

  width: 100%;
  height: 100%;
  max-width: 285px;
  background-color: #3a7b80;

  display: flex;
  flex-direction: column;
}
</style>
