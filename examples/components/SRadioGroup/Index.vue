<template>
  <div class="s-radio-group-example">
    <!-- <s-title size="title-1">Radiobox</s-title>

    <p class="subtitle">
      Input Radio Button tem como objetivo possibilitar que a pessoa usuária escolha uma opção dentro da interface.
    </p>
    <p class="subtitle">
      Deve ser usado quando é permitido selecionar apenas uma única opção em uma lista, principalmente em cenários onde estão expostos todas as opções disponíveis.
    </p>
    <p class="subtitle">
      Podem ser utilizados em alguns componentes como: Listas, Formulários e Tabelas.
    </p>
    <p class="subtitle">
      Não deve ser usado se mais de uma opção puder ser selecionada, nesse cenário devemos utilizar o checkbox.
    </p>

    <source-code file="SRadioGroupExample" comp="SRadioGroup" />

    <s-title size="title-2">Default</s-title> -->

    <s-radio-group :value="activeRadio" :options="options" @input="activeRadio = $event" />
    <!-- <s-radio-group row :value="activeRadio" :options="options" @input="onInput" /> -->

    <!-- <s-box>
      <s-radio-group id="1" label="Radio sem check default 1" name="dafault" value="default-1" v-model="data0" />
      <s-radio-group id="2" label="Radio sem check default 2" name="dafault" value="default-2" v-model="data0" />

      <br>

      <s-radio-group id="1" label="Radio com check default 1" name="dafault" value="default-check-1" v-model="data1" />
      <s-radio-group id="2" label="Radio com check default 2" name="dafault" value="default-check-2" v-model="data1" />
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Error State</s-title>
    <s-box>
      <s-radio-group label="Negative unchecked" negative name="negative" value="error-1" v-model="data2" />
      <s-radio-group label="Negative checked" negative name="negative" value="error-2" v-model="data2" />
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Disabled</s-title>
    <s-box>
      <s-radio-group label="Disabled" disabled value="disabled-1" name="disabled" v-model="data3" />
      <s-radio-group label="Disabled Checked" disabled value="disabled-2" name=" disabled" v-model="data3" />
    </s-box>

    <pre-code :code="code3" /> -->
  </div>
</template>

<script>
import SRadioGroup from '../../../src/components/SRadioGroup/Index.vue'
// import SBox from '../../commons/box.vue'
// import STitle from '../../commons/title.vue'
// import SourceCode from '../SourceCode/Index.vue'
// import PreCode from '../PreCode/Index.vue'

export default {
  components: {
    SRadioGroup,
    // SBox, STitle, SourceCode, PreCode
  },

  data () {
    return {
      activeRadio: '111',
      options: [
        { id: 1, label: '111', value: '111' },
        { id: 2, label: '222', value: '222', disabled: true },
        { id: 3, label: '333', value: '333' },
        { id: 4, label: '444', value: '444' },
      ]

      // data0: false,
      // data1: 'default-check-2',
      // data2: 'error-2',
      // data3: 'disabled-2',

      // code1: `
      //   <s-radio-group id="1" label="Radio sem check default 1" name="dafault" value="default-1" v-model="data0" />
      //   <s-radio-group id="2" label="Radio sem check default 2" name="dafault" value="default-2" v-model="data0" />
      // `,
      // code2: `
      //   <s-radio-group label="Negative unchecked" negative name="negative" value="error-1" v-model="data2" />
      //   <s-radio-group label="Negative checked" negative name="negative" value="error-2" v-model="data2" />
      // `,
      // code3: `
      //   <s-radio-group label="Disabled" disabled value="disabled-1" name="disabled" v-model="data3" />
      //   <s-radio-group label="Disabled Checked" disabled value="disabled-2" name=" disabled" v-model="data3" />
      // `
    }
  }
}
</script>

<style lang="scss">
.s-radio-group-example > .s-radio-group > .radio { margin-bottom: 60px; }
</style>
