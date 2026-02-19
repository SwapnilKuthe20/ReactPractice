import { configureStore } from "@reduxjs/toolkit";
import { searchProductReducer } from "../features/searchProductsSlice";
import { loginUserReducer } from "../features/loginSlice";

export const store = configureStore({
    reducer: {
        searchProducts: searchProductReducer,
        loginUser: loginUserReducer
    }
})

