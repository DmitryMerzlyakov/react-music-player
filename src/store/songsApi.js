import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://painassasin.online/' }),
    endpoints: (build) => ({
        getSongs: build.query({
            query: () => `catalog/track/all/`,
        }),
        addUser: build.mutation({
            query: (userData) => ({
                url: 'user/signup/',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useGetSongsQuery, useAddUserMutation } = songsApi