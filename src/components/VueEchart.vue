<template>
  <div style="border:1px solid red;color:red">11111
    <div ref="div1" id="echartsDiv" ></div>
  </div>

</template>/
<script lang="js">
    const echarts = require("echarts");
    //console.log("1>this.echart:",this.echart)
  export default {
    name:'VueEchart',
    props:["option","loading"],
    mounted(){
      this.$refs.div1.style.width = '400px'
      this.$refs.div1.style.height = '400px'
      this.echart = echarts.init(this.$refs.div1)
      this.echart.setOption(this.option)
      //console.log("2>this.echart:",this.echart)
    },
    watch:{
      option(){
        this.echart.setOption(this.option)
        //console.log("3option>this.echart:",this.echart)
      },
      loading(){
        //console.log("4loading>this.echart:",this.echart)
        if(this.loading){
          this.echart.showLoading()
        }else{
          this.echart.hideLoading()
        }

      }
    }
  }
</script>