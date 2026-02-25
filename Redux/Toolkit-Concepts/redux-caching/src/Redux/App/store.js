import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../features/postSlice";
import { productsReducer } from "../features/productSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        products: productsReducer
    }
})
