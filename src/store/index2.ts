import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';
import recordListModel from '@/model/recordListModel';
import tagListModel from '@/model/tagListModel';

// export default {
//   ...recordStore,
//   ...tagStore,
// }
const store = {
  ...recordStore,
  ...tagStore,
};


// const store = {
//   recordList : recordListModel.fetch(),
//   createRecord : (record: RecordItem)=>{return recordListModel.create(record)},
//   tagList :tagListModel.fetch(),
//   createTag(name: string){
//     const result = tagListModel.create(name);
//     console.log("2》tagListModel.createTag:",this.tagList);
//     if(result==="success"){
//       window.alert("创建成功")
//     }else if(result==="duplicated"){
//       window.alert("标签已存在")
//     }
//   },
//   deleteTag(id:string){
//     return tagListModel.delete(id);
//   },
//   updateTag(id:string,name:string){
//     return tagListModel.update(id,name);
//   },
//   findTag(id:string){
//     return this.tagList.filter(item=>item.id===id)[0];
//   }
// };
export  default store;