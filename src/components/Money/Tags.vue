<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
<!--      <li v-for="i in dataSource" :key="i.id"  :class="{selected:selectedTags.indexOf(i.id)>=0}" @click="toggle(i.id)">{{i.name}}</li>-->
      <li v-for="i in tagList" :key="i.id"  :class="{selected:value.indexOf(i)>=0}" @click="toggle(i)"
     >{{i.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import  Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import {TagHelper} from '@/mixins/TagHelper';
  //import store from '@/store/index2';

  // @Component({computed:{tagList(){return this.$store.state.tagList;}}})
  @Component
  export default class Tags extends mixins(TagHelper){
    @Prop(Array) value!: Tag[];
    // @Prop({required:true}) dataSource!: string[]  ;
    created(){
      this.$store.commit('fetchTags');
    }


    get tagList(){

      return this.$store.state.tagList;
    }

    ////*selectedTags: Tag[] = [];
    // create(){
    //   const name = window.prompt("请输入标签名");
    //   if (!name){return window.alert("标签名不能为空");}
    //     this.$store.commit('createTag',name);
    // }
    toggle(a: Tag){
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
      ////*const index = this.selectedTags.indexOf(a);
      const index = this.value.indexOf(a);
      if(index>=0){
        ////*this.selectedTags.splice(index,1);
        this.value.splice(index,1);
        //console.log("dianji2:",this.selectedTags);
      }else{
        ////*this.selectedTags.push(a);
        this.value.push(a);
       // console.log("dianji1:",this.selectedTags);
      }
      ////*console.log("this.selectedTags:",this.selectedTags);
      console.log("this.selectedTags:",this.value);
      ////*this.$emit("update:value",this.selectedTags);
      this.$emit("update:value",this.value);

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