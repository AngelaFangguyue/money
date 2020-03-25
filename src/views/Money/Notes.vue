<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Notes'
  };
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