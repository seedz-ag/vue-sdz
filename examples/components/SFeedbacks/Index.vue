<template>
  <div class="s-feedbacks-example">
    <h1 class="h1">Feedbacks</h1>
    <s-box>
      <s-feedbacks :dismissible="dismissible" :feedbacks="$feedback.list" @close="feedback => $feedback.remove(feedback)" />

      <s-button outlined full-width @click="dismissible = !dismissible">toggle dismissible</s-button>

      <div class="buttons-actions flex-inline">
        <s-button @click="onInfo">show feedback</s-button>
        <s-button error @click="onError">show feedback error</s-button>
        <s-button success @click="onSucces">show feedback success</s-button>
      </div>
      
    </s-box>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SFeedbacks from '../../../src/components/SFeedbacks/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SButton, SFeedbacks, SBox },

  data () {
    return {
      dismissible: true
    }
  },

  methods: {
    onInfo () {
      this.$feedback.add({ type: 'info', message: 'teste' })
    },

    onSucces () {
      this.$feedback.add({ type: 'success', message: 'A sua compra foi', highlighted: 'aprovada!' })
    },

    onError () {
      this.$feedback.add({ type: 'error', message: 'A sua compra foi', highlighted: 'recusada!' })
    }
  }
}
</script>

<style lang="scss">
.s-feedbacks-example > .s-button { margin-bottom: 40px; }
.buttons-actions{
  margin-top:30px;

  & > .s-button{
    margin-right: 20px;
  }
}
</style>
