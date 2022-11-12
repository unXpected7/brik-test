import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ICategoryState } from './category.type';

const initialState: ICategoryState = {
  list: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    saveList: (
      state: ICategoryState,
      { payload }: PayloadAction<Array<ICategory>>,
    ) => {
      state.list = payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
