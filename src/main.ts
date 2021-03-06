import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
//import tagListModel from '@/model/tagListModel';
//import recordListModel from '@/model/recordListModel';

//import xxx from '@/assets/icons/find.svg';

//console.log(xxx);


Vue.config.productionTip = false;
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);




// window.tagList = tagListModel.fetch();
// window.createTag = (name: string)=>{
//   const result = tagListModel.create(name);
//   if(result==="success"){
//     window.alert("创建成功")
//   }else if(result==="duplicated"){
//     window.alert("标签已存在")
//   }
//   console.log("2》window.createTag:",window.tagList);
// };
// window.deleteTag = (id)=>{
//   return tagListModel.delete(id);
// };
// window.updateTag = (id,name)=>{
//   return tagListModel.update(id,name);
// };
// window.findTag = (id)=>{
//  return window.tagList.filter(item=>item.id===id)[0];
// };
//
// window.recordList = recordListModel.fetch();
// window.createRecord = (record: RecordItem)=>{return recordListModel.create(record)};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


window.onload= function(){
  setTimeout(function () {
window.scrollTo(0,999);
  },0);
};

if(document.documentElement.clientWidth>500){
window.alert("请使用手机打开本页面，以保证浏览效果");
}