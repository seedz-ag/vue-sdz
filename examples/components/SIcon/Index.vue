<template>
  <div class="s-icon-example">
    <s-title size="title-1">Icons</s-title>

    <p class="subtitle">
      Nossa biblioteca de ícones foi criada a partir da biblioteca open source Feather Icons com alguns exclusivos criados para a plataforma.
    </p>

    <s-box>
      <div class="box-icons flex-inline">
        <div v-for="icon in icons" :key="icon" class="icons">
          <s-icon :icon="`sdz-${icon}`" />

          <span>{{ icon }}</span>
        </div>
      </div>
    </s-box>
  </div>
</template>

<script>
import SIcon from '../../../src/components/SIcon/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

const paths = import.meta.importGlob('../../../src/assets/icons/*.svg')
const icons = Object
  .keys(paths)
  .map(path => path
    .split('/')
    .at(-1)
    .split('.')
    .shift()
  )

export default {
  components: { SIcon, SBox, STitle },

  data () {
    return {
      icons: icons
    }
  }
}
</script>

<style lang="scss">

.s-icon-example {
  display: flex;
  flex-direction: column;

  & > .s-box{

    & > .flex-inline{
      flex-flow: wrap;
    }

    & > .box-icons{
      width: 90%;

      & > .icons {
        display: flex;
        align-items: center;
        width: 33%;
        padding: 10px;

        & > span { margin-left: 10px; }
      }
    }
  }


}
</style>

