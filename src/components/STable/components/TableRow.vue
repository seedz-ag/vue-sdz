<template>
  <td class="td-row">
    <span class="row">{{ getRow(row, rowNum - 1) }}</span>
  </td>
</template>

<script>
export default {
  name: 'TableRow',

  props: {
    cols: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    }
  },

  computed: {
    dataRows () {
      return this.rows.slice((this.page - 1) * this.currentPerPage, this.currentPerPage * this.page)
    }
  },

  methods: {
    getRow (row, index) {
      const props = this.cols.map(({ row }) => row)

      return row[props[index]] || ''
    }
  }
}
</script>

<style>

</style>
