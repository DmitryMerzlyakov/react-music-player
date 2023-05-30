import { configureStore } from "@reduxjs/toolkit"
import userSlice from './slices/userSlice';
import { songsApi } from './songsApi';

export default configureStore({
    reducer: {
        [songsApi.reducerPath]: songsApi.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(songsApi.middleware)
});