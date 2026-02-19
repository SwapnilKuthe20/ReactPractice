import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDark: false
    },
    reducers: {
        darkTheme(state) {
            state.isDark = !state.isDark;
        }
    }
})

export const { darkTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

