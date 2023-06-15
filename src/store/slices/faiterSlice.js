import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    author: [],
    genre: [],
    age: '',
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
        setYear: (state, {payload}) => ({
          ...state,
          age: [...state.age, payload]
        }),
        delAuthor: (state) => {
          state.author = []
        },
        delGenre: (state) => {
          state.genre = ''
        },
        delYear: (state) => {
          state.age = ''
        }
    }
})

export const { setYear, setAuthor, setGenre, delYear, delAuthor, delGenre, setSearch } = filterSlice.actions

export default filterSlice.reducer

