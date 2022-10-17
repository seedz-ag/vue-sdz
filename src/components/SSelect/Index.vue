<template>
  <s-input-container v-bind="$attrs" :class="containerClasses">
    <div class="select">
      <div class="field" :tabindex="tabindex" @click.capture="openingHandler" v-click-outside="outside">
        <!-- if multiple === true  -->
        <div class="selections">
          <span
            v-for="(option, index) in values"
            :key="index"
            class="selected"
            @click.stop="removeSelected(index)"
          >
            {{ values[index] }}
          </span>

          <!--
            @focus="focused = true"
            @blur="focused = false"
          -->
          <input
            ref="searchable"

            :placeholder="placeholder"
            :class="['input', { '--placeholder': !value && !searchQuery && placeholder }]"
            :value="searchQuery || value[displayBy]"

            @input="onSearch"
            @keyup.esc.passive="escHandler"
            @keydown.tab.stop.self="escHandler"
            @keydown.self.up.prevent="pointerBackward"
            @keydown.self.down.prevent="pointerForward"
            @keydown.enter.tab.stop.self="addPointerElement"
          >
        </div>

        <s-icon class="icon" icon="mdi:chevron-down" />
      </div>

      <div class="items">
        <slot :options="options" name="options">
          <s-collapsible
            no-header

            :height="contentHeight"
            :is-opened="!!(isOpened && options.length)"

            @target="target => contentHeight = (target.childElementCount) * 50"
          >
            <div
              v-for="(option, index) in options"
              :key="index"
              :class="itemClasses(option, index)"

              aria-hidden="true"

              @click.stop="selected = { option, index }"
              @mouseenter.self="pointerSet(index)"
            >
              <slot :option="option" name="option">
                <div class="option-container">
                  <span class="text">{{ option[displayBy] }}</span>

                  <span class="disclaimer">
                    {{ !isSelected(option, index) ? optionSelectPlaceholder : optionUnselectPlaceholder }}
                  </span>
                </div>
              </slot>
            </div>
          </s-collapsible>
        </slot>
      </div>
    </div>
  </s-input-container>
</template>

<script>
import SIcon from '../SIcon/Index.vue'
import SCollapsible from '../SCollapsible/Index.vue'
import SInputContainer from '../SInputContainer/Index.vue'

import Pointer from './mixins/pointer'
import Searchable from './mixins/searchable'

import clickOutside from '../../directives/clickOutside'

import utils from 'utils-sdz'

export default {
  components: { SIcon, SCollapsible, SInputContainer },

  directives: clickOutside,

  mixins: [ Pointer, Searchable ],

  props: {
    larger: Boolean,

    small: Boolean,

    value: [ Object, Array ],

    items: { type: Array, required: true },

    tabindex: { type: Number, default: 0 },

    trackBy: { type: String, required: true },

    displayBy: { type: String, required: true },

    multiple: Boolean,

    disabled: Boolean,

    placeholder: String,

    hideSelected: Boolean,

    optionSelectPlaceholder: String,

    optionUnselectPlaceholder: String,

    clearOnSelect: { type: Boolean, default: true }
  },

  data () {
    return {
      // focused: false,
      isOpened: false,
      contentHeight: null
    }
  },

  computed: {
    error () {
      if (!this.trackBy) return 'You need to set trackBy.'

      if (this.multiple && !Array.isArray(this.value)) return 'Value must be a array'

      if (!this.items.some(item => typeof item === 'object')) return 'You need to set displayBy.'

      return ''
    },

    containerClasses () {
      return [ 's-select',
        {
          '--is-opened': this.isOpened,
          '--is-disabled': this.disabled,
          '--is-larger': this.larger,
          '--is-small': this.small,
          '--is-multiple': this.multiple,
          // '--is-focused': this.focused || this.searchQuery,
          '--is-empty-search': this.searchQuery && !this.options?.length
        }
      ]
    },

    // multiple = true
    values () {
      if (!this.multiple || !this.value?.length) return []

      return this.value.map(value => value[this.displayBy])
    },

    // multiple = false
    options () {
      if (this.error) return []
      if (!this.searchQuery) return this.items

      return this.items.filter(data => {
        const item = data[this.displayBy]

        return typeof item === 'string'
          ? utils.matches(this.searchQuery.toLowerCase(), item.toLowerCase())
          : utils.matches(this.searchQuery.toString().toLowerCase(), item.toString().toLowerCase())
      })
    },

    selected: {
      get () {
        if (this.disabled) return []
        if (this.multiple) return this.values

        return this.value
      },

      set ({ option, index }) {
        if (!this.options?.length) return
        if (index < 0) return this.outside() // invalid search

        const types = {
          'simple-selected': () => this.clearOnSelect ? {} : option,
          'simple-not-selected': () => option,
          'multiple-selected': () => this.value.filter(value => !this.clearOnSelect || !this.isEqual(value, option)),
          'multiple-not-selected': () => [ ...this.value, option ]
        }

        const type = this.getPayloadType(option)

        this.emit(types[type]())
      }
    }
  },

  methods: {
    itemClasses (option, index) {
      return ['item',
        {
          '--active': index === this.pointer,
          '--selected': this.isSelected(option)
        }
      ]
    },

    openingHandler () {
      this.isOpened = !this.isOpened

      this.setFocus()
    },

    escHandler () {
      if (this.isOpened) this.outside()
    },

    getPayloadType (option) {
      if (this.multiple) return this.isSelected(option)
        ? 'multiple-selected'
        : 'multiple-not-selected'

      if (this.isSelected(option)) return 'simple-selected'

      return 'simple-not-selected'
    },

    emit (payload) {
      this.outside()
      this.$emit('input', payload)
    },

    removeSelected (index) {
      this.emit(this.value.filter((_, _index) => !Object.is(_index, index)))
    },

    isEqual (v1, v2) {
      return v1?.[this.trackBy] === v2?.[this.trackBy]
    },

    isSelected (option) {
      if (this.multiple) {
        return this.value.some(v => this.isEqual(v, option))
      }

      return this.isEqual(this.value, option)
    },

    outside () {
      this.isOpened = false
      this.focused = false
      this.unsetFocus()

      this.searchQuery = ''
      this.pointerReset()
    },

    setFocus () {
      this.$refs.searchable.focus()
    },

    unsetFocus () {
      this.$refs.searchable.blur()
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-select {
  width: 100%;

  & > .select {
    margin-top: 8px;

    & > .field {
      width: 100%;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 36px;
      font-size: $font-size-xs;
      background-color: color(neutral, base);

      border-radius: $border-radius-md;
      border: 1px solid color(base, light);

      transition: border-radius .3s ease-in-out,
                  border-color .3s ease-in-out,
                  box-shadow .3s ease-in-out;

      // &:hover,
      &:active,
      &:focus {
        border-color: color(primary, base);
        box-shadow: 0 0 0 0 color(primary, base);
      }

      & > .selections {
        width: 100%;
        margin: 10px;

        grid-gap: 10px;

        display: flex;
        flex-wrap: wrap;

        & > .selected {
          position: relative;

          cursor: pointer;
          max-height: 30px;
          color: $neutral-color;
          border-radius: $border-radius-md;
          background-color: color(primary, base);
          padding: { left: 10px; right: 35px; top: 2px; bottom: 2px; }

          &:after {
            position: absolute;
            content: 'x';
            right: 10px;
            bottom: 2px;
          }
        }

        & > .input {
          width: 100%;
          border: unset;
          outline: none;
          color: color(base, base);
          font-size: $font-size-xxs;

          &.--placeholder {
            font-size: $font-size-xxs;
            color: color(base, light);
          }
        }
      }

      & > .icon {
        margin-right: 10px;
        transition: transform .3s ease;
      }
    }

    & > .items {
      z-index: 0;
      width: 100%;
      margin-top: 12px;
      max-height: 300px;
      border-radius: $border-radius-md;
      background-color: color(neutral, base);

      position: absolute;
      left: 0;

      border-top: none;
      box-shadow:none;

      & > .s-collapsible > .wrapper {
        box-shadow: $shadow-2;
        transition: opacity .3s ease-in-out,
                    height .3s ease-in-out !important;
        border-radius: 8px;

        & > .item {
          display: flex;
          cursor: pointer;
          min-height: 50px;
          align-items: center;
          background-color: color(neutral, base);

          &.--selected { font-weight: 700; }
          &.--active { background-color: color(primary, base); }

          &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }

          & > .option-container {
            display: flex;
            justify-content: space-between;

            width: 100%;
            font-size: $font-size-xxs;

            & > .text { padding-left: 10px; }
            & > .disclaimer { padding-right: 10px; font-style: italic; }
          }
        }
      }
    }
  }

  & > .label {
    pointer-events: none;
    color: color(base, base);
    font-size: $font-size-xs;
    font-family: $font-family;
    font-weight: $font-weight-regular;
    transition: font-size .3s, transform .3s;
  }

  &.--is-small > .select > .field { height: 28px; }

  &.--is-larger > .select > .field { height: 52px; }

  &.--is-multiple > .select > .field { height: unset; }

  &.--is-opened {
    & > .select {
      & > .field {
        border: 1px solid color(primary, base);

        &:hover { box-shadow: unset; }

        & > .icon { transform: rotate(-180deg); }
      }

      & > .items { z-index: $z-index-3; }
    }
  }

  &.--is-disabled {
    cursor: default;
    pointer-events: none;

    & > .select > .field {
      border-color: color(neutral, dark);
      background-color: color(neutral, light);
      pointer-events: none;

      & > .icon { color: color(base, light); }
      & > .selections > .input { background-color: transparent; color: color(base, light); }
    }
  }

  &.--has-error > .select > .field {
    border-bottom: 2px solid color(primary, base);
    border-bottom-left-radius: $border-radius-md;
    border-bottom-right-radius: $border-radius-md;
  }

  &.--is-empty-search > .select > .field {
    border-bottom: 2px solid color(primary, base);
    border-bottom-left-radius: $border-radius-md;
    border-bottom-right-radius: $border-radius-md;
  }
}
</style>
