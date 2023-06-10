import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/' }),
    endpoints: (build) => ({
        addUser: build.mutation({
            query: (body) => ({
                url: 'user/signup/',
                method: 'POST',
                body
            })
        }),
        loginUser: build.mutation({
            query: (body) => ({
                url: 'user/login/',
                method: 'POST',
                body
            })
        }),
        getToken: build.mutation({
            query: (body) => ({
                url: 'user/token/',
                method: 'POST',
                body,
            }),
        }),
        tokenRefresh: build.mutation({
            query: (body) => ({
                url: 'user/token/refresh/',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useAddUserMutation, useLoginUserMutation, useGetTokenMutation, useTokenRefreshMutation } = userApi