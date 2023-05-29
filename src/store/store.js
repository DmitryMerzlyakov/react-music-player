import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/userSlice';
import { songsApi } from './songsApi';

export default configureStore({
    reducer: {
        [songsApi.reducerPath]: songsApi.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(songsApi.middleware)
});