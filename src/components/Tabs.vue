<template>
  <div>
    <ul class="tabs" :class="{[classPerfix+'-tabs']:classPerfix}">
      <li v-for="item in dataSource" :key="item.value"
          class="tabs-item"
          :class="liclass(item)"
          @click="selected(item)">
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type dataSourceItem = {text: string;value: string};

  @Component
  export default class Tabs extends Vue {
    @Prop(String) classPerfix?: string;
    @Prop({required:true,type:Array}) dataSource!: {text: string;value: string}[];

    @Prop(String) readonly value!: string;

    liclass(item: dataSourceItem){
      return {selected:item.value===this.value,
      [this.classPerfix+'-tabs-item']:this.classPerfix}}

    selected(item: dataSourceItem){
      this.$emit("update:value",item.value);
    }
  }
</script>

<style lang="scss" scoped>
  .tabs{
    background: #c4c4c4;
    display:flex;
    font-size:24px;
     &-item{
      flex-grow: 0.5;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected{
        &::after{
          content:"";
          display: block;
          position: absolute;
          bottom:0;
          left:0;
          width: 100%;
          border-bottom: 4px solid #333;
        }
    }}
  }

</style>