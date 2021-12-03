<template>
  <div class="s-image-example">
    <s-title class="h1" title="Image" />

    <s-box class="flex-center">
      <div class="alter-image">
        <s-image
          :src="src"
          :duration="100"
          fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"
        />
      </div>
      <div class="flex-inline flex-center">
        <s-button primary @click="changeImage('chaves')">chaves</s-button>
        <s-button primary @click="changeImage('seumadruga')">seu madruga</s-button>
        <s-button primary @click="changeImage('nhonho')">nhonho</s-button>
        <s-button primary @click="changeImage('victao')">victao</s-button>
      </div>
    </s-box>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SImage from '../../../src/components/SImage/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SButton, SImage, SBox, STitle },

  data () {
    return {
      src: ''
    }
  },

  created () {
    this.changeImage('chaves')
  },

  methods: {
    changeImage (image) {
      this.src = new URL(`../../../src/assets/examples/${image}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss">
.s-image-example {
  margin: 0 auto;

  & > .s-box{
    & > .s-image { width: 250px; }

    .alter-image{
      width:50%;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .s-button {
      margin-top: 10px;
      margin-left: 15px;
    }
  }
}
</style>
