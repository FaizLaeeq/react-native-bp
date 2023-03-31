import {createApi} from '@reduxjs/toolkit/query/react';
import {User} from '../types';
import {baseQuery} from './config';

export const api = createApi({
  baseQuery,
  reducerPath: 'postsApi',
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<User, void>({
      query: () => ({
        url: 'users/',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {useGetUserQuery} = api;
