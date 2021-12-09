<template>
  <div class="s-breadcrumb">
    <ul>
      <li><a href="#">Parent Page</a></li>
      <li><a href="#">Sub-Parent Page</a></li>
      <li><a href="#">Sub-Parent Page</a></li>
      <li>Current Page</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SBreadcrumb'
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-breadcrumb {
  display: flex;

}
</style>
