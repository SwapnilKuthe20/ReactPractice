import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/reducer";

console.log("...store run.....");


export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

