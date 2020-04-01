import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:"190hui",
  },
  mutations: {
    increment(state){
      state.count += 1;
    }
  },
  // actions: {
  // },
  // modules: {
  // }
});

console.log(store.state.count);

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
