<template>
  <div class="s-sidebar">
    <nav class="s-sidebar-nav">
      <ul class="s-sidebar-list">
        <li
          :key="i"
          v-for="i in 6"
          class="item"
          :class="`${i === 5 ? 'active' : ''}`"
        >
          <div class="icon">
            i
          </div>
          <span>
            Components
          </span>
        </li>
      </ul>
      <slot name="brand" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SSidebar',
  props: {
    menu:  {
      type: Array,
      required: true
    },
    brand: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.s-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.12);
  width: 282px;
  height: 100vh;
  font-family: sans-serif;

  &-nav {
    width: 92px;
    border-right: 1px solid #F2F2F2;
    height: 100%;
  }

  &-list {
    padding: 0;
    margin: 0;
    & > .item {
      list-style: none;
      text-align: center;
      margin: 15px 0;
      cursor: pointer;
      position: relative;
      span {
        text-transform: uppercase;
        font-size: 10px;
        display: inline-block;
        margin: 8px 0;
        color: #567D7C;
      }
      &.active, &:hover {
        .icon {
          background-color: #3E6873;
          color: #FFF;
        }
      }
      &.active {
        &::before {
          content: "";
          background-color: #DCC635;
          position: absolute;
          border-radius: 0 4px 4px 0;
          height: 48px;
          width: 4px;
          left: 0;
        }
      }
      .icon {
        background-color: #EEE;
        color: #567D7C;
        border-radius: 50%;
        height: 48px;
        width: 48px;
        line-height: 48px;
        margin: 0 auto;
        transition: all 300ms ease;
      }
    }
  }

  &-brand {
    border-top: 1px solid #F2F2F2;
  }
}
</style>
