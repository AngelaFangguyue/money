<template>
 <Layout class-perfix="money">
   <Numberpad/>
   <Types as="asasas"/>
   <Notes/>
   <Tags />
 </Layout>
</template>



<script lang="ts">
  import Notes from '@/views/Money/Notes.vue';
  import Numberpad from '@/views/Money/Numberpad.vue';
  import Types from '@/views/Money/Types.vue';
  import Tags from '@/views/Money/Tags.vue';
  export default {
    name: 'Money',
    components:{Notes,Numberpad,Types,Tags}
  };
</script>



<style lang="scss">
  .money-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>



<style lang="scss" scoped>
</style>