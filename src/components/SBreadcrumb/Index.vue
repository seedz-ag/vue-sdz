<template>
  <div class="s-breadcrumb">
    <ul :class="['list', color]">
      <li v-for="{text, current, to, external} in items" :key="text" class="item">
        <a v-if="!current" :href="to" :target="external ? '_blank' : '_self' " class="parent">
          {{ text }}
        </a>
        <span v-else>{{ text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SBreadcrumb',

  props: {
    color: {
      type: String,
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    },

    items: { type: Array, required: true }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-breadcrumb {

  & > .list{
    list-style-type: none;
    display: flex;
  }

  & > .list > .item{
    display: inline-flex;
    font-size: .8rem;
    color: color(base, medium);
  }

  & > .list > .item:not(:first-child):before{
    content: ">";
    margin: 0 12px;
  }

  & > .list > .item> .parent{
    //text-decoration: underline;
    color: color(base, medium);
  }

  & > .list > .item> .parent:hover{
    text-decoration: underline;
  }

  & > .list.dark > .item, & > .list.dark > .item > .parent{
    color: color(neutral, base);
  }
}
</style>
