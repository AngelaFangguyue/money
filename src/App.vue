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

<style lang="scss">
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
    color:inherit;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
