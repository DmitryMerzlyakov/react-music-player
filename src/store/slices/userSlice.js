import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    login: false,
    token: '',
    id: null,
    userName: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.login = true
            state.userName = action.payload.userName
            state.token = action.payload.token
            state.id = action.payload.id
            state.email = action.payload.email
        },
        removeUser() {
            return initialState
        }
    }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer