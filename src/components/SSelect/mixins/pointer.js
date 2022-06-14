const pointer = {
  data () {
    return {
      pointer: -1
    }
  },

  methods: {
    pointerReset () {
      this.pointer = -1
    },

    pointerSet (option) {
      this.pointer = option
    },

    pointerForward () {
      if (this.pointer < this.options.length - 1) this.pointer++
    },

    pointerBackward () {
      if (this.pointer > 0) this.pointer--
    },

    addPointerElement ({ key } = 'Enter') {
      if (this.options?.length && key === 'Enter') {
        const index = this.pointer
        const option = this.options.find((_, i) => i === index)

        this.selected = { option, index }
        this.$nextTick(() => this.outside())
      }
    }
  }
}

export default pointer
