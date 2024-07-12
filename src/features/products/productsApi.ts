import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItem, IProductsQuery, IProductsRes } from "../../types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsRes, IProductsQuery>({
      query: ({ q = "", limit = 12, skip = 0 }) =>
        `/products/search?q=${q}&limit=${limit}&skip=${skip}`,
    }),
    getProductById: builder.query<IItem, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;


//---------------------------------------------------------------------------

// addPost: builder.mutation({
//   query: (newPost) => ({
//     url: 'products',
//     method: 'POST',
//     body: newPost,
//   }),
// }),
// updatePost: builder.mutation({
//   query: ({ id, ...updatedPost }) => ({
//     url: `products/${id}`,
//     method: 'PUT',
//     body: updatedPost,
//   }),
// }),
// deletePost: builder.mutation({
//   query: (id) => ({
//     url: `products/${id}`,
//     method: 'DELETE',
//   }),
// }),