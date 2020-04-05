<template>
  <Layout>
<!--    <p>Statistics</p>-->
<!--    <Types :value.sync="typ" class-perfix="zzz"></Types>-->
<!--    <Types :value.sync="typ" class-perfix="zzz1"></Types>-->
    <Tabs :data-source="typeList" :value.sync="typ" class-perfix="types"></Tabs>
<!--    <Tabs :data-source="intervalList" :value.sync="interval" class-perfix="interval" height="48px"></Tabs>-->

    <ol v-if="result.length>0">
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{beautify(group.title)}}<span> {{group.total}}</span></h3>

      <ol>
        <li v-for="(item,index) in group.items" :key="index" class="record">
          <span>{{tagString(item.tags)}}</span>
          <span class="notes">{{item.notes}}wwwwwwwwwdfgfgddfgsd世界顶级的</span>
          <span>{{item.amount}}</span>
        </li>
      </ol>
      </li>
    </ol>
  <div v-else class="noResult">
    目前没有相关记录
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
    margin-right: 16px;
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
import dayjs, {isDayjs} from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue{

  beautify(date: string){
    //console.log("date:",date);
    const date1 = dayjs(date);
    //console.log("date1:",date1);
    const nowd = dayjs();
   // console.log("dayjs(date):",dayjs(date));
    if(date1.isSame(nowd,'day')){
      return '今天';
    }else if(date1.isSame(nowd.subtract(1,'day'),'day')){
      return '昨天';
    }else if(date1.isSame(nowd.subtract(2,'day'),'day')){
      return '前天';
    }else if(date1.isSame(nowd,'year')){
      return date1.format('MM月D日')
    }else{
      return date1.format('YYYY年MM月D日')
    }
  }

  tagString(tags: Tag[]){
    return tags.length===0?'无':tags.map(item=>item.name).join('，');
  }

  get recordList(){
    return (this.$store.state as myStore).recordList;
  }

  get result(){
    const {recordList} = this;
    if(recordList.length===0){return [];}
    //先对recordList进行一下克隆
    //const newRecordList = clone(recordList);
    //console.log("this.typ:",this.typ);
    //console.log(newRecordList.filter(item=>item.type===this.typ));
    //console.log("newRecordList:",newRecordList);
    const newRecordList = clone(recordList).filter(item=>item.type===this.typ).sort((a,b)=>dayjs(b.created).valueOf()-dayjs(a.created).valueOf());
   //上面使用计算属性，加一个filter就可以了
    //这里要修复一下bug，如果newRecordList为空的话，就直接返回
    if(newRecordList.length===0){return [];}
    //console.log("newRecordList:",newRecordList);
    /////////////////////////
    // const hashTable: {[key: string]: {title: string;items: RecordItem[]}} = {};
    // for(let i=0;i<recordList.length;i++){
    //   const [date,time] = recordList[i].created!.split("T");
    //   hashTable[date] = hashTable[date] || {title:date,items:[]};
    //   hashTable[date].items.push(recordList[i]);
    // }
    ////////////////////////
    //console.log("hashTable:",hashTable);
   // console.log("this.recordList:",this.recordList);
    //return this.recordList;
   // console.log("newRecordList:",newRecordList);
    type resultTableType = {title: string;total?: number;items: RecordItem[]}[];
    const resultTable: resultTableType = [{title:dayjs(newRecordList[0].created).format('YYYY-MM-DD'),items:[newRecordList[0]]}];
    for(let i=1;i<newRecordList.length;i++){
      const current = newRecordList[i];
      const last = resultTable[resultTable.length-1]||[];
      if(dayjs(current.created).format('YYYY-MM-DD')===last.title){
        last.items.push(newRecordList[i]);
      }else{
        resultTable.push({title:dayjs(current.created).format('YYYY-MM-DD'),items:[newRecordList[i]]});
      }
    }
    console.log("resultTable:",resultTable);

    //resultTable.map((item)=>{});
    // for(let i=0;i<resultTable.length;i++){
    //   let totalMoney = 0;
    //   for(let j=0;j<resultTable[i].items.length;j++){
    //     totalMoney += resultTable[i].items[j].amount;
    //   }
    //   resultTable[i].total = totalMoney;
    // }


    resultTable.map(group=>{
      group.total = group.items.reduce((sum,item)=> sum += item.amount,0);
    });


   // return hashTable;
    return resultTable;
  }

  created(){
    this.$store.commit("fetchRecords");
  }

    typ = "-";//这个是类型：支出或者收入
    typeList = typeList;
    interval = "day";
    intervalList = intervalList;
  }
</script>
<style lang="scss" scoped>
  .noResult{
    padding: 16px;
    text-align: center;
  }
  ::v-deep{
    .types-tabs-item{
      /*border:1px solid red;*/
      background-color: #c4c4c4;
      &.selected{
        background-color: white;
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