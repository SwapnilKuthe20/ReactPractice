import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkTheme: true }

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        theme_toggle: (state) => {
            // console.log(state.darkTheme, "...state dark theme")
            state.darkTheme = !state.darkTheme
        }
    }
})

export const { theme_toggle } = themeSlice.actions
export const themeReducer = themeSlice.reducer