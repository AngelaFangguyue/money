<template>
  <div>
    <label class="notes">
<!--      {{value1}}-->
      <span class="name">{{fieldName}}</span>
<!--      <input type="text" :value="value" @input="value=$event.target.value" placeholder="在这里输入备注">-->
<!--      <input type="text" :value="value" @input="inputValue" placeholder="在这里输入备注">-->
      <input type="text" v-model="value1" :placeholder="placeHolder">
    </label>
  </div>
</template>

<script lang="ts">
  import  Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue{
     value1 = '';
    // inputValue(event:KeyboardEvent){
    //   this.value = (event.target as HTMLInputElement).value;
    // }
    @Watch("value1")
    onValueChanged(){
      this.$emit("update:value",this.value1);
    }

    @Prop(String) value!: string;
    @Prop({required:true}) fieldName!: string;
    @Prop() placeHolder?: string;

  }
</script>

<style lang="scss" scoped>
  .notes{
    background: #f5f5f5;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    .name{padding-right: 16px;}
    input{
      flex-grow: 1;
      height:64px;
      padding-right: 16px;
      background: transparent;
      border:none;
    }
  }
</style>