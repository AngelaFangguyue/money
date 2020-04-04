type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  created?: string;
}

type Tag = {
  id: string;
  name: string;
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