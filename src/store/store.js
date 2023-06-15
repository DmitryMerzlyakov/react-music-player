import { configureStore } from "@reduxjs/toolkit"
import { userApi } from '../servises/userApi';
import { songsApi } from '../servises/songsApi';
import userReducer from './slices/userSlice';
import filterReducer from './slices/faiterSlice';

export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [songsApi.reducerPath]: songsApi.reducer,
        user: userReducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([userApi.middleware, songsApi.middleware])
});