<template>
  <Layout>
    <Icon icon-name="#left"></Icon>
    <span>编辑标签</span>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/model/tagListModel';
  import Icon from '@/components/Icon.vue';
  @Component({
    components: {Icon}
  })
  export default class EditLabel extends Vue {
    created(){
      //console.log(this.$route.params.id);
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tag = tagListModel.data.filter(item=>item.id===id)[0];
      if(tag){
        console.log('id:', id);
      }else{
        this.$router.replace('/404');//默认的404页面
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>