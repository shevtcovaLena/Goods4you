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
