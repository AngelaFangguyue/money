<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>money</p>
    </div>
    <Nav/>
  </div>

</template>

<script lang="ts">
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'Money',
    components: {Nav}
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