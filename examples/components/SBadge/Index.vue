<template>
  <div>
    <s-title size="title-1">Badge</s-title>

    <p class="subtitle">
      Um badge é um indicador visual para notificações e para valores numéricos, como contagens e pontuações.
    </p>

    <s-title size="title-2">Como e onde utilizar</s-title>

    <p class="subtitle">
      O badge é utilizado em conjunto com alguns ícones dentro do fluxo, deve ser utilizado a cor highlight, de acordo com o brand tokens deste Design System.
    </p>

    <p class="subtitle">
      Utilizamos este indicador em duas situações:
    </p>

    <p class="subtitle">
      <ul>
        <li>Quando há uma notificação do sistema para informar ao usuário uma atualização ou oportunidade. Ex: Quando uma nova campanha está disponível. Quando o usuário está perto de atingir uma meta. Quando o usuário recebe um cashback.</li>
        <li>Quando houver ítens adicionados no carrinho, neste caso deve-se indicar o número de ítens dentro do carrinho.</li>
      </ul>
    </p>

    <s-box class="flex-inline flex-center">
      <s-badge dot><s-icon icon="sdz-bell" /></s-badge>
      <s-badge content="3"><s-icon icon="sdz-cart" /></s-badge>

      <s-badge dot>testando</s-badge>
      <s-badge content="3">testando</s-badge>
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SBadge from '../../../src/components/SBadge/Index.vue'
import SIcon from '../../../src/components/SIcon/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SBadge, SIcon, SBox, STitle, PreCode },
  data(){
    return{
      code:`
      <s-badge dot><s-icon icon="sdz-bell" /></s-badge>
      <s-badge content="3"><s-icon icon="sdz-cart" /></s-badge>

      <s-badge dot>testando</s-badge>
      <s-badge content="3">testando</s-badge>`
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-badge{
  margin-right: 20px;

  &:last-child{
    margin-right: 0px;
  }
}
</style>
