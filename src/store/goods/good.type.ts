import { ICategory } from '../categories/category.type';

export interface IGood {
  _id: string;
  categoryId: number;
  category: ICategory;
  sku: string;
  name: string;
  description: string;
  weight: number;
  width: number;
  length: number;
  height: number;
  image: string;
  price: number;
}

export interface IGoodState {
  list: IGood[];
  currentDetail: IGood | null;
}

export interface GoodRequest {
  category: Category;
  sku: string;
  name: string;
  description: string;
  weight: number;
  width: number;
  height: number;
  image: string;
  price: number;
}

export interface GoodResponse {
  category: Category;
  sku: string;
  name: string;
  description: string;
  weight: number;
  width: number;
  height: number;
  image: string;
  price: number;
  _id: string;
}
export interface Category {
  name: string;
  slug: string;
}
