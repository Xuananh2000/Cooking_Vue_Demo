<template>
  <div id="app">
    <HelloWorld msg=""/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import 'scss/style.css';
@import "scss/style_contact.css";
@import "scss/style_recipe.css";
@import "scss/style_blog.css";
</style>
