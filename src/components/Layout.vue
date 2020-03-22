<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
<!--      <svg>-->
<!--        <use xlink:href="#money"/>-->
<!--      </svg>-->
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    border:1px solid blue;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    border:1px solid darkgreen;
    overflow: auto;
    flex-grow:1;
  }
</style>