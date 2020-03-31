<template>

 <Layout class-perfix="money">
   {{recordList}}
<!--   <Numberpad :value="record.amount" @update:value="onUpdateAmount"/>-->
   <Numberpad :value.sync="record.amount" @update:record="saveRecord"/>
<!--   <Types as="asasas"  :value="record.type" @update:value="onUpdateType"/>-->
   <Types as="asasas"  :value.sync="record.type"/>
<!--   <Notes :value="record.notes" @update:value="onUpdateNotes"/>-->
   <div class="notes">
   <FormItem @update:value1="onUpdateNotes" field-name="备注" place-holder="请输入备注"/>
   </div>
   <Tags :data-source.sync="tags" :value.sync="record.tags" />
 </Layout>
</template>



<script lang="ts">
  import Vue from 'vue';
  import FormItem from '@/views/Money/FormItem.vue';
  import Numberpad from '@/views/Money/Numberpad.vue';
  import Types from '@/views/Money/Types.vue';
  import Tags from '@/views/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/model/recordListModel';
  //const model = require('@/model.js').default;
import store from '@/store/index2';


  window.localStorage.setItem("version","0.0.1");



   @Component({
     components:{FormItem,Numberpad,Types,Tags}
   })
  export default class Money extends Vue{

     //tags = tagList;
     tags = store.tagList;

    recordList = store.recordList;

    record: RecordItem = {
      tags:[],
      notes:'',
      type:'-',
      amount:10,
    };

     //a1 = '-';
    //tags = ['衣','食','住','行'];


     // onUpdateTags(a: string[]){
     //   this.record.tags = a;
     //  console.log(a);
     // }

     onUpdateNotes(a: string){
       this.record.notes = a;
       console.log(a);
     }

     // onUpdateType(a: string){
     //   this.record.type = a;
     //   console.log(a);
     // }

     // onUpdateAmount(a: string){
     //   this.record.amount = parseFloat(a);
     //   console.log(a);
     // }

  saveRecord(){
   store.createRecord(this.record);
  }

  // @Watch("recordList")
  //   onRecordListChanged(){
  //      //window.localStorage.setItem("recordList",JSON.stringify(this.recordList));
  //     recordListModel.save();
  //   }

  }
</script>



<style lang="scss">
  .money-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>



<style lang="scss" scoped>
  .notes{
    padding: 12px 0;
  }
</style>