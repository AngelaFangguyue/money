<template>
 <Layout class-perfix="money">
{{record}}
<!--   <Numberpad :value="record.amount" @update:value="onUpdateAmount"/>-->
   <Numberpad :value.sync="record.amount"/>
<!--   <Types as="asasas"  :value="record.type" @update:value="onUpdateType"/>-->
   <Types as="asasas"  :value.sync="record.type"/>
<!--   <Notes :value="record.notes" @update:value="onUpdateNotes"/>-->
   <Notes :value.sync="record.notes"/>
   <Tags :data-source.sync="tags" :value.sync="record.tags" />
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
    amount: number;
  }

   @Component({
     components:{Notes,Numberpad,Types,Tags}
   })
  export default class Money extends Vue{

    record: Record = {
      tags:[],
      notes:'',
      type:'-',
      amount:10
    };

     a1 = '-';
    tags = ['衣','食','住','行'];

     // onUpdateTags(a: string[]){
     //   this.record.tags = a;
     //  console.log(a);
     // }

     // onUpdateNotes(a: string){
     //   this.record.notes = a;
     //   console.log(a);
     // }

     // onUpdateType(a: string){
     //   this.record.type = a;
     //   console.log(a);
     // }

     // onUpdateAmount(a: string){
     //   this.record.amount = parseFloat(a);
     //   console.log(a);
     // }


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