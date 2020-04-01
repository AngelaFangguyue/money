<template>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--&lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="/about">About</router-link>|&ndash;&gt;-->
<!--      <router-link to="/Money">MONEY</router-link> |-->
<!--      <router-link to="/Lable">LABLE</router-link>|-->
<!--      <router-link to="/Statistics">STATISTICS</router-link> |-->
<!--      <router-link to="/rrr111">test</router-link>|-->
<!--      <router-link to="/home">home</router-link>|-->

<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
<div><!--  app-->
<!--  <hr>-->
    <router-view/>


  </div>
</template>

<!--<script>-->
<!--  import store from "@/store/index2";-->
<!--  import Vue from 'vue';-->
<!--  import {Component} from 'vue-property-decorator';-->
<!--  @Component-->
<!--  export default class App extends Vue{-->
<!--    store = store;-->
<!--  }-->

<!--</script>-->

<style lang="scss">
  /**{*/
  /*  margin:0;*/
  /*  padding:0;*/
  /*  box-sizing: border-box;*/
  /*}*/
  /*a{*/
  /*  text-decoration: none;*/
  /*  color:inherit;*/
  /*}*/
  @import '~@/assets/style/reset.scss' ;
  @import '~@/assets/style/helper.scss' ;
  body{
    line-height: 1.5;
    font-family: $font-hei;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 16px;
    background-color: #f5f5f5;
  }
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #333;*/
}


</style>
