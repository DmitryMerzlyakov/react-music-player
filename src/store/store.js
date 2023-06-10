import { configureStore } from "@reduxjs/toolkit"
import { userApi } from '../servises/userApi';
import { songsApi } from '../servises/songsApi';
import userReducer  from './slices/userSlice';

export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [songsApi.reducerPath]: songsApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, songsApi.middleware])
});