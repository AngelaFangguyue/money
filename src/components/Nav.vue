<template>
  <nav>
    <router-link to="/Money" class="item" active-class="selected">
      <Icon iconName="#money"/>记账</router-link>
    <router-link to="/Lable" class="item" active-class="selected">
      <Icon iconName="#label"/>标签</router-link>
    <router-link to="/Statistics" class="item" active-class="selected">
      <Icon iconName="#tongji"/>统计</router-link>
  </nav>
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
  @import  '~@/assets/style/helper.scss';

nav{
  display: flex;
  /*flex-direction: row;*/
  @extend %outterShadow;
  font-size: 12px;
  > .item{
    padding:2px 0;
    width:33.3333%;
    /*flex-grow:1;*/
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon{
      width: 32px;
      height: 32px;
    }

    /*svg{width: 32px;height: 32px;}*/
    /*p{margin: 4px 0;}*/
    /*&.selected{*/
    /*  color:red;*/
    /*}*/
  }
  > .item.selected {
    /*color:red;*/
    color: $color-highlight;
  }
}
</style>