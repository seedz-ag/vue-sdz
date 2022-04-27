<template>
  <div v-if="hasValid" class="s-table">
    <slot name="actions">
      <filters v-if="searchable" label="Filtrar por: " :search="search" v-on="$listeners" />
    </slot>

    <div class="table-container">
      <table class="table">
        <thead class="thead">
          <tr class="tr-col">
            <th v-if="selectable" class="th-col-selectable">
              <input type="checkbox" @change="selectedAll">
            </th>

            <slot name="col" :cols="cols">
              <th
                v-for="({ text, row, sortable, align = 'center' }, index) in cols"
                :key="index"

                class="th-col"
              >
                <slot name="icon-sortable">
                  <div class="td-col-container" :style="{ 'justify-content': setAlignment('col', align) }">
                    <span class="label">{{ text }}</span>

                    <s-icon
                      v-if="sortable"

                      size="16"
                      :icon="assortment[row] === 'increase' ? 'sdz-chevron-up' : 'sdz-chevron-down'"

                      @click.native="sort(row)"
                    />
                  </div>
                </slot>
              </th>
            </slot>

            <th class="actions" />
          </tr>
        </thead>

        <tbody v-if="rows.length" class="tbody">
          <tr
            v-for="(row, index) in internalRows"

            :key="index"
            :class="classTrRow(index)"

            @mouseleave="hoverLine = null"
            @mouseenter="hoverLine = index"
          >
            <td v-if="selectable" class="td-row selectable">
              <input type="checkbox" :value="row" v-model="checkeds" @change="$emit('selected', checkeds)">
              <!-- <s-checkbox :value="row" v-model="checkeds" @input="$selected(row)" /> -->
            </td>

            <slot name="row" :row="row">
              <td
                v-for="(field, fieldIndex) in Object.keys(row)"

                :key="fieldIndex"
                :cols="cols"
                :style="{ 'text-align': setAlignment('row', field.align || 'center') }"

                class="td-row"

                v-bind="$attrs"
              >
                <span class="row">{{ row[field] }}</span>
              </td>
            </slot>

            <td class="actions">
              <s-icon
                v-show="actions.length && hoverLine === index"

                ref="action"
                size="25"
                icon="sdz-more-horizzontal"

                @click.native.stop="activeAction = index"
              />

              <s-popover
                v-if="activeAction === index"

                align="left"
                class="popover"

                :target="$refs['action'][index]"

                @handler="activeAction = null"
              >
                <div
                  v-for="action in actions"

                  :key="action.label"

                  class="action"

                  @click="$emit('action', { action: action.label, row }); activeAction = null"
                >
                  <s-icon v-if="action.icon" :icon="action.icon" />
                  <span class="label">{{ action.label }}</span>
                </div>
              </s-popover>
            </td>
          </tr>
        </tbody>

        <div v-else class="empty">
          <slot name="empty">EMPTY STATE</slot>
        </div>
      </table>
    </div>

    <slot name="tfoot">
      <tfoot v-if="paginable" :class="['tfoot', { '--show-per-page': showPerPage }]">
        <div v-if="showPerPage" class="per-page">
          Linhas por página: {{ perPage }}

          <s-icon ref="target" icon="sdz-chevron-up" @click.native="showPages = true" />

          <s-popover
            v-if="showPages"

            class="popover"

            align="center"
            position="top"

            :arrow-spacing="10"
            :target="$refs['target']"

            @handler="showPages = false"
          >
            <div
              v-for="n in [100, 75, 50, 25, 10]"
              :key="n"
              @click="changePerPage(n)"
            >
              Mostrar {{ n }}
            </div>
          </s-popover>
        </div>

        <pagination
          :rows="rows"
          :page="page"
          :per-page="perPage"

          v-bind="$attrs"
          v-on="$listeners"
        />
      </tfoot>
    </slot>
  </div>

  <div v-else class="empty-state">
    <slot name="invalid">
      error: invalid table!
    </slot>
  </div>
</template>

<script>
import SPopover from '../SPopover/Index.vue'
import Pagination from './components/Pagination.vue'
// import SCheckbox from '../SCheckbox/Index.vue'
// import Filters from './components/Filters.vue'

import toggleOrder from './helpers/sort.js'
import warnings from './mixins/warnings'
// import sortable from './mixins/sortable'

export default {
  name: 'STable',

  components: {
    SPopover,
    Pagination,
    // Filters,
    // SCheckbox,
    SIcon: () => import('../SIcon/Index.vue').then(c => c.default)
  },

  mixins: [ warnings ],

  props: {
    cols: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    },

    actions: {
      type: Array,
      default: () => []
    },

    paginable: Boolean,

    selectable: Boolean,

    searchable: Boolean,

    showPerPage: {
      type: Boolean,
      default: true
    },

    page: {
      type: [Number, String],
      validator: (page) => !!page,
      default: 1
    },

    perPage: {
      type: [Number, String],
      validator: limit => limit > 2,
      default: 10
    }
  },

  data () {
    return {
      internalRows: [],

      checkeds: [],
      allChecked: false,

      assortment: {},

      hoverLine: null,
      showPages: false,
      activeAction: null
    }
  },

  watch: {
    rows: { handler: 'setRows', immediate: true }
  },

  created () {
    this.internalRows = this.rows

    this.assortment = this.cols.reduce((acc, item) => {
      if (!item.sortable) return acc

      acc[item.row] = 'increase'

      return acc
    }, {})
  },

  methods: {
    setRows () {
      this.internalRows = this.rows
    },

    classTrRow (row) {
      return ['tr-row', { '--is-active-row': row === this.hoverLine }]
    },

    setAlignment (type, align) {
      if (align === 'right') return type === 'col' ? 'flex-end' : 'right'
      if (align === 'left') return type === 'col' ? 'flex-start' : 'left'

      return 'center'
    },

    changePerPage (page) {
      this.showPages = false
      this.$emit('change:page', 1)
      this.$emit('change:per-page', page)

      // TODO: move to table top
      // window.scrollBy({ top: 0, behavior: 'smooth' })
    },

    selectedAll () {
      if (!this.allChecked) {
        this.allChecked = true
        this.checkeds = this.rows
      } else {
        this.allChecked = false
        this.checkeds = []
      }

      this.$emit('selected', this.checkeds)
    },

    sort (row) {
      this.assortment[row] = this.assortment[row] === 'increase' ? 'decrease' : 'increase'

      this.internalRows = this.internalRows.sort(toggleOrder(row, this.assortment[row]))
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-table {
  & > .table-container {
    overflow-x: scroll;

    & > .table {
      width: 100%;
      position: relative;

      & > .thead {
        table-layout: fixed;
        display: table-row-group;

        & > .tr-col {
          & > .th-col-selectable { width: 30px; }

          & > .th-col {
            padding: 15px;
            min-width: 150px;

            & > .td-col-container {
              display: flex;
              align-items: center;
              justify-content: center;

              & > .label {
                margin-right: 10px;
                font-size: $font-size-xxxs;
                font-weight: $font-weight-bold;
              }

              & > .icon { cursor: pointer; }

              // & > .icon-sortable-all { cursor: pointer; }
              // & > .icon-sortable-one { cursor: pointer; }
            }
          }

          & > .actions { width: 10px; }
        }
      }

      & > .tbody {
        // flex: 1;
        // display: block;
        // overflow-y: auto;

        & > .tr-row {
          width: unset;
          position: unset;
          display: table-row;

          // margin: 5px;
          border-bottom: 1px solid color(neutral, dark);

          & > .td-row {
            padding: 10px 15px;
            text-align: center;
            font-size: $font-size-xxs;
          }

          & > .actions {
            width: 30px;
            cursor: pointer;

            & > .popover {
              & > .action {
                display: flex;
                align-items: center;
                justify-content: center;

                cursor: pointer;
                padding: 15px 30px;

                &:hover {
                  color: color(primary, base);
                  background: color(neutral, light);
                }

                & > .label { margin-left: 10px; }
              }
            }
          }

          & > .selectable {
            width: 30px;

            &:first-child {
              background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
              background-repeat: no-repeat;
              background-size: 20px 100%;
            }
          }
        }

        & > .--is-active-row { background: color(neutral, light); }
      }
    }
  }

  & > .tfoot {
    display: flex;
    margin-top: 30px;

    justify-content: end;
    &.--show-per-page { justify-content: space-between; }

    & > .per-page {
      color: color(base, light);
      font-size: $font-size-xxs;
      font-weight: $font-weight-medium;

      & > .popover > div {
        padding: 10px;
        cursor: pointer;

        &:hover {
          color: color(primary, base);
          background: color(neutral, light);
        }
      }
    }
  }
}
</style>
