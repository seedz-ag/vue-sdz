<template>
  <div class="s-select-example">
    <s-select
      label="Simple"
      display-by="name"
      track-by="slug"
      placeholder="Selecione uma opção"
      :items="items"
      required
      clear-on-select
      v-model="data1"
    />

    <s-select
      label="Multiple"
      display-by="name"
      track-by="slug"
      placeholder="Selecione uma opção"
      multiple
      hide-selected
      :items="items"
      v-model="data3"
    />
  </div>
</template>

<script>
import SSelect from '../../../src/components/SSelect/Index.vue'

export default {
  components: { SSelect },

  data () {
    return {
      data1: { slug: 'item 3', name: 'name item 3' },
      data3: [
        { slug: 'item 3', name: 'name item 3' },
        { slug: 'item 5', name: 'name item 5' }
      ],
      items: [
        { slug: 'item 1', name: 'name item 1' },
        { slug: 'item 2', name: 'name item 2' },
        { slug: 'item 22', name: 'name item 22' },
        { slug: 'item 3', name: 'name item 3' },
        { slug: 'item 4', name: 'name item 4' },
        { slug: 'item 5', name: 'name item 5' },
        { slug: 'item 6', name: 'name item 6' },
      ]
    }
  }
}
</script>

<style lang="scss">
.s-select-example > .s-box > .s-select { margin-bottom: 60px; }
</style>
