<template>
  <Layout>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag"><span>{{tag}}</span><Icon icon-name="#right"></Icon></li>
    </ul>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新增标签</button>
    </div>
  </Layout>


</template>

<script lang="ts">
 import Vue from 'vue';
 import Icon from '@/components/Icon.vue';
 import {Component} from 'vue-property-decorator';
 import tagListModel from '@/model/tagListModel';


 tagListModel.fetch();

@Component({components:{Icon}})
  export default class Label extends Vue{
   tags = tagListModel.data;
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
  > li{
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