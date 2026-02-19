import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./features/postsSlice";


export const store = configureStore({
    reducer: {
        postReducer: postsReducer
    }
})


