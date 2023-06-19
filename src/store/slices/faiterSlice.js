import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    author: [],
    genre: [],
    age: '',
    name: '',
}

const filterSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setAuthor: (state, {payload}) => ({
          ...state,
          author: [...state.author, payload]
        }),
        setGenre: (state, {payload}) => ({
           ...state,
          genre: [...state.genre, payload]
        }),
        setYear: (state, action) => {
          state.age = action.payload
        },
        delAuthor: (state) => {
          state.author = []
        },
        delGenre: (state) => {
          state.genre = ''
        },
        delYear: (state) => {
          state.age = ''
        },
        setSearchTrack: (state, action) => {
          state.name = action.payload.name
        },
        delTrack: (state) => {
          state.name = ''
        }
    }
})

export const {
  setYear,
  setAuthor,
  setGenre,
  delYear,
  delAuthor,
  delGenre,
  setSearchTrack,
  delTrack,
} = filterSlice.actions

export default filterSlice.reducer

