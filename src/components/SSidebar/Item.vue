<template>
  <ul class="s-sidebar-item">
    <li :class="itemClasses(item, index)">
      <div class="content" @click="onActiveItem(item, index)">
        <span v-if="item.icon" class="icon">{{ item.icon }}</span>
        <span class="name">{{ item.name }}</span>
        <span v-if="!item.child" class="action">-</span>
      </div>

      <ul :style="{ height: getListHeight(index) }" class="s-sidebar-item">
        <li
          v-for="(child, childIndex) in item.child"
          :key="childIndex"
          :class="childClasses(child, childIndex)"
        >
          <div class="content" @click="onActiveChild(child, childIndex)">
            <span class="name">{{ child.name }}</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SSidebarItem',

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
    activeChild: Number,
  },

  computed: {
    itemsSize () {
      const items = this.activeChildren.length * 40
      const margin = (this.activeChildren.length + 1) * 10

      return (items + margin) + 'px'
    }
  },

  methods: {
    defaultClasses (item) {
      return ['item', { '--is-disabled': item.disabled }]
    },

    itemClasses (item, index) {
      return [
        ...this.defaultClasses(item),
        { '--is-active-item': this.activeItem === index }
      ]
    },

    childClasses (item, index) {
      return [
        ...this.defaultClasses(item),
        { '--is-active-child': this.activeChild === index }
      ]
    },

    onActiveItem (item, index) {
      if (item.disabled) return
      if (item.child && this.activeItem === index) return this.$emit('active-item', null)

      this.$emit('active-item', index)
      this.$emit('active-child', null)
    },

    onActiveChild (item, index) {
      if (item.disabled) return

      this.$emit('active-child', index)
    },

    getListHeight (index) {
      if (!this.activeChildren.length || this.activeItem !== index) return 0

      return this.itemsSize
    }
  }
}
</script>

<style lang="scss">
.s-sidebar-item {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  overflow: hidden;
  transition: height .3s ease-in-out;

  & > .item {
    margin: 0 10px;
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

    & > .s-sidebar-item {
      padding: 0;

      & .item { margin: 10px; }
      & > .--is-active-child { background-color: #299d8d; }
    }
  }

  & > .--is-active-item { background-color: #004a4f; }

  & > .--is-disabled {
    cursor: not-allowed;
    background-color: #868e96;
  }
}
</style>
