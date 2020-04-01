import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {

    recordList:[] as RecordItem[],
  },
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
  }
  // actions: {
  // },
  // modules: {
  // }
});

//console.log(store.state.count);

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
