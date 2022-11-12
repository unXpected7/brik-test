import { categoryReducer, goodReducer } from '@/store';
import { goodQuery } from '@/store/goods/goodQuery';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    goods: goodReducer,
    categories: categoryReducer,
    [goodQuery.reducerPath]: goodQuery.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
