import { RootState } from '@/config/store';

export const getListGoods = (state: RootState) => state.goods.list;
export const getCurrentGood = (state: RootState) => state.goods.currentDetail;
