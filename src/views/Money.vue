<template>
 <Layout>
   <svg>
     <use xlink:href="#money"/>
   </svg>
   <p>Money</p>
 </Layout>

</template>

<script lang="ts">
  export default {
    name: 'Money',

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
  }
</style>