import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const songsApi = createApi({
  reducerPath: 'songsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
    tagTypes: ['Tracks', 'Playlist'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token
      // console.log(token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getAllTracks: build.query({
      query: () => 'catalog/track/all/',
      providesTags: ['Tracks'],
    }),
    getPlaylistByID: build.query({
      query: () => `catalog/selection/`,
      providesTags: ['Playlist'],
    }),
    setLike: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
    setUnlike: build.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
  }),
})

export const { useGetAllTracksQuery, useGetPlaylistByIDQuery, useSetLikeMutation, useSetUnlikeMutation } = songsApi