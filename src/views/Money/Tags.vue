<template>
  <div class="tags">
    <div class="new">
      <button @click="newTags">新增标签</button>
    </div>
    <ul class="current">
<!--      <li v-for="i in dataSource" :key="i.id"  :class="{selected:selectedTags.indexOf(i.id)>=0}" @click="toggle(i.id)">{{i.name}}</li>-->
      <li v-for="i in tagList" :key="i.id"  :class="{selected:selectedTags.indexOf(i.id)>=0}" @click="toggle(i.id)">{{i.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import  Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import store from '@/store/index2';

  @Component
  export default class Tags extends Vue{

    @Prop(Array) value!: string[];

    // @Prop({required:true}) dataSource!: string[]  ;

    tagList = store.tagList;

    selectedTags: string[] = [];

    toggle(a: string){
      //////////////
      // if(event){
      //   console.log(event);
      //   if(event.target) {
      //     console.log(event.target);
      //     event.target.className  = "selected";
      //   }
      //}
      ///////////////
//////////////
      const index = this.selectedTags.indexOf(a);
      if(index>=0){
        this.selectedTags.splice(index,1);
        //console.log("dianji2:",this.selectedTags);

      }else{
        this.selectedTags.push(a);
       // console.log("dianji1:",this.selectedTags);
      }
//////////////

      this.$emit("update:value",this.selectedTags);

    }

    newTags(){
      const newTag = window.prompt("tags");
      if (!newTag){
        window.alert("输入不能为空");
      }else {
          //this.$emit("add",newTag);
        store.createTag(newTag);
        }

      }
  }
</script>

<style lang="scss" scoped>
  .tags{
    background: #fff;
    font-size: 14px;
    padding:16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current{
      display: flex;
      flex-wrap: wrap;
      > li{
        $h:24px;
        $bg:#d9d9d9;
        background: $bg;
        height:$h;
        width: $h*2;
        border-radius: $h/2;
        text-align: center;
        line-height: $h;
        margin-right: 12px;
        padding:  0 16px;
        margin-top: 4px;
        &.selected{
          background: darken($bg,50%);
          color:white;
        }
      }
    }
    > .new{
      padding-top: 16px;
      button{
        background: transparent;
        color:#999999;
        border:none;
        border-bottom: 1px solid;
        padding: 0 3px;
      }

    }
  }
</style>