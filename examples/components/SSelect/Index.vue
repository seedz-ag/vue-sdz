<template>
  <div class="s-select-example">
    <s-select
      label="simple"
      display="slug"
      display-by="name"
      placeholder="Selecione uma opção"
      :clear-on-select="false"
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
      placeholder="Selecione uma opção"
      :validation="data4.length >= 3 && `Máximo de 3 opções selecionadas`"
      multiple
      :items="items"
      v-model="data4"
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
        { slug: 'slug_boladao2', name: 'coe2' }
      ],
      data4: [],
      items: [
        { slug: 'slug_boladao1', name: 'coe1' },
        { slug: 'slug_boladao2', name: 'coe2' },
        { slug: 'slug_boladao3', name: 'coe3' },
        { slug: 'slug_boladao4', name: 'coe4' },
        { slug: 'slug_boladao5', name: 'coe5' },
        { slug: 'slug_boladao6', name: 'coe6' }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-select-example > .s-select { margin-bottom: 60px; }
</style>
