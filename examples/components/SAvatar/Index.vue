<template>
  <div class="s-avatar-example">
    <s-title size="title-1">Avatar</s-title>

    <p class="subtitle">
      Avatar é uma representação em miniatura de uma pessoa usuária, para representar uma organização, use o componente "brand".
    </p>

    <s-title size="title-2">Quando Usar</s-title>

    <p class="subtitle">
      Esse componente pode ser usado em lugares onde existe o upload de uma foto da pessoa usuária;
    </p>

    <p class="subtitle">
      Pode ser usado em contextos onde essa imagem é fixa, como em um card de depoimento.
    </p>

    <s-box class="flex-inline flex-center">
      <s-avatar size="p"><s-icon :width="20" :height="18" icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar><s-icon icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="g"><s-icon icon="mingcute:user-1-line" /></s-avatar>
    </s-box>

    <pre-code :code="code1" />

    <s-box class="flex-inline flex-center">
      <s-avatar size="p">
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>
      <s-avatar>
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>
      <s-avatar size="g">
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>
    </s-box>

    <pre-code :code="code2" />

    <s-box class="flex-inline flex-center dark">
      <s-avatar size="p" color="dark"><s-icon :width="20" :height="18" icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="m" color="dark"><s-icon icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="g" color="dark"><s-icon icon="mingcute:user-1-line" /></s-avatar>
    </s-box>

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SAvatar from '../../../src/components/SAvatar/Index.vue'
import SIcon from '../../../src/components/SIcon/Index.vue'
import SImage from '../../../src/components/SImage/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SAvatar, SIcon, SImage, SBox, STitle, PreCode },

  data () {
    return {
      code1: `
      <s-avatar size="p"><s-icon :width="20" :height="18" icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar><s-icon icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="g"><s-icon icon="mingcute:user-1-line" /></s-avatar>`,
      code2: `
      <s-avatar size="p">
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>
      <s-avatar>
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>
      <s-avatar size="g">
        <s-image :src="src" fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg" />
      </s-avatar>`,
      code3: `
      <s-avatar size="p" color="dark"><s-icon :width="20" :height="18" icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="m" color="dark"><s-icon icon="mingcute:user-1-line" /></s-avatar>
      <s-avatar size="g" color="dark"><s-icon icon="mingcute:user-1-line" /></s-avatar>`,
      src: '../src/assets/images/avatar-example.png'
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-avatar-example {
  & > .flex-center {
    align-items: center;
  }
}


.s-avatar{
  margin-right: 20px;

  &:last-child{
    margin-right: 0px;
  }
}

.dark{
  background: color(primary, base);
}
</style>
