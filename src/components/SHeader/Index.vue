<template>
  <div class="s-header">
    <div class="logo">
      <img src="../../../dist/image/logo.svg">
    </div>

    <div class="search">
      <s-input
        round
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />
    </div>

    <div class="icons">
      <s-button link secondary-icon-color to="https://www.google.com"><i class="icon s-icon icon sdz-star" /></s-button>

      <s-button link secondary-icon-color to="https://www.google.com"><i class="icon s-icon icon sdz-user" /></s-button>

      <s-button link secondary-icon-color to="https://www.google.com"><i class="icon s-icon icon sdz-bell" /></s-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SHeader',

  components: {
    SIcon: () => import('../SIcon/Index.vue').then(c => c.default),
    SButton: () => import('../SButton/Index.vue').then(c => c.default),
    SInput: () => import('../SInput/Index.vue').then(c => c.default)
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-header{
  display: flex;
  height: 100px;
  padding: 30px 20px;
  border-radius: 10px 10px;
  -webkit-box-shadow: 0px 6px 12px -5px #000000;
  box-shadow: 0px 6px 19px -18px #000000;

  & > .logo {
    width: 100%;
    max-width: 225px;
    flex-direction: row;
    display: flex;

    & > img {
      height: 100%;
    }
  }

  & > .search{
    width: 50%;

    & > .s-input{
      margin-top: 0px;
      height: 40px;
    }
  }

  & > .icons{
    display: flex;
    justify-content: flex-end;
    width: 30%;

    & > .s-button {
      margin-right: 20px;

      &:last-child {
        margin-right: 0px;
      }
    }

    & > .s-button > .text > .s-icon{
      font-size: 30px;
    }
  }
}
</style>
