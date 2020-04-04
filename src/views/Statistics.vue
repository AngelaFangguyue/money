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
        <h3 class="title">{{group.title}}</h3>
      <ol>
        <li v-for="(item,index) in group.items" :key="index" class="record">
          <span>{{tagString(item.tags)}}</span>
          <span class="notes">{{item.notes}}wwwwwwwwwdfgfgddfgsd世界顶级的经济的恢复当时是况且况且开发司法考试放宽受到核辐射开发罗收到付款收款加分号可是覅我一日无放开手付款时间发货</span>
          <span>{{item.amount}}</span>
        </li>
      </ol>
      </li>
    </ol>
  </div>
  </Layout>
</template>
<style scoped lang="scss">
  %item{
    padding: 0 16px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title{
    @extend %item;
  }
  .record{
    background-color: white;
    @extend %item;
  }
  .notes{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-overflow:ellipsis;*/
  }

</style>
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

  tagString(tags: Tag[]){
    return tags.length===0?'无':tags.join('，');
  }

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