<template>
  <div class="s-search">
    <div
      ref="toggleActions"
      class="options"
      tabindex="0"

      @click="showCategories = !showCategories"
    >
      <!-- @focusout="showCategories = false" -->
      <span class="category">{{ selectedCategory || categories[0] }}</span>

      <s-icon :class="{ '--is-opened': showCategories }" icon="mdi:chevron-down" />
    </div>

    <s-input icon="search" v-bind="$attrs" v-on="$listeners" />

    <s-popover
      v-if="showCategories"

      class="popover"

      :target="$refs['toggleActions']"

      v-bind="$listeners"
      v-on="$listeners"
    >
      <div class="categories">
        <div
          v-for="category in categories"
          :key="category"

          class="category"

          @click="setCategory(category)"
        >
          {{ category }}
        </div>
      </div>
    </s-popover>
  </div>
</template>

<script>
import SIcon from '../../../src/components/SIcon/Index.vue'
import SInput from '../../../src/components/SInput/Index.vue'
import SPopover from '../../../src/components/SPopover/Index.vue'

import clickOutside from '../../../src/directives/clickOutside.js'

export default {
  name: 'SSearch',

  components: { SIcon, SInput, SPopover },

  directives: { clickOutside },

  props: {
    categories: Array
  },

  data () {
    return {
      selectedCategory: null,
      showCategories: false
    }
  },

  methods: {
    setCategory (category) {
      this.selectedCategory = category
      this.showCategories = false
      this.$emit('category', category)
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-search {
  display: flex;
  align-items: center;

  & > .options {
    position: relative;

    display: flex;
    align-items: center;

    height: 36px;
    padding: 15px;
    cursor: pointer;

    border-width: 1px;
    border-style: solid;
    border-radius: $border-radius-sm;
    border-color: color(base, light);

    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    &::after {
      content: '';

      right: 0;
      top: 2px;
      position: absolute;

      height: 30px;
      border-right: 1px solid color(base, light);
    }

    & > .category {
      padding-right: 10px;
      font-size: $font-size-xxs;
    }

    & > .icon {
      transition: transform .3s;
      &.--is-opened { transform: rotate(-180deg); }
    }
  }

  & > .s-input {
    width: 100%;

    & > .input {
      text-indent: 0;
      padding-right: 50px;

      border-left-style: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    & > .icon {
      left: unset;
      right: 15px;

    }

    &:focus-within {
      & > .icon { color: unset !important; }

      & > .input {
        border-width: 1px;
        border-style: solid;
        border-left-style: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-color: color(base, light);
      }
    }
  }

  & > .popover {
    background: color(neutral, base);

    & > .categories {
      & > .category {
        cursor: pointer;
        padding: 10px 25px;

        &:hover { background: color(neutral, light); }
        &:not(:last-child) { border-bottom: 1px solid color(base, light); }
      }
    }
  }
}
</style>
