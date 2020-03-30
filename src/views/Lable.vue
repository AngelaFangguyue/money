<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/Label/EditLabel/${tag.id}`" class="tag" v-for="tag in tags" :key="tag.id" ><span>{{tag.name}}</span><Icon icon-name="#right"></Icon></router-link>
    </div>
    <div class="createTag-wrapper">
<!--      <button class="createTag" @click="createTag">新增标签</button>-->
      <Dbutton class="createTag" v-on:click="createTag">新增标签</Dbutton>
    </div>
  </Layout>


</template>

<script lang="ts">
 import Vue from 'vue';
 import Icon from '@/components/Icon.vue';
 import {Component} from 'vue-property-decorator';
 import tagListModel from '@/model/tagListModel';
 import Dbutton from '@/views/Dbutton.vue';


 //tagListModel.fetch();

@Component({components:{Dbutton, Icon}})
  export default class Label extends Vue{
   //tags = tagListModel.data;
  tags = window.tagList;
  createTag(){
    const name = window.prompt("请输入新增标签名");
    if(name){
      const result = tagListModel.create(name);
      if(result==="success"){
        window.alert("创建成功")
      }else if(result==="duplicated"){
        window.alert("标签已存在")
      }
    }
  }

  }
</script>

<style lang="scss" scoped>
.tags{
  background-color: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag{
    min-height:44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg{
      margin-right: 16px;
      width: 18px;
      height: 18px;
      color: #666;
    }
  }

}
  .createTag{
    border:none;
    border-radius: 4px;
    background-color: #767676;
    color:white;
    height:40px;
    padding:0 16px;
    &-wrapper{
      padding: 16px;
      text-align: center;
      margin-top:28px;
    }

  }
</style>