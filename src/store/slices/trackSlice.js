import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    trackId: null,
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        setTrackPlay: (state, { payload }) => ({
            ...state,
            trackId: payload.id,
        }),
    }
})

export const { setTrackPlay } = trackSlice.actions

export default trackSlice.reducer