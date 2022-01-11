<template>
  <div class="container-source-code">
    <h1 v-if="title">{{ title }}</h1>
    <h2 v-if="subtitle" class="subtitle">{{ subtitle }}</h2>
    <div class="header-source-code">
      <p>Preview</p>
      <slot name="header" />
    </div>
    <div class="body">
      <slot name="content" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Container',
  props: {
    title: String,
    subtitle:  String
  }
}
</script>

<style scoped lang="scss">
    .container-source-code{
        text-align: left;
    }
    .subtitle{
        font-size:16px;
        font-weight:400;
        margin-top:10px;
    }
    .body{
      width: 100%;
      background-color: rgba(0,0,0,0.03);
      border-radius: 10px;
      padding: 10px;
      #prop{
        display: flex;  
        flex-wrap: wrap;
        width: 100%;
        justify-content:space-around;
      }
    }
    .header-source-code{
      width: 100%;
      border: 2px solid #F1F1F1;
      padding: 10px 20px 20px 20px;
      border-radius: 10px;
      height:auto;
      margin-bottom:15px;
      p{
        margin-bottom:10px;
      }
    }

</style>
