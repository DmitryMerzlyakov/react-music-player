import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/' }),
    endpoints: (build) => ({
        getSongs: build.query({
            query: () => `catalog/track/all/`,
        }),
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
        })
    })
})

export const { useGetSongsQuery, useAddUserMutation, useLoginUserMutation } = songsApi