const  localStorageKey = "tagList";

type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => "success"|"duplicated";
  save: () => void;
}



const tagListModel: TagListModel = {
  data:[],
  fetch(){
    this.data =  JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') ;
    return this.data;
  },
  save(){
    window.localStorage.setItem(localStorageKey,JSON.stringify(this.data));
  },
  create(name){

    if(this.data.indexOf(name)<0){
      this.data.push(name);
      this.save();
      return "success";
    }else{
      return 'duplicated';
    }

  }
};

export default tagListModel;
//export {model};