<template>
  <div class="nav">
    <router-link to="/Money">
      <Icon iconName="#money"/>
      MONEY</router-link> |
    <router-link to="/Lable">
      <Icon iconName="#label"/>
      LABLE</router-link>|
    <router-link to="/Statistics">
      <Icon iconName="#tongji"/>
      STATISTICS</router-link> |
  </div>
</template>


<script lang="ts">

  import Icon from '@/components/Icon.vue';//视频中是将其导入在main.ts中
  // let importAll =(requireContext:__WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
  // try{importAll(require.context('../assets/icons',true,/\.svg$/));}
  // catch(error){console.log(error);}

  // import x from '../assets/icons/label.svg';
  // console.log("x:",x);
  // import y from '../assets/icons/money.svg';
  // console.log("y:",y);
  // import z from '../assets/icons/tongji.svg';
  // console.log("z:",z);


  export default {
    name: 'Nav',
    components: {Icon}
  };
</script>

<style lang="scss" scoped>
div.nav{
  border:1px solid red;
}
</style>