'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://167.172.168.238/api',
  }),
  endpoints: (builder) => ({
    // AuthToken
    authToken: builder.mutation({
      query: (credentials) => ({
        url: 'auth/',
        method: 'POST',
        body: credentials,
      }),
    }),

    // CreateAccount
    createAccount: builder.mutation({
      query: (newUser) => ({
        url: 'create-account/',
        method: 'POST',
        body: newUser,
      }),
    }),

    // EditProfile
    editProfile: builder.mutation({
      query: (profileData) => ({
        url: 'edit-profile/',
        method: 'POST',
        body: profileData,
      }),
    }),

    // CreatePost
    createPost: builder.mutation({
      query: (postData) => ({
        url: 'create-post/',
        method: 'POST',
        body: postData,
      }),
    }),

    // GetUsers
    getUsers: builder.mutation({
      query: (body) => ({
        url: 'get-users/',
        method: 'POST',
        body: body,
      }),
    }),

    // GetMe
    getMe: builder.mutation({
      query: (token) => ({
        url: 'get-me/',
        method: 'POST',
        body: token,
      }),
    }),

    // GetPosts
    getPosts: builder.mutation({
      query: (body) => ({
        url: 'get-posts/',
        method: 'POST',
        body: body,  // Since the raw body was empty, this can be an empty object or any needed data
      }),
    }),

    // GetSingleUser
    getSingleUser: builder.mutation({
      query: ({
        userId,
        token,
      }) => ({
        url: `get-user/${userId}/`,
        method: 'POST',
        body: {token},
      }),
    }),

    // DeletePost
    deletePost: builder.mutation({
      query: (postData) => ({
        url: 'delete-post',
        method: 'POST',
        body: postData,
      }),
    }),
  }),
});

export const {
  useAuthTokenMutation,
  useCreateAccountMutation,
  useEditProfileMutation,
  useCreatePostMutation,
  useGetUsersMutation,
  useGetMeMutation,
  useGetPostsMutation,
  useGetSingleUserMutation,
  useDeletePostMutation,
} = apiSlice;
