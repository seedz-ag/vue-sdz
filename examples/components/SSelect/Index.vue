<template>
  <div class="s-select-example">
    <h1 class="h1">Select</h1>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-select
        label="Simple"
        display="slug"
        display-by="name"
        placeholder="Selecione uma opção"
        :items="items"
        v-model="data1"
      />

      <s-select
          label="With slots"
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
    </s-box>
    

    <h2 class="h2">Multiples</h2>
    <s-box>
      <s-select
        label="Multiple"
        display="slug"
        display-by="name"
        placeholder="Selecione uma opção"
        multiple
        hide-selected
        :items="items"
        v-model="data3"
      />

      <s-select
        label="Multiple with validation ( >=3 )"
        display="slug"
        display-by="name"
        placeholder="Selecione uma opção"
        :validation="data4.length >= 3 ? `Máximo de 3 opções selecionadas` : ''"
        multiple
        :items="items"
        v-model="data4"
      />
    </s-box>
    
    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-select
        label="Disabled"
        display="slug"
        display-by="name"
        placeholder="Selecione uma opção"
        disabled
        :items="items"
      />
    </s-box>
    
  </div>
</template>

<script>
import SSelect from '../../../src/components/SSelect/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SSelect, SBox },

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
.s-select-example > .s-box > .s-select { margin-bottom: 60px; }
</style>
