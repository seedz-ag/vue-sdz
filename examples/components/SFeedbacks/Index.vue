<template>
  <div class="s-feedbacks-example">
    <s-feedbacks :dismissible="dismissible" :feedbacks="$feedback.list" @close="feedback => $feedback.remove(feedback)" />

    <s-button outlined full-width @click="dismissible = !dismissible">toggle dismissible</s-button>

    <s-button @click="onInfo">show feedback</s-button>
    <s-button error @click="onError">show feedback error</s-button>
    <s-button success @click="onSucces">show feedback success</s-button>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SFeedbacks from '../../../src/components/SFeedbacks/Index.vue'

export default {
  components: { SButton, SFeedbacks },

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
</style>
