// import toggleOrder from '../helpers/order'

const sortable = {
  props: {
    sortable: Boolean
  },

  watch: {
    page () {
      this.iconToSort = '▼'
    }
  },

  methods: {
    $handlerSort (item) {
      this.iconToSort === '▼'
        ? this.iconToSort = '▲'
        : this.iconToSort = '▼'
      console.log(this.iconToSort)

      // const data = this.rows.sort(toggleOrder(item, this.iconToSort))

      this.$emit('sort', {
        item,
        type: '▼' === this.iconToSort ? 'decrease' : 'increase'
      })
    }
  }
}

export default sortable
