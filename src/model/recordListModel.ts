const  localStorageKey = "recordList";

const recordListModel = {

  data:[] as RecordItem[],
  clone(data: RecordItem|RecordItem[]){
    return JSON.parse(JSON.stringify(data)) ;
  },
  fetch(){
    this.data =  JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') as RecordItem[];
    return this.data;
    },
  save(){
    window.localStorage.setItem(localStorageKey,JSON.stringify(this.data));
  }
};

export default recordListModel;
//export {model};