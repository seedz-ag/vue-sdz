<template>
  <div class="pagination">
    <slot name="pagination">
      <div class="pages">
        <s-input
          :mask="['##########']"
          :value="page"

          @input="v => $emit('change:page', v)"
        />

        / {{ totalPages }}

        <s-icon
          size="23"
          class="previous"
          icon="charm:chevron-left"

          :disabled="!canBack"

          @click.native="canBack && $emit('previous')"
        />

        <s-icon
          size="23"
          class="next"
          icon="charm:chevron-right"

          :disabled="!canGo"

          @click.native="canGo && $emit('next')"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import SIcon from '../../SIcon/Index.vue'
import SInput from '../../SInput/Index.vue'

export default {
  name: 'Pagination',

  components: { SIcon, SInput },

  props: {
    totalPages: Number,

    page: [Number, String],

    perPage: [Number, String],

    rows: { type: Array, required: true }
  },

  computed: {
    canBack () {
      return +this.page !== 1
    },

    canGo () {
      return +this.page < Math.ceil(this.totalPages)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;

  & > .pages {
    display: flex;
    max-width: 500px;
    align-items: center;

    & > .previous { margin-left: 20px; cursor: pointer; }

    & > .s-input > .input {
      width: 50px;
      height: 30px;
      text-indent: 10px;
      margin-right: 15px;
    }

    & > .next { margin-left: 10px; cursor: pointer; }
  }
}
</style>
