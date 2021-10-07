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
      if (this.pointer < this.items.length - 1) this.pointer++
    },

    pointerBackward () {
      if (this.pointer > 0) this.pointer--
    },

    addPointerElement ({ key } = 'Enter') {
      if (this.items.length > 0 && key === 'Enter') {
        this.selected = this.pointer

        this.$nextTick(() => {
          this.outside()
        })
      }
    }
  }
}

export default pointer
