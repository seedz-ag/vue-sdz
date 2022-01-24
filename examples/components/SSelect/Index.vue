<template>
  <div class="s-select-example">
    <s-title size="title-1">Select</s-title>

    <p class="subtitle">
      Input Select é um dropdown onde a pessoa usuária pode selecionar uma opção em uma lista de opções. Hoje trazemos a visualização dos itens de forma nativa por uma questão de acessibilidade.
    </p>

    <s-title size="title-2">Quando usar</s-title>

    <p class="subtitle">
      Utilizar quando você tem ao menos 3 opções de escolha.
    </p>
    <p class="subtitle">
      Considerar Input Select sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador.
    </p>

    <source-code file="SSelectExample" comp="SSelect" />

    <s-title size="title-2">Default</s-title>
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

    <pre-code :code="code1" />

    <s-title size="title-2">Multiples</s-title>
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

    <pre-code :code="code2" />

    <s-title size="title-2">Disabled</s-title>
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

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SSelect from '../../../src/components/SSelect/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SSelect, SBox, STitle, SourceCode, PreCode },

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
      ],
      code1:`<s-select
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
      </s-select>`,
      code2:`<s-select
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
        :validation="data4.length >= 3 ? 'Máximo de 3 opções selecionadas' : ''"
        multiple
        :items="items"
        v-model="data4"
      />`,
      code3:`<s-select
        label="Disabled"
        display="slug"
        display-by="name"
        placeholder="Selecione uma opção"
        disabled
        :items="items"
      />`
    }
  }
}
</script>

<style lang="scss">
.s-select-example > .s-box > .s-select { margin-bottom: 60px; }
</style>
