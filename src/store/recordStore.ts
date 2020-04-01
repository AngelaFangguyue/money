//import recordListModel from '@/model/recordListModel';
import clone from '@/lib/clone';
const  localStorageKey = "recordList";

// let  data:RecordItem[]|undefined=undefined;

const recordStore = {
  fetchRecords(){
  this.recordList =  JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') as RecordItem[];

    return this.recordList;
},
  saveRecords(){
    window.localStorage.setItem(localStorageKey,JSON.stringify(this.recordList));
    },
  recordList : [] as RecordItem[] ,
  createRecord(record: RecordItem){
    const record2: RecordItem = clone(record);
    record2.created = new Date();
    if(this.recordList){
      this.recordList.push(record2);
      this.saveRecords();
    }

  },

}

recordStore.fetchRecords();
//console.log("recordStore:",recordStore.recordList);
export  default  recordStore;
