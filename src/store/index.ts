import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)

type myStore = {
  recordList:  RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

const store = new Vuex.Store({
  state: {
    recordList:[] ,
    tagList:[],
    currentTag:undefined,
  } as myStore,

  mutations: {
    fetchRecords(state){
      state.recordList =  JSON.parse(window.localStorage.getItem('recordList')||'[]') as RecordItem[];
    },
    saveRecords(state){
      window.localStorage.setItem('recordList',JSON.stringify(state.recordList));
    },
    createRecord(state,record: RecordItem){
      const record2: RecordItem = clone(record);
      record2.created = new Date();
        if(state.recordList){
          state.recordList.push(record2);
          store.commit('saveRecords');
        }
      },
    //////////////////
    fetchTags(state){
      state.tagList =  JSON.parse(window.localStorage.getItem('tagList')||'[]') as Tag[];
    },
    setCurrentTag(state,id: string){
      state.currentTag = state.tagList.filter(item=>item.id===id)[0];
    },
    saveTags(state){
      window.localStorage.setItem('tagList',JSON.stringify(state.tagList));
    },
    createTag(state,name){
      const names = state.tagList.map(item=>item.name);
      //console.log("index.ts:names:",names);
      //console.log("index.ts:name:",name);
      //console.log(names.indexOf(name));
      if(names.indexOf(name)<0){
        const id = createId().toString();
        state.tagList.push({id:id,name:name});
        store.commit('saveTags')//默认可以不用传state这个参数
        //state.saveTags();
        window.alert("创建成功")
        //return "success";
      }else{
        window.alert("标签已存在")
        //return 'duplicated';
      }
    },
    //TODO
    // deleteTag(state,id: string){
    //   //return tagListModel.delete(id);
    //   let index = -1;
    //   for(let i=0;i<state.tagList.length;i++){
    //     if(state.tagList[i].id===id){
    //       index = i;
    //       break;
    //     }
    //   }
    //   state.tagList.splice(index,1);
    //   store.commit('saveTags')
    //  // return true;
    // },
    ////////////////////////////
    //TODO
    // updateTag(state,{id,name}){
    //   //return tagListModel.update(id,name);
    //   //TODO
    //   const idList = state.tagList.map(item=>item.id);
    //   if(idList.indexOf(id)>=0){
    //     const names = state.tagList.map(item=>item.name);
    //     if(names.indexOf(name)>=0){
    //       //return "duplicated";
    //     }else{
    //       const tag =  state.tagList.filter(item=>item.id===id)[0];
    //       tag.name = name;
    //       store.commit('saveTags');
    //      // return "success";
    //     }
    //   }else{
    //     return "not found";
    //   }
    // },
  }
  // actions: {
  // },
  // modules: {
  // }
});

//console.log(store.state.recordList);

export default store;

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
