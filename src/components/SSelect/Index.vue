<template>
  <div :class="containerClasses">
    <div class="inner">
      <label v-if="label" class="label">
        {{ label }}
        <span v-if="required" class="required">*</span>
      </label>

      <div class="input" :tabindex="tabindex" @click.capture="openingHandler" v-click-outside="outside">
        <div
          v-for="(option, index) in selecteds"
          :key="index"
          ref="selectable"
          class="selectable"
          @click="removeSelected(index)"
        >
          <span v-if="option" class="selected">{{ selecteds[index] }}</span>
        </div>

        <input
          ref="searchable"
          :class="['selecteds', { '-placeholder': selected === placeholder || !selected }]"
          :value="searchableValue"
          @keydown.self.down.prevent="pointerForward"
          @keydown.self.up.prevent="pointerBackward"
          @keydown.enter.tab.stop.self="addPointerElement"
          @keydown.tab.stop.self="escHandler"
          @keyup.esc.passive="escHandler"
          @focus="focused = clearOnSelect"
          @blur="focused = false"
          @input="search"
        >
        <span class="icon">{{ isOpened ? '▼' : '▲' }}</span>
      </div>

      <div v-show="isOpened && options.length" class="items">
        <slot :options="options" name="options">
          <div
            v-for="(option, index) in options"
            :key="index"
            :class="itemClasses(option, index)"

            aria-hidden="true"

            @click.stop="selected = index"
            @mouseenter.self="pointerSet(index)"
          >
            <slot :option="option" name="option">
              <div class="option-container">
                <span class="text">{{ displayBy && option[displayBy] || option }}</span>
                <span class="disclaimer">
                  {{ !isSelected(option, index) ? optionSelectPlaceholder : optionUnselectPlaceholder }}
                </span>
              </div>
            </slot>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Pointer from './mixins/pointer'
import Searchable from './mixins/searchable'

import clickOutside from '../../directives/clickOutside'

import matches from '../../helpers/matches'

export default {
  directives: clickOutside,

  mixins: [ Pointer, Searchable ],

  props: {
    tabindex: { type: Number, default: 0 },

    value: [String, Object, Number, Array],

    items: { type: Array, required: true },

    placeholder: { type: String, default: 'Selecione uma opção' },

    optionSelectPlaceholder: { type: String, default: 'Press enter to select' },

    optionUnselectPlaceholder: { type: String, default: 'Press enter to unselect' },

    label: String,

    required: Boolean,

    validation: { type: [String, Boolean], required: false },

    display: String,

    displayBy: String,

    multiple: Boolean,

    hideSelected: Boolean,

    clearOnSelect: { type: Boolean, default: true },

    disabled: Boolean
  },

  data () {
    return {
      isOpened: false,
      focused: false
    }
  },

  computed: {
    errors () {
      if (!this.items.some(item => this.displayBy && typeof item === 'object')) return ['You need to set displayBy.']

      if (this.multiple && !Array.isArray(this.value)) return ['Value must be a array']

      if (this.validation) return [this.validation]

      return ''
    },

    containerClasses () {
      return [ 's-select',
        {
          '--is-opened': this.isOpened,
          '--is-disabled': this.disabled
        }
      ]
    },

    selecteds () {
      if (!this.multiple || (this.value && !this.value.length)) return []

      const defaultValue = this.value.filter(value => !!this.items.find(item => item !== value))

      return defaultValue.map(value => (this.display && value[this.display]) || value)
    },

    selected: {
      get () {
        if (this.multiple) return this.selecteds

        const value = this.items
          .find(v => v === (Array.isArray(this.value) && this.value && this.displayBy && this.value[this.displayBy]) || this.value)

        if (!value) return 'Opção inválida'

        if (this.displayBy && value[this.displayBy]) {
          return value[this.displayBy]
            ? value[this.displayBy]
            : process.env.NODE_ENV === 'development' ? 'error: displayBy prop does not exist' : ''
        } else {
          return this.value
        }
      },
      set (index) {
        // invalid search
        if (index < 0) {
          this.outside()
          return
        }

        // remove
        if (typeof index !== 'number') {
          this.$emit('input', index)
          this.outside()
          return
        }

        const options = this.hideSelected && !this.searchQuery
          ? this.hideSelecteds
          : !this.searchQuery ? this.items : this.options

        if (!options.length) return false

        const tracked = (options && this.display && options[index][this.display]) || options[index]

        if (this.multiple) {
          const value = v => ((this.display && v[this.display]) || v).toString()

          if (!this.validation) {
            const exists = v => value(v) === tracked.toString()
            const alreadyExist = this.value.find(exists)

            if (!alreadyExist) {
              this.outside()

              this.$emit('input', [ ...this.value, options[index] ])
            } else {
              this.outside()

              const repeated = v => value(v) !== tracked.toString()
              const afterRemove = this.value.filter(repeated)

              this.$emit('input', afterRemove)
            }
          } else {
            this.isOpened = false
          }
        } else {
          this.outside()
          this.$emit('input', tracked)
        }
      }
    },

    hideSelecteds () {
      if (this.multiple && Array.isArray(this.value) && this.display) {
        return this.items.filter(item => !this.selecteds.includes(item[this.display]))
      }

      return []
    },

    options () {
      if (this.errors) return this.errors

      const items = (this.hideSelected && this.hideSelecteds) || this.items

      if (this.searchQuery) {
        return items.filter(item => {
          const _item = (this.displayBy && item[this.displayBy]) || item

          return typeof _item === 'string'
            ? matches(this.searchQuery.toLowerCase(), _item.toLowerCase())
            : matches(this.searchQuery.toString().toLowerCase(), _item.toString().toLowerCase())
        })
      } else {
        return items
      }
    }
  },

  methods: {
    itemClasses (option, index) {
      return ['item',
        {
          '--is-disabled': this.errors,
          '-active': index === this.pointer,
          '-selected': this.isSelected(option, index)
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

    removeSelected (index) {
      const afterRemove = this.value.filter(v => v !== this.value[index])

      this.selected = afterRemove
    },

    isSelected (option) {
      if (!this.selected) return false

      const _option = (this.display && option[this.display]) || option

      if (this.multiple) {
        const _selected = v => ((this.display && v[this.display]) || v).toString() === _option.toString()

        return this.value.find(v => _selected(v))
      } else {
        return _option === this.value
      }
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
  z-index: $z-index-1;

  & > .inner {
    width: 100%;
    position: relative;

    & > .label,
    & > .validation { flex: 100%; width: 100%; display: block; }

    & > .label {
      margin-bottom: 10px;
      text-transform: uppercase;
      font-size: $font-size-xxxs;
    }

    & > .validation {
      position: absolute;

      display: flex;
      align-items: center;

      padding-top: 5px;
      color: $negative-color;

      & > .text {
        padding-left: 5px;
        white-space: nowrap;
      }
    }

    & > .input {
      position: relative;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      min-height: 50px;
      font-size: $font-size-xs;
      background-color: white;
      border-radius: $border-radius-sm;
      border: 1px solid $base-light-color;
      transition: border-color .3s ease, box-shadow .3s ease;

      & > .selectable {
        display: flex;

        & > .selected {
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;

          color: white;
          cursor: pointer;
          max-height: 30px;
          margin-left: 10px;
          border-radius: 3px;
          background-color: $primary-color;
          padding: { left: 10px; right: 35px; top: 2px; bottom: 2px; }
          // white-space: nowrap;

          &:after {
            position: absolute;
            content: 'x';
            right: 10px;
            bottom: 2px;
          }
        }
      }

      & > .selecteds {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        color: $base-color;
        padding-left: 10px;
        padding-right: 35px;
        line-height: 40px;
        outline: none;
        flex-grow: 1;
        cursor: text;
        border: 1px solid red;
        min-height: 38px;
        background-color: white;
        border-radius: 3px;
        font-size: 14px;
        border: unset;

        &.-placeholder {
          color: gray;
          font-size: 14px;
          font-weight: 400;
        }
      }

      & > .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        transition: transform 500ms ease;
      }
      &:hover,
      &:active,
      &:focus {
        border-color: $primary-color;
        box-shadow: 0 0 0 2px $primary-color;
      }
    }

    .items {
      width: 100%;
      max-height: 300px;

      z-index: $z-index-2;
      border-radius: $border-radius-sm;
      background-color: $neutral-color;

      overflow-y: auto;
      overflow-x: hidden;

      position: absolute;
      left: 0;

      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border: 2px solid $primary-color;
      border-top: none;

      & > .item {
        cursor: pointer;
        display: flex;
        min-height: 50px;
        align-items: center;

        &.-selected { font-weight: 700; }
        &.--is-disabled { cursor: not-allowed; }
        &.-active { background-color: $primary-color; }

        // &:first-child {
        //   border-top-left-radius: 5px;
        //   border-top-right-radius: 5px;
        // }

        &:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        & > .option-container {
          display: flex;
          justify-content: space-between;

          width: 100%;
          font-size: $font-size-xxs;
          transition: color .3s ease;

          & > .text { padding-left: 10px; }
          & > .disclaimer { padding-right: 10px; }
        }
      }
    }
  }

  &.--is-opened {
    & > .inner > .input {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border: 2px solid $primary-color;
      border-bottom: none;

      &:hover { box-shadow: unset; }

      & > .entry > .icon { transform: translateY(-50%) rotate(-180deg); }
    }
  }

  &.--is-disabled {
    cursor: default;
    pointer-events: none;

    & > .inner > .input {
      border-color: $primary-color;
      background-color: $primary-color;

      pointer-events: none;

      & > .selected,
      & > .selected.-placeholder {
        color: $base-light-color;
        font-weight: 300;
      }

      & > .icon { fill: $base-light-color; }
    }
  }
}
</style>
