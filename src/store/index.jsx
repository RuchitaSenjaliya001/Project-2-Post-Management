import postsSlice from './postSlice'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: { post: postsSlice.reducer }
})