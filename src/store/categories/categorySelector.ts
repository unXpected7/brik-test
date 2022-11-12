import { RootState } from '@/config/store';

export const getListCategories = (state: RootState) => state.categories.list;
