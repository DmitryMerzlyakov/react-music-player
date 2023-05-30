import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    login: false,
    username: '',
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.login = true
            state.username = action.payload.username
            state.id = action.payload.id
        },
        removeUser() {
            return initialState
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer