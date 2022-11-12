import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IGood, IGoodState } from './good.type';
import {} from './goodSlice';

const initialState: IGoodState = {
  list: [],
  currentDetail: null,
};

export const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    saveList: (state: IGoodState, { payload }: PayloadAction<Array<IGood>>) => {
      state.list = payload;
    },
    saveDetail: (state: IGoodState, { payload }: PayloadAction<IGood>) => {
      state.currentDetail = payload;
    },
  },
});

export const goodActions = goodSlice.actions;

export default goodSlice.reducer;
