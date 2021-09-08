<template>
  <div class="s-sidebar">
    <slot name="header" />

    <ul class="item-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="itemClasses(item, index)"
      >
        <div class="content" @click="onActiveItem(item, index)">
          <span v-if="item.icon" class="icon">{{ item.icon }}</span>
          <span class="name">{{ item.name }}</span>
          <span class="action">-</span>
        </div>

        <ul
          :style="{ height: getListHeight(index) }"
          class="item-list"
        >
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

    <slot name="footer" />

    <!-- <button>X</button> -->
  </div>
</template>

<script>
export default {
  name: 'SSidebar',

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
    },

    itemsSize () {
      const margin = 10
      const items = this.activeChildren.length * 40

      return (items + margin) + 'px'
    }
  },

  methods: {
    itemClasses (item, index) {
      return ['item', {
        '--is-disabled': item.disabled,
        '--is-active-item': this.activeItem === index
      }]
    },

    childClasses (item, index) {
      return ['item', {
        '--is-disabled': item.disabled,
        '--is-active-child': this.activeChild === index
      }]
    },

    onActiveItem (item, index) {
      if (item.disabled) return
      if (item.child && this.activeItem === index) return this.activeItem = null

      this.activeItem = index
      this.activeChild = null
    },

    onActiveChild (item, index) {
      if (item.disabled) return

      this.activeChild = index
    },

    getListHeight (index) {
      return this.activeChildren.length && this.activeItem === index
        ? this.itemsSize
        : 0
    }
  }
}
</script>

<style lang="scss">
.s-sidebar {
  left: 0;
  position: absolute;

  width: 100%;
  max-width: 285px;
  background-color: #3a7b80;

  display: flex;
  flex-direction: column;

  .item-list {
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

      & > .item-list {
        padding: 0;

        & > .--is-active-child {
          background-color: #299d8d;
        }
      }
    }

    & > .--is-active-item {
      background-color: #004a4f;
    }

    & > .--is-disabled {
      cursor: not-allowed;
      background-color: #868e96;
    }
  }
}
</style>
