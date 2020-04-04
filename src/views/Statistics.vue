<template>
  <Layout>
<!--    <p>Statistics</p>-->
<!--    <Types :value.sync="typ" class-perfix="zzz"></Types>-->
<!--    <Types :value.sync="typ" class-perfix="zzz1"></Types>-->
    <Tabs :data-source="typeList" :value.sync="typ" class-perfix="types"></Tabs>
    <Tabs :data-source="intervalList" :value.sync="interval" class-perfix="interval" height="48px"></Tabs>
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
    typ = "-";
    typeList = typeList;
    interval = "day";
    intervalList = intervalList;
  }
</script>

<style lang="scss" scoped>
  ::v-deep  .types-tabs-item{

      /*border:1px solid red;*/
      background-color: white;
      &.selected{
        background-color: #c4c4c4;
        &::after{
          display: none;
        }
      }

    }


  ::v-deep .interval-tabs-item{
    /*height: 48px;*/
    }




</style>