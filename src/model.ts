const  localStorageKey = "recordList";

const model = {
  clone(data: RecordItem|RecordItem[]){
    return JSON.parse(JSON.stringify(data)) ;
  },
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') as RecordItem[];
  },
  save(data: RecordItem){
    window.localStorage.setItem(localStorageKey,JSON.stringify(data));
  }
};

export default model;
//export {model};