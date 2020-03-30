import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import tagListModel from '@/model/tagListModel';



Vue.config.productionTip = false;
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
window.tagList = tagListModel.fetch();
window.createTag = (name: string)=>{
  const result = tagListModel.create(name);
  if(result==="success"){
    window.alert("创建成功")
  }else if(result==="duplicated"){
    window.alert("标签已存在")
  }
};
window.deleteTag = (id)=>{
  return tagListModel.delete(id);
};
window.updateTag = (id,name)=>{
  return tagListModel.update(id,name);
};
window.findTag = (id)=>{
 return window.tagList.filter(item=>item.id===id)[0];
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
