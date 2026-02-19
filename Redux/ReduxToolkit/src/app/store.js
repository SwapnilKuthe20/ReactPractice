import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/Counter/counterSlice";
import { themeReducer } from "../features/Theme/theme";
import { addToCartReducer } from "../features/AddCart/addToCart";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        cart: addToCartReducer
    }
})

