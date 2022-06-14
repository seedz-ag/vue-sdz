const searchable = {
  data () {
    return {
      searchQuery: ''
    }
  },

  methods: {
    onSearch ({ target: { value } }) {
      this.isOpened = true
      this.focused = false

      this.searchQuery = value
    }
  }
}

export default searchable
