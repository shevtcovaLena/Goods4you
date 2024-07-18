import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFormData, IUser } from "../../types/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<IUser, IFormData>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    fetchUserByToken: builder.query<IUser, string>({
      query: (token: string) => ({
        url: "auth/me",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useFetchUserByTokenQuery } = userApi;

//---------------------------------------------------------------------------
// login: builder.mutation({
//   query: (credentials) => ({
//     url: 'auth/login',
//     method: 'POST',
//     body: credentials,

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
