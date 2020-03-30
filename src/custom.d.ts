type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  created?: Date;
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

interface Window {
  tagList: Tag[];
}