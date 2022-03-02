<template>
  <!-- :validation="error || validation" -->
  <s-input-container v-bind="$attrs" :class="containerClasses">
    <div class="select">
      <div class="field" :tabindex="tabindex" @click.capture="openingHandler" v-click-outside="outside">
        <div class="selections">
          <span
            v-for="(option, index) in selecteds"
            :key="index"
            class="selected"
            @click="removeSelected(index)"
          >
            {{ selecteds[index] }}
          </span>

          <!-- v-if="!validation" -->
          <input
            ref="searchable"
            :class="['input', { '-placeholder': selected === placeholder || !selected }]"
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
        </div>

        <i class="icon sdz-chevron-down" />
      </div>

      <div class="items">
        <slot :options="options" name="options">
          <!-- :is-opened="!!(isOpened && options.length) && !validation" -->
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
          </s-collapsible>
        </slot>
      </div>
    </div>
  </s-input-container>
</template>

<script>
import SCollapsible from '../SCollapsible/Index.vue'
import SInputContainer from '../SInputContainer/Index.vue'

import Pointer from './mixins/pointer'
import Searchable from './mixins/searchable'

import clickOutside from '../../directives/clickOutside'

import matches from '../../helpers/matches'

export default {
  components: { SCollapsible, SInputContainer },

  directives: clickOutside,

  mixins: [ Pointer, Searchable ],

  props: {
    tabindex: { type: Number, default: 0 },

    value: [String, Object, Number, Array],

    items: { type: Array, required: true },

    placeholder: { type: String, default: 'Selecione uma opção' },

    optionSelectPlaceholder: { type: String, default: 'Press enter to select' },

    optionUnselectPlaceholder: { type: String, default: 'Press enter to unselect' },

    required: Boolean,

    display: String,

    displayBy: String,

    // validation: String,

    multiple: Boolean,

    hideSelected: Boolean,

    clearOnSelect: { type: Boolean, default: true },

    disabled: Boolean
  },

  data () {
    return {
      contentHeight: null,
      focused: false,
      isOpened: false,
    }
  },

  computed: {
    error () {
      if (!this.items.some(item => this.displayBy && typeof item === 'object')) return 'You need to set displayBy.'

      if (this.multiple && !Array.isArray(this.value)) return 'Value must be a array'

      return ''
    },

    containerClasses () {
      return [ 's-select',
        {
          '--is-opened': this.isOpened,
          '--is-disabled': this.disabled,
          // '--has-error': this.error || this.validation,
          '--is-focused': this.focused || this.searchQuery,
          '--is-empty-search': this.searchQuery && !this.options.length
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
        if (this.disabled) return []
        if (this.multiple) return this.selecteds

        const value = this.items
          .find(v => v === (Array.isArray(this.value) && this.value && this.displayBy && this.value[this.displayBy]) || this.value)

        if (!value) return 'Opção inválida'

        if (this.displayBy && value[this.displayBy]) {
          return value[this.displayBy]
            ? value[this.displayBy]
            : process.env.NODE_ENV === 'development' ? 'error: displayBy prop does not exist' : ''
        }
        return this.value
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
      if (this.error) return []

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
      }

      return _option === this.value
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
  // position: unset;

  & > .select {
    width: 100%;
    position: relative;

    & > .field {
      width: 100%;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-between;

      min-height: 50px;
      font-size: $font-size-xs;
      background-color: white;

      border-radius: $border-radius-sm;
      border: 1px solid color(base, light);

      transition: border-radius .3s ease-in-out,
                  border-color .3s ease-in-out,
                  box-shadow .3s ease-in-out;

      &:hover,
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
          border-radius: $border-radius-sm;
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
          width: 150px;
          border: unset;
          outline: none;
          font-size: $font-size-xxs;
          color: color(base, base);

          &.-placeholder {
            font-size: $font-size-xxs;
            color: color(base, light) !important;
          }
        }
      }

      & > .icon {
        margin-right: 10px;
        transition: transform .3s ease;
      }
    }

    & > .items {
      width: 100%;
      max-height: 300px;
      margin-top: 12px;
      z-index: 0;
      border-radius: $border-radius-sm;
      background-color: white;

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

          &.-selected { font-weight: 700; }
          &.-active { background-color: color(primary, base); }

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
    font-size: 14px;
    font-weight: 500;
    pointer-events: none;
    color: color(base, base);
    font-family: $font-family;
    transition: font-size .3s, transform .3s;
  }

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

  &.--is-focused > .select > .field > .selections > .input {
    border-bottom: 2px solid color(primary, base);
  }

  &.--is-disabled {
    cursor: default;
    pointer-events: none;

    & > .label { color: color(neutral, dark); }

    & > .select > .field {
     // border-color: color(neutral, dark);
      border-color: #E1E2E4;
      background-color: #F5F7F9;
      pointer-events: none;

      & > .icon { color: color(base, dark); }
      & > .selections > .input { background-color: transparent; color: color(neutral, dark); }
    }
  }

  &.--has-error > .select > .field {
    border-bottom: 2px solid color(primary, base);
    border-bottom-left-radius: $border-radius-sm;
    border-bottom-right-radius: $border-radius-sm;
  }

  &.--is-empty-search > .select > .field {
    border-bottom: 2px solid color(primary, base);
    border-bottom-left-radius: $border-radius-sm;
    border-bottom-right-radius: $border-radius-sm;
  }
}
</style>
