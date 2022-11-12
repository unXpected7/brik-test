export interface ICategory {
  name: string;
  icon_url: string;
  _id: string;
}

export interface ICategoryState {
  list: ICategory[];
}
