import createId from '@/lib/createId';

const  localStorageKey = "tagList";





const tagListModel: TagListModel = {
  data:[],
  fetch(){
    this.data =  JSON.parse(window.localStorage.getItem(localStorageKey)||'[]') ;
    console.log("11》tagListModel.fetch:",this.data);
    return this.data;
  },
  save(){
    window.localStorage.setItem(localStorageKey,JSON.stringify(this.data));
  },
  create(name){

    const names = this.data.map(item=>item.name);
    if(names.indexOf(name)<0){
      const id = createId().toString();
      this.data.push({id:id,name:name});
      this.save();
      console.log("1》tagListModel.create:",this.data);
      return "success";
    }else{
      return 'duplicated';
    }

  },
  update(id: string,name: string){
    const idList = this.data.map(item=>item.id);
    if(idList.indexOf(id)>=0){
      const names = this.data.map(item=>item.name);
      if(names.indexOf(name)>=0){
        return "duplicated";
      }else{
       const tag =  this.data.filter(item=>item.id===id)[0];
        tag.name = name;
        this.save();
        return "success";
      }
    }else{
      return "not found";
    }
  },

  delete(id: string){
    let index = -1;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].id===id){
        index = i;
        break;
      }
    }
    this.data.splice(index,1);
    this.save();
    return true;
  }


};

export default tagListModel;
//export {model};