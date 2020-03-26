<template>
 <Layout class-perfix="money">
{{recordList}}
<!--   <Numberpad :value="record.amount" @update:value="onUpdateAmount"/>-->
   <Numberpad :value.sync="record.amount" @update:record="addRecord"/>
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
  import {Component, Watch} from 'vue-property-decorator';

window.localStorage.setItem("version","0.0.1");

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    created?: Date;
  }

   @Component({
     components:{Notes,Numberpad,Types,Tags}
   })
  export default class Money extends Vue{

    recordList: Record[] = JSON.parse(window.localStorage.getItem("recordList")||'[]');

    record: Record = {
      tags:[],
      notes:'',
      type:'-',
      amount:10,
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

  addRecord(){
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.created = new Date();
    this.recordList.push(record2);
    //console.log("this.recordList:",this.recordList);
  }

  @Watch("recordList")
    onRecordListChanged(){
       window.localStorage.setItem("recordList",JSON.stringify(this.recordList));
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