<template>
  <svg class="icon" @click="$emit('click',$event)">
    <use v-bind:xlink:href="iconName"/>
<!--    <use :xlink:href="'#'+iconName"/>-->
  </svg>
</template>

<script lang="ts">
  const importAll =(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
  try{importAll(require.context('../assets/icons',true,/\.svg$/));}
  catch(error){console.log("error:",error);}
  export default {
    name: 'Icon',
    props:['iconName']
  };
  console.log('hihihi');
  // import x from '@/assets/icons/label.svg';
</script>

<style lang="scss" scoped>
svg.icon{//
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>