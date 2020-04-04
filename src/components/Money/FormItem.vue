<template>
  <div>
    <label class="notes">
<!--      {{value1}}-->
      <span class="name">{{fieldName}}</span>
<!--      <input type="text" :value="value" @input="value=$event.target.value" placeholder="在这里输入备注">-->
<!--      <input type="text" :value="value" @input="inputValue" placeholder="在这里输入备注">-->
<!--      <input type="text" v-model="value1" :placeholder="placeHolder">-->
      <input type="text" :value="value1" @input="onValueChanged($event.target.value)" :placeholder="placeHolder">
    </label>
  </div>
</template>

<script lang="ts">
  import  Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue{
     //value1 = '';
     @Prop({default:''}) readonly value1!: string;
    // inputValue(event:KeyboardEvent){
    //   this.value = (event.target as HTMLInputElement).value;
    // }
    // @Watch("value1")
    onValueChanged(value: string){
      this.$emit("update:value1",value);
    }

    @Prop(String) value!: string;
    @Prop({required:true}) fieldName!: string;
    @Prop() placeHolder?: string;

  }
</script>

<style lang="scss" scoped>
  .notes{
    /*background: green;*/
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    .name{padding-right: 16px;}
    input{
      flex-grow: 1;
      height:40px;
      padding-right: 16px;
      background: transparent;
      border:none;
    }
  }
</style>