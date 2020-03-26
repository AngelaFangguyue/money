<template>
 <Layout class-perfix="money">
   <Numberpad/>
   <Types as="asasas"/>
   <Notes/>
   <Tags :data-source.sync="tags"/>
 </Layout>
</template>



<script lang="js">
  import Notes from '@/views/Money/Notes.vue';
  import Numberpad from '@/views/Money/Numberpad.vue';
  import Types from '@/views/Money/Types.vue';
  import Tags from '@/views/Money/Tags.vue';
  export default {
    name: 'Money',
    components:{Notes,Numberpad,Types,Tags},
    data(){
      return{tags:['衣','食','住','行']};
    }
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