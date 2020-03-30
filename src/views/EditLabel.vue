<template>
  <Layout>
    <div class="navBar">
      <Icon class="lefticon" icon-name="#left" @click="goBack"></Icon>
      <span class="title">编辑标签</span>
      <span class="righticon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value1="tag.name" @update:value1="updateTag" field-name="标签" place-holder="请输入标签名"></FormItem>
    </div>
<div class="button-wrapper">
  <Dbutton @click="deleteTag">删除标签</Dbutton>
</div>

  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import FormItem from '@/views/Money/FormItem.vue';
  import Dbutton from '@/views/Dbutton.vue';
  @Component({
    components: {Dbutton, FormItem, Icon}
  })
  export default class EditLabel extends Vue {
    tag?: {id: string;name: string} = undefined;

    created(){
      const id = this.$route.params.id;
      const tag = window.findTag(id);
      if(tag){
        this.tag = tag;
      }else{
        this.$router.replace('/404');//默认的404页面
      }
    }

    updateTag(a: string){
      console.log(a);
      if(this.tag){
        window.updateTag(this.tag.id,a);
      }
    }

    deleteTag(id: string){
      if(this.tag){
        window.deleteTag(this.tag.id);
        this.$router.back();
      }
    }

    goBack(){
      console.log('hi');
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
.navBar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-size: 16px;
  padding:12px 16px;
  .lefticon{
    width: 24px;
    height: 24px;
  }
  .title{

  }
  .righticon{
    width: 24px;
    height: 24px;
  }
}
.form-wrapper{
  margin-top: 8px;
background-color: white;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
</style>