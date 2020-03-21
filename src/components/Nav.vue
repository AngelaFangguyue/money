<template>
  <div class="nav">
    <router-link to="/Money">MONEY</router-link> |
    <router-link to="/Lable">LABLE</router-link>|
    <router-link to="/Statistics">STATISTICS</router-link> |
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
div.nav{
  border:1px solid red;
}
</style>