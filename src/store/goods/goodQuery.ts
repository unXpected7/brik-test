import { Config } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GoodRequest, GoodResponse, IGood } from './good.type';

export const goodQuery = createApi({
  reducerPath: 'goodQuery',
  baseQuery: fetchBaseQuery({ baseUrl: Config.BASE_URL }),
  tagTypes: ['Goods'],
  endpoints: builder => ({
    getAllGoods: builder.query<IGood[], any | undefined>({
      query: () => `/goods`,
      providesTags: ['Goods'],
    }),
    getGoodById: builder.query<IGood, any | undefined>({
      query: (id: string) => `/goods/${id}`,
    }),
    postNewGood: builder.mutation<GoodResponse, GoodRequest>({
      query: params => ({
        url: `/goods`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['Goods'],
    }),
  }),
});

export const {
  useGetAllGoodsQuery,
  useGetGoodByIdQuery,
  usePostNewGoodMutation,
} = goodQuery;
