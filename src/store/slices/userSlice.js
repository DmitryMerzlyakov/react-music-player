import { createSlice } from "@reduxjs/toolkit" 

const initialState = {
    isLogin: false,
    id: null,
    email: null,
    userName: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isLogin = true
            state.id = action.payload.id
            state.email = action.payload.email
            state.userName = action.payload.userName
            state.token = action.payload.token
        },
        removeUser: (state) => {
            state.id = '',
            state.email = '',
            state.userName = '',
            state.token = ''
        },
        setRefresh: (state, { payload }) => ({
            ...state,
            refresh: payload.refresh,
        }),
        setAccess: (state, { payload }) => ({
            ...state,
            access: payload.access,
        }),
    }
})

export const { setUser, removeUser, setRefresh, setAccess } = userSlice.actions

export default userSlice.reducer


export const isLogin = (state) => state.user.isLogin