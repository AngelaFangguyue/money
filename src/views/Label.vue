<template>
  <Layout>
    <div class="tags">
      <router-link :to="`/Label/EditLabel/${tag.id}`" class="tag" v-for="tag in tagList" :key="tag.id" ><span>{{tag.name}}</span><Icon icon-name="#right"></Icon></router-link>
    </div>
    <div class="createTag-wrapper">
<!--      <button class="createTag" @click="createTag">新增标签</button>-->
      <Dbutton class="createTag" v-on:click="createTag">新增标签</Dbutton>
    </div>
  </Layout>
</template>

<script lang="ts">
// import Vue from 'vue';
 import Icon from '@/components/Icon.vue';
 import {Component} from 'vue-property-decorator';
 import Dbutton from '@/views/Dbutton.vue';
 import {mixins} from 'vue-class-component';
 import {TagHelper} from '@/mixins/TagHelper';
//import store from '@/store/index2';

@Component({components:{Dbutton, Icon},
computed:{tagList(){return this.$store.state.tagList;}}
})
  export default class Label extends mixins(TagHelper){
  created(){
    this.$store.commit('fetchTags');
  }
  // createTag(){
  //   const name = window.prompt("请输入标签名");
  //   if (!name){return window.alert("标签名不能为空");}
  //   this.$store.commit('createTag',name);
  // }

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