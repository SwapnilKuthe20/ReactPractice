import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./Features/todoSlice";
import { filterReducer } from "./Features/filterSlice";


export const store = configureStore({
    reducer: {
        todoStore: todoReducer,
        filterStore: filterReducer
    }
})