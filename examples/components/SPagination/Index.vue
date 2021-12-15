<template>
  <div class="s-pagination-example">
    <h1 class="h1">Pagination</h1>

    <s-box>
      <s-pagination
        total-page="10"
        :page="page"
        @page="value => page = value"
      />
    </s-box>
  </div>
</template>

<script>
import SBox from '../../commons/box.vue'
import SPagination from '../../../src/components/SPagination/Index.vue'

export default {
  components: { SPagination, SBox },

  data () {
    return {
      page: 1
    }
  },

  methods: {
    setPage (page) {
      this.page = page
    }
  }
}
</script>

<style lang="scss">
.s-pagination-example {}
</style>
