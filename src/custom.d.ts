type Tag = {
  id: string;
  name: string;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  created?: string;
}


type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success"|"duplicated";
  save: () => void;
  update: (id: string,name: string) => "success"|"duplicated"|"not found";
  delete: (id: string) => boolean;
}

type myStore = {
  recordList:  RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
  createRecordError: Error|null;
  createTagError: Error|null;
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  deleteTag: (id: string) => boolean;
  updateTag: (id: string,name: string) => "success"|"duplicated"|"not found";
  findTag: (id: string) => Tag|undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}