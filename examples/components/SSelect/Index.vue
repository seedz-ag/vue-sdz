<template>
  <div class="s-select-example">
    <s-select
      label="simple"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opção"
      :items="items"
      v-model="data1"
    />

    <s-select
      label="with slots"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opção"
      clear-on-select
      :items="items"
      v-model="data2"
    >
      <div slot="option" slot-scope="{ option }">
        {{ option['slug'] }} - {{ option['name'] }}
      </div>
    </s-select>

    <s-select
      label="multiple"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opção"
      multiple
      hide-selected
      :items="items"
      v-model="data3"
    />

    <s-select
      label="multiple with validation ( >=3 )"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opçãoooooooooooooooooo"
      :validation="data4.length >= 3 ? `Máximo de 3 opções selecionadas` : ''"
      multiple
      :items="items"
      v-model="data4"
    />

    <s-select
      label="disabled"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opção"
      disabled
      :items="items"
    />
  </div>
</template>

<script>
import SSelect from '../../../src/components/SSelect/Index.vue'

export default {
  components: { SSelect },

  data () {
    return {
      data1: '',
      data2: '',
      data3: [
        { slug: '2', name: 'coe2' }
      ],
      data4: [],
      items: [
        { slug: 'item 1', name: 'name item 1' },
        { slug: 'item 2', name: 'name item 2' },
        { slug: 'itemmmmmmmmmmmmmmmmmm 3', name: 'name itemmmmmmmmmmmmmmmmmm 3' },
        { slug: '4', name: 'name 4' },
        { slug: '5', name: 'name 5' },
        { slug: '666666666666666666666666666666', name: 'name 666666666666666666666666666666' }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-select-example > .s-select { margin-bottom: 60px; }
</style>
