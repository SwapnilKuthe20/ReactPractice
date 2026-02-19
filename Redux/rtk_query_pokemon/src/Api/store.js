import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./features/pokemonSlice";


export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefault) =>
        getDefault().concat(pokemonApi.middleware)
})