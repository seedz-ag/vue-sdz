<template>
  <div class="s-pagination">
    <slot name="pagination" :pages="pages">
      <div class="pages">
        <s-icon
          class="previous"
          icon="chevron-up"
          :disabled="page === 1"
          @click.native="changePage(page, 'previous')"
        />

        <component
          :is="num === '...' ? 's-icon' : 's-button'"
          v-for="(num, index) in pages"
          :key="index"
          :icon="num === '...' ? 'more-horizzontal' : ''"
          :class="['page', (num === '...') ? 'page-icon' : '', { '--is-active': num === page }]"
          @click="changePage(num, 'set')"
        >
          {{ num === '...' ? '' : num }}
        </component>

        <s-icon
          class="next"
          icon="chevron-up"
          :disabled="page === +totalPage"
          @click.native="changePage(page, 'next')"
        />
      </div>
    </slot>
  </div>
</template>

<script>
import SIcon from '../SIcon/Index.vue'
import SButton from '../SButton/Index.vue'

export default {
  name: 'SPagination',

  components: { SIcon, SButton },

  props: {
    totalPage: {
      type: [String, Number],
      required: true
    },

    page: {
      type: [Number, String],
      validator: (page) => !!page,
      default: 1
    },

    pagesLimit: {
      type: [Number, String],
      validator: limit => limit > 3
    }
  },
  computed: {
    pages () {

      if (this.totalPage < 7)
        return Array.from({ length: this.totalPage }, (xs, i) => ( i + 1 ))

      let limit = (this.page >= this.totalPage - 2) ? 6 : 7

      return Array.from({ length: limit }, (xs, i) => {

        if (this.page > 3) {
          if ((i + 1) === 2) return '...'

          if ((i + 1) === 3) {
            if (this.page == (this.totalPage - 1)) return this.page - 2
            if (this.page == this.totalPage) return this.page - 3
            return this.page - 1
          }

          if ((i + 1) === 4) {
            if (this.page == (this.totalPage - 1)) return this.page - 1
            if (this.page == this.totalPage) return this.page - 2
            return this.page
          }

          if ((i + 1) === 5) {
            if (this.page == (this.totalPage - 1)) return this.page
            if (this.page == this.totalPage) return this.page - 1
            return this.page + 1
          }
        }

        if ((i + 1) === limit - 1 && this.page <= (this.totalPage - 3)) return '...'

        if ((i + 1) === limit) return parseInt(this.totalPage)

        return i + 1
      })
    }
  },

  methods: {
    changePage (newPage, action) {
      if (newPage === '...') return
      if (this.page === 1 && action === 'previous') return
      if (this.page === +this.totalPage && action === 'next') return

      const actions = {
        set: newPage,
        next: this.page + 1,
        previous: this.page - 1
      }

      this.$emit('page', actions[action])
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-pagination {
  display: flex;
  margin-top: 20px;
  justify-content: center;

  & > .pages {
    display: flex;
    max-width: 500px;
    align-items: center;

    & > .previous {
      cursor: pointer;
      padding-right: 10px;
      transform: rotate(-90deg);
      margin-top: -10px;
    }

    & > .page {
     // width: 32px;
      height: 32px;
      min-width: 32px;
      min-height: 32px;

      display: flex;
      margin: 0 5px;
      padding: 0;
      padding: 0 6px;
      cursor: pointer;
      transition: unset;
      align-items: center;
      justify-content: center;

      border-radius: 8px;
      border-color: transparent;
      background-color: color(neutral, base);

      & > .text { color: color(base, base); }

      &:hover:not(.--is-active) {
        color: white;
        background: color(positive, medium);
      }

      &:focus { outline: unset; }

      &.page-icon{
        font-size: 26px !important;
        cursor: default;
      }
    }

    & > .s-icon.more-horizzontal{
      padding-top: 10px;
    }

    & .--is-active {
      & > .text { color: color(neutral, base); }

      background-color: color(primary, base);
    }

    & > .next {
      cursor: pointer;
      padding-left: 10px;
      transform: rotate(90deg);
      margin-top: -10px;
    }
  }
}
</style>
