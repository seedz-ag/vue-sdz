<template>
  <ul class="s-sidebar-item">
    <li :class="itemClasses(item, index)">
      <div class="content" @click="onActiveItem(item, index)">
        <span v-if="item.icon" class="icon">{{ item.icon }}</span>
        <span class="name">{{ item.name }}</span>
        <span v-if="item.child" class="action">-</span>
      </div>

      <s-collapsible no-header :is-opened="activeItem === index">
        <li
          v-for="(child, childIndex) in item.child"
          :key="childIndex"
          :class="childClasses(child, childIndex)"
        >
          <div class="content" @click="onActiveChild(child, childIndex)">
            <span class="name">{{ child.name }}</span>
          </div>
        </li>
      </s-collapsible>
    </li>
  </ul>
</template>

<script>
import SCollapsible from '../SCollapsible/Index.vue'

export default {
  name: 'SSidebarItem',

  components: { SCollapsible },

  props: {
    item: {
      type: Object,
      required: true
    },

    activeChildren: {
      type: Array,
      required: true,
    },

    index: Number,

    activeItem: Number,

    activeChild: Number
  },

  methods: {
    disabledClass (item) {
      return { '--is-disabled': item.disabled }
    },

    itemClasses (item, index) {
      return [
        'item',
        this.disabledClass(item),
        { '--is-active-item': this.activeItem === index }
      ]
    },

    childClasses (item, index) {
      return [
        'item-child',
        this.disabledClass(item),
        { '--is-active-child': this.activeChild === index }
      ]
    },

    onActiveItem (item, index) {
      if (item.disabled) return
      if (item.child && this.activeItem === index) return this.$emit('active-item', null)

      this.$emit('active-item', index)
      this.$emit('active-child', null)
      this.$emit('redirect', item.redirect)
    },

    onActiveChild (item, index) {
      if (item.disabled) return

      this.$emit('active-child', index)
      this.$emit('redirect', item.redirect)
    }
  }
}
</script>

<style lang="scss">
%sidebar-item {
  margin: 5px 10px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;

  & > .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 40px;

    & > .icon {
      margin-right: 30px;
    }

    & > .name {
      width: 100%;
      color: white;
      font-size: 14px;
      font-weight: 400;
      font-family: Roboto, sans-serif;
    }

    & > .action {}
  }
}

.s-sidebar-item {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  transition: height .3s ease-in-out;

  & > .item {
    @extend %sidebar-item;

    & > .s-collapsible {
      padding: 0;

      & > .wrapper {
        & > .item-child {
          @extend %sidebar-item;
        }

        & > .--is-active-child { background-color: #299d8d; }
      }
    }
  }

  & > .--is-active-item { background-color: #004a4f; }

  & > .--is-disabled {
    cursor: not-allowed;
    background-color: #868e96;
  }
}
</style>
