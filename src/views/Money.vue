<template>
 <Layout class-perfix="money">
{{record}}
   <Numberpad @update:value="onUpdateAmount"/>
   <Types as="asasas"  :value="record.type" @update:value="onUpdateType"/>
   <Notes @update:value="onUpdateNotes"/>
   <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
 </Layout>
</template>



<script lang="ts">
  import Vue from 'vue';
  import Notes from '@/views/Money/Notes.vue';
  import Numberpad from '@/views/Money/Numberpad.vue';
  import Types from '@/views/Money/Types.vue';
  import Tags from '@/views/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';


  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: string;
  }

   @Component({
     components:{Notes,Numberpad,Types,Tags}
   })
  export default class Money extends Vue{

    record: Record = {
      tags:[],
      notes:'',
      type:'-',
      amount:'0'
    };

     a1 = '-';
    tags = ['衣','食','住','行'];

     onUpdateTags(a: string[]){
       this.record.tags = a;
      console.log(a);
     }

     onUpdateNotes(a: string){
       this.record.notes = a;
       console.log(a);
     }

     onUpdateType(a: string){
       this.record.type = a;
       console.log(a);
     }

     onUpdateAmount(a: string){
       this.record.amount = a;
       console.log(a);
     }


  }
</script>



<style lang="scss">
  .money-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>



<style lang="scss" scoped>
</style>