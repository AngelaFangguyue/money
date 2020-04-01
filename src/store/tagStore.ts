//import tagListModel from '@/model/tagListModel';
import Tags from '@/views/Money/Tags.vue';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

const  localStorageKey = "tagList";

const tagStore =  {
  tagList :[] as Tag[],
  fetchTags(){
    this.tagList =  JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') ;
   // console.log("11》tagListModel.fetch:",this.tagList );
    return this.tagList;
  },
  saveTags(){
    window.localStorage.setItem(localStorageKey,JSON.stringify(this.tagList));
  },
createTag(name: string){
  //const result = tagListModel.create(name);
  const names = this.tagList.map(item=>item.name);
  if(names.indexOf(name)<0){
    const id = createId().toString();
    this.tagList.push({id:id,name:name});
    this.saveTags();
    window.alert("创建成功")
    return "success";
  }else{
    window.alert("标签已存在")
    return 'duplicated';
  }
},
deleteTag(id: string){
  //return tagListModel.delete(id);
  let index = -1;
  for(let i=0;i<this.tagList.length;i++){
    if(this.tagList[i].id===id){
      index = i;
      break;
    }
  }
  this.tagList.splice(index,1);
  this.saveTags();
  return true;
},
updateTag(id: string,name: string){
  //return tagListModel.update(id,name);
  const idList = this.tagList.map(item=>item.id);
  if(idList.indexOf(id)>=0){
    const names = this.tagList.map(item=>item.name);
    if(names.indexOf(name)>=0){
      return "duplicated";
    }else{
      const tag =  this.tagList.filter(item=>item.id===id)[0];
      tag.name = name;
      this.saveTags();
      return "success";
    }
  }else{
    return "not found";
  }
},
findTag(id: string){
  return this.tagList.filter(item=>item.id===id)[0];
},
}

tagStore.fetchTags();

export default tagStore;
