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
 // import store from '@/store/index2';

  @Component({
    components: {Dbutton, FormItem, Icon}
  })
  export default class EditLabel extends Vue {
    tag?: {id: string;name: string} = undefined;
//TODO
//     created(){
//       const id = this.$route.params.id;
//       console.log("id",id);
//       const tag = store.findTag(id);
//       let tag = this.$store.commit('findTag',id);
//       console.log(tag);
      // if(typeof(tag)===void){
      //   if(tag){
      //     this.tag = tag;
      //   }else{
      //     this.$router.replace('/404');//默认的404页面
      //   }
      // }
    //}
//TODO
    // updateTag(a: string){
    //   console.log(a);
    //   if(this.tag){
    //     this.$store.commit('updateTag',{this.tag.id,a});
    //   }
    // }
//TODO
    // deleteTag(id: string){
    //   if(this.tag){
    //     this.$store.commit('deleteTag',this.tag.id);
    //     this.$router.back();
    //   }
    // }
//TODO
    // goBack(){
    //   console.log('hi');
    //   this.$router.back();
    // }
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