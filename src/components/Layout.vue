<template>
  <div class="layout-wrapper" :class="`${classPerfix}-wrapper`">
    <div class="content" :class="`${classPerfix}-content`">
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
    name: 'Layout',
    props:["classPerfix"]
  };
</script>

<style lang="scss" scoped>
  .layout-wrapper{
    /*border:1px solid blue;*/
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content{
    /*border:1px solid darkgreen;*/
    overflow: auto;
    flex-grow:1;
  }
</style>