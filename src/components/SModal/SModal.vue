<template>
  <div class="s-modal">
    <div class="s-modal-content">
      <div class="s-modal-close">
        <button>x</button>
      </div>
      <div class="s-modal-title">
        <h3>{{ title }}</h3>
      </div>
      <div class="s-modal-body">
        teste
      </div>
      <div class="s-modal-footer">
        teste
      </div>
    </div>
  </div>
</template>

<script>
import options from '../../config'

export default {
  name: 'SModal',
  props: {
    title: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss">
.s-modal {
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &-content {
    background-color: #fff;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 8px;
  }
  &-title {
    padding: 10px 30px;
    h3 {
      margin: 0;
    }
  }
  &-body {
    padding: 30px;
  }
  &-footer {
    padding: 30px;
  }
}
</style>
