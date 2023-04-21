import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./post-slice";

export const store = configureStore({
    reducer: { post: PostSlice.reducer }
})