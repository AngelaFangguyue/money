const  localStorageKey = "tagList";

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
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
    const names = this.data.map(item=>item.name);
    if(names.indexOf(name)<0){
      this.data.push({id:name,name:name});
      this.save();
      return "success";
    }else{
      return 'duplicated';
    }

  }
};

export default tagListModel;
//export {model};