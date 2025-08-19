import { createSlice } from "@reduxjs/toolkit"

const initialState = 'All'

const filterTodo = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterList: (state, action) => {
            console.log(state, "...filter state");
            console.log(action.payload, "...filter action");

        }
    }
})

export const { filterList } = filterTodo.actions
export const filterReducer = filterTodo.reducer
