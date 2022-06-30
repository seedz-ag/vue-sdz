<template>
  <div :class="['s-pin']">
    <input
      v-for="(cell, index) in cells"
      :key="index"
      :ref="`ref${index}`"
      :value="cell"

      type="tel"
      pattern="\d*"
      :class="['input', { '--is-filled': cell, '--has-error': hasError }]"

      v-bind="$attrs"

      @keydown.stop="onKeyDown"
      @focus.stop="onFocus(+index)"
      @input.stop="e => onInput(e, +index)"
    >
  </div>
</template>

<script>
export default {
  name: 'SPin',

  props: {
    size: {
      type: Number,
      default: 4,
    },

    hasError: Boolean
  },

  data () {
    return {
      cells: {},
      focusedIndex: 0
    }
  },

  mounted () {
    this.cells = Array
      .from({ length: this.size })
      .reduce((acc, _item, index) => {
        acc[index] = ''

        return acc
      }, {})
  },

  methods: {
    getRef (index) {
      const ref = `ref${index}`

      return (this.$refs[ref])?.[0]
    },

    onInput (e, i) {
      const value = +e.data
      const index = +i // fix: default index is a string
      const isLastPosition = (this.size - 1) ===  index
      // const isInputDeleteType = e.inputType === 'deleteContentBackward'

      this.cells[index] = ''

      if (this.cells[index] && isLastPosition || !value) {
        const el = this.getRef(index)

        el.value = ''
        this.cells[index] = ''
        return
      }

      this.$forceUpdate()

      this.cells[index] = value

      if (this.focusedIndex === this.size - 1) return

      this.onFocus(index + 1)
    },

    onKeyDown ({ keyCode }) {
      // arrow up/down
      if ([38, 40].includes(keyCode)) return this.onFocus(this.focusedIndex)

      if (keyCode === 39) return this.focusNext()
      if (keyCode === 37) return this.focusPrevious()
    },

    onFocus (index) {
      const el = this.getRef(index)

      el.focus()
      setTimeout(() => { el.setSelectionRange(2, 2) }, 0)

      this.focusedIndex = +index
    },

    focusPrevious () {
      const index = !this.focusedIndex ? this.focusedIndex : this.focusedIndex - 1

      this.onFocus(index)
    },

    focusNext () {
      const index = this.focusedIndex === this.size - 1 ? this.focusedIndex : this.focusedIndex + 1

      this.onFocus(index)
    },
  },
}

</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-pin {
  & > .input {
    width: 60px;
    outline: none;
    margin-right: 15px;

    line-height: 40px;
    text-align: center;
    font-size: $font-size-sm;
    color: color(primary, base);

    border: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: color(base, light);
    transition: border-bottom-color .3s ease-in-out;

    &.--is-filled { border-bottom-color: color(primary, base); }

    &.--has-error {
      color: color(negative, base);
      border-bottom-color: color(negative, base);
    }
  }

}
</style>
