<template>
  <div>404
<!-- <Nav/>-->
    <div>
      <router-link to="/">返回首页1</router-link>|
      <a href="#/">返回首页2</a>
    </div>
    <button @click="refresh">点击刷新</button>
    <VueEchart :loading="loading" :option="option"></VueEchart>
  </div>
</template>

<script lang="js">
  import VueEchart from "@/components/VueEchart.vue"
console.log("123123:",VueEchart)
  // import Nav from '@/components/Nav.vue';
  export default {
    name: 'Nofound',
    components: { VueEchart},
    methods:{
      refresh(){
        if(this.loading){console.log("正在加载中。。。");return}
        this.loading = true
        setTimeout(()=>{
          this.loading = false
          this.option = {
            ...this.option,
            series: {
              name: "销量",
              type: "bar",
              data: [15, 30, 46, 30, 50, 40],
            },
          }
          console.log("数据变化了")
        },5000)
      },},

    data(){
      return{
        option:{ title: {
            text: "ECharts 入门示例",
          },
          tooltip: {},
          xAxis: {
            // {
            //   type: "category",
            // },
            // { type: "category" },
            // {
            //   type: "value",
            //   data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            // },
            // {
            //   type: "time",
            //   // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            // },
            // {
            //   type: "time",
            //   // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            // },
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          },
          yAxis: {},
          series: [
            // {
            //   name: "销量",
            //   type: "bar",
            //   data: [5, 20, 36, 10, 10, 20],
            // },
            {
              name: "销量",
              type: "line",
              data: [15, 30, 46, 30, 50, 40],
            },
          ],},
        loading:false
      }
    },
  // methods:{
  //   refresh(){
  //       this.loading = true
  //       setTimeout(()=>{
  //         this.loading = false
  //         //this.option = {}
  //       },5000)
  //     }


  };
</script>

<style lang="scss" scoped>

</style>