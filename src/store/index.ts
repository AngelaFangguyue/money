import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    recordList:[] ,
    createRecordError:null,
    createTagError:null,
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
      console.log("index.ts:record:",record);
      const record2: RecordItem = clone(record);
      record2.created = new Date().toISOString();
        if(state.recordList){
          state.recordList.push(record2);
          store.commit('saveRecords');
        }
      },
    //////////////////
    fetchTags(state){
      state.tagList =  JSON.parse(window.localStorage.getItem('tagList')||'[]') as Tag[];
      if(state.tagList.length===0){
        store.commit('createTag','衣');
        store.commit('createTag','食');
        store.commit('createTag','住');
        store.commit('createTag','行');

      }
    },
    setCurrentTag(state,id: string){
      state.currentTag = state.tagList.filter(item=>item.id===id)[0];
    },
    saveTags(state){
      window.localStorage.setItem('tagList',JSON.stringify(state.tagList));
    },
    createTag(state,name){
      state.createTagError = null;
      const names = state.tagList.map(item=>item.name);
      //console.log("index.ts:names:",names);
      //console.log("index.ts:name:",name);
      //console.log(names.indexOf(name));
      if(names.indexOf(name)<0){
        const id = createId().toString();
        state.tagList.push({id:id,name:name});
        store.commit('saveTags')//默认可以不用传state这个参数
        //state.saveTags();
        //window.alert("创建成功")
        //return "success";
      }else{
        state.createTagError = new Error('tag name duplicated');
        return;
        //window.alert("标签已存在")
        //return 'duplicated';
      }
    },
    removeTag(state,id: string){
      //return tagListModel.delete(id);
      let index = -1;
      for(let i=0;i<state.tagList.length;i++){
        if(state.tagList[i].id===id){
          index = i;
          break;
        }
      }
      if(index>=0){
        state.tagList.splice(index,1);
        store.commit('saveTags');
        router.back();
      }else{
        window.alert("删除失败");
      }

     // return true;
    },
    updateTag(state,object: {id: string;name: string}){
      //return tagListModel.update(id,name);
      const {id,name} = object;
      const idList = state.tagList.map(item=>item.id);
      //console.log(id);
      if(idList.indexOf(id)>=0){
        const names = state.tagList.map(item=>item.name);
        if(names.indexOf(name)>=0){
          //return "duplicated";
          window.alert("duplicated");

        }else{
          const tag =  state.tagList.filter(item=>item.id===id)[0];
          tag.name = name;
          store.commit('saveTags');
         // return "success";
         // window.alert("success");
        }
      }else{
        window.alert("not found");
        //return "not found";
      }
    },
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
