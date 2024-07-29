import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItem, IProductsQuery, IProductsRes } from "../../types/types";

const token = localStorage.getItem('authToken') as string;

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsRes, IProductsQuery>({
      query: ({ q = "", limit = 12, skip = 0 }) => ({
        headers: { Authorization: `Bearer ${token}` },
        url: 'products/search',
        params: { q, limit, skip },
      }),
    }),
    getProductById: builder.query<IItem, string>({
      query: (id) => ({
        headers: { Authorization: `Bearer ${token}` },
        url: `products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
