import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    trackId: null,
    //isFavorite: ''
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        setTrackPlay: (state, { payload }) => ({
            ...state,
            trackId: payload.id,
          //  isFavorite: payload.isFavorite
        }),
    }
})

export const { setTrackPlay } = trackSlice.actions

export default trackSlice.reducer