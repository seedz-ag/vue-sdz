<script>
export default {
  name: 'SContainer',

  functional: true,

  render (h, { children }) {
    return h('div', { class: 's-container' }, children)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-container {
  width: 100%;

  margin: 10px;
  padding: 10px;
  max-width: 768px;

  @include tablet {
    margin: 16px;
    padding: 16px;
    max-width: 992px;
  }

  @include desktop {
    margin: 24px;
    padding: 24px;
    max-width: 1200px;
  }
}
</style>
