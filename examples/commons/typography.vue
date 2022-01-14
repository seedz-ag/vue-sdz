<template>
  <div class="s-typography" :class="classTitle">{{ title }}</div>
</template>

<script>
export default {
  name: 'STypography',

  props: {
    classTitle: String,
    title: String
  }
}
</script>

<style lang="scss">
  @import "./src/styles/_index.scss";

.s-typography{
  color: color(base,base);
}

.title-1{
  font-size: 1.80rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.title-1:after{
  content: "";
  height: 2px;
  width: 80px;
  background-color: #000;
  display: block;
  margin-top: 30px;
}

.title-2{
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.h1{
  font-size: 34px;
  font-weight: bold;
}

.h2{
  font-size: 30px;
  font-weight: bold;
}

.h3{
  font-size: 28px;
  font-weight: bold;
}

.h4{
  font-size: 24px;
  font-weight: bold;
}

.h5{
  font-size: 20px;
  font-weight: bold;
}

.h6{
  font-size: 14px;
  font-weight: bold;
}

.subtitle-1{
  font-weight: 500;
  font-size: 28px;
}

.subtitle-2{
  font-weight: 500;
  font-size: 24px;
}

.paragraph-1{
  font-size: 16px;
}

.paragraph-2{
  font-size: 14px;
}

.caption{
  font-size: 12px;
}
</style>
