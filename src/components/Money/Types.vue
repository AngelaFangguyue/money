<template>
  <div >
    <ul class="types">
      <li :class="{selected:value==='-',
      [classPerfix+'-item']:classPerfix}"
          @click="selectType('-')">支出</li>
      <li :class="{selected:value==='+',
      [classPerfix+'-item']:classPerfix}"
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<!--<script lang="js">-->
<!--  export default {-->
<!--    name: 'Types',-->
<!--    data(){-->
<!--      return {type:'-'};-->
<!--    },-->
<!--    methods:{-->
<!--      selectType(type){-->
<!--        if(type==='-'||type==='+'){-->
<!--          this.type=type;-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    props:["xxx"],-->
<!--    mounted(){-->
<!--      console.log(this.xxx);-->
<!--    }-->
<!--  };-->
<!--</script>-->
<script lang="ts">
  import  Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue{
    //type = "-";
    selectType(type: string){
        if(type!=='-'&&type!=='+'){
          throw new Error("type is unknown")
        }
       //this.type=type;
      this.$emit("update:value",type);
      }

//@Watch("type")
//onTypeChanged(){
  //this.$emit("update:value", this.type);
//}

    mounted(){
      //console.log(this.as);
    }
    @Prop(String) as: string|undefined;

    @Prop(String) value!: string;

    @Prop(String) classPerfix?: string;
  }
</script>

<style lang="scss" scoped>
  .types{
    background: #c4c4c4;
    display:flex;
    font-size:24px;
    > li{
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
      }
    }
  }
</style>