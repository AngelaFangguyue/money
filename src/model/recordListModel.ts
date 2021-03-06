import clone from '@/lib/clone';

const  localStorageKey = "recordList";

const recordListModel = {

  data:[] as RecordItem[],
  // clone(data: RecordItem|RecordItem[]){
  //   return JSON.parse(JSON.stringify(data)) ;
  // },
  create(record: RecordItem){
    // const record2: RecordItem = recordListModel.clone(this.record);
    const record2: RecordItem = clone(record);
    record2.created = new Date().toISOString();
    this.data.push(record2);
    this.save();
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