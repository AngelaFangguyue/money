<template>
  <button class="button" @click="$emit('click',$event)"><slot/></button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Dbutton extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button{
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