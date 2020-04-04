<template>
  <Layout>
<!--    <p>Statistics</p>-->
<!--    <Types :value.sync="typ" class-perfix="zzz"></Types>-->
<!--    <Types :value.sync="typ" class-perfix="zzz1"></Types>-->
    <Tabs :data-source="typeList" :value.sync="typ" class-perfix="types"></Tabs>
    <Tabs :data-source="intervalList" :value.sync="interval" class-perfix="interval" height="48px"></Tabs>
  <div>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3>{{group.title}}</h3>
      <ol>
        <li v-for="(item,index) in group.items" :key="index">
          {{item.amount}}《》{{item.created}}
        </li>
      </ol>

      </li>
    </ol>
  </div>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import typeList from '@/constants/typeList';
import intervalList from '@/constants/intervalList';
@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue{

  get recordList(){
    return (this.$store.state as myStore).recordList;
  }

  get result(){
    const {recordList} = this;
    const hashTable: {[key: string]: {title: string;items: RecordItem[]}} = {};
    for(let i=0;i<recordList.length;i++){
      const [date,time] = recordList[i].created!.split("T");
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    console.log(hashTable);
    console.log("this.recordList:",this.recordList);
    //return this.recordList;
    return hashTable;
  }
  created(){
    this.$store.commit("fetchRecords");
  }

    typ = "-";
    typeList = typeList;
    interval = "day";
    intervalList = intervalList;
  }
</script>
<style lang="scss" scoped>
  ::v-deep{
    .types-tabs-item{
      /*border:1px solid red;*/
      background-color: white;
      &.selected{
        background-color: #c4c4c4;
        &::after{
          display: none;
        }
      }
    }
    .interval-tabs-item{
      /*height: 48px;*/
    }

  }

</style>