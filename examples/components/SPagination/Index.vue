<template>
  <div class="s-pagination-example">
    <s-title class="h1" title="Pagination" />

    <p class="subtitle">
      É uma numeração ordinal das páginas, que geralmente está localizada na parte superior ou inferior das páginas de um site.<br>
      Use um elemento &lt;nav&gt; de encapsulamento para identificá-lo como uma seção de navegação para leitores de tela e outras tecnologias de assistência.
    </p>

    <s-title class="h2" title="Como e onde utilizar" />

    <p class="subtitle">
      Utilizamos a paginação no formato tradicional principalmente em nossas páginas do Marketplace.<br>
      Para tabelas na área de gestão, utilizamos um formato que possibilite digitar o número da página em que deseja acessar.
    </p>

    <s-box>
      <s-pagination
        total-page="10"
        :page="page"
        @page="value => page = value"
      />
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SBox from '../../commons/box.vue'
import SPagination from '../../../src/components/SPagination/Index.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SPagination, SBox, STitle, PreCode },

  data () {
    return {
      code:`
      <s-pagination
        total-page="10"
        :page="page"
        @page="value => page = value"
      />`,
      page: 1
    }
  },

  methods: {
    setPage (page) {
      this.page = page
    }
  }
}
</script>

<style lang="scss">
.s-pagination-example {}
</style>
