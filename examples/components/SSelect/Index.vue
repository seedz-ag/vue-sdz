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
    <p class="subtitle">
      Abrir ao clicar em toda a caixa.
    </p>
    <p class="subtitle">
      Ao abrir o menu de opções, possibilitar digitar com auto completar.
    </p>

    <s-box>
      <s-select
        label="Simple"
        display-by="name"
        track-by="slug"
        placeholder="Selecione uma opção"
        :items="items"
        disabled-by="disabled"
        required
        :clear-on-select="false"
        v-model="data1"
      />

      <s-select
        label="Multiple"
        display-by="name"
        track-by="slug"
        placeholder="Selecione uma opção"
        multiple
        hide-selected
        :clear-on-select="false"
        :items="items"
        disabled-by="disabled"
        v-model="data3"
      />
    </s-box>

    <s-title size="title-2">Sizing</s-title>
    <s-box class="sizing flex-inline">
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          :items="items"
          disabled-by="disabled"
          required
          clear-on-select
          small
          v-model="data1"
        />
      </div>
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          :items="items"
          disabled-by="disabled"
          required
          clear-on-select
          v-model="data1"
        />
      </div>
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          :items="items"
          required
          clear-on-select
          larger
          v-model="data1"
        />
      </div>
    </s-box>

    <s-title size="title-2">Disabled</s-title>
    <s-box class="sizing flex-inline">
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          :items="items"
          disabled-by="disabled"
          disabled
          clear-on-select
          small
          v-model="data1"
        />
      </div>
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          disabled
          :items="items"
          disabled-by="disabled"
          clear-on-select
          v-model="data1"
        />
      </div>
      <div>
        <s-select
          label="Simple"
          display-by="name"
          track-by="slug"
          placeholder="Selecione uma opção"
          disabled
          :items="items"
          disabled-by="disabled"
          clear-on-select
          larger
          v-model="data1"
        />
      </div>
    </s-box>
  </div>
</template>

<script>
import SSelect from '../../../src/components/SSelect/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'


export default {
  components: { SSelect, SBox, STitle },

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
        { slug: 'item 22', name: 'name item 22', disabled: true },
        { slug: 'item 3', name: 'name item 3' },
        { slug: 'item 4', name: 'name item 4', disabled: true },
        { slug: 'item 5', name: 'name item 5' },
        { slug: 'item 6', name: 'name item 6' },
      ],
      code1: 'teste',
    }
  }
}
</script>

<style lang="scss">
.s-select-example {
  padding-bottom: 40px;

  & > .s-box {
    & > .s-select { margin-bottom: 60px; }

    &.sizing {
      justify-content: space-around;
    }
  }
}
</style>
