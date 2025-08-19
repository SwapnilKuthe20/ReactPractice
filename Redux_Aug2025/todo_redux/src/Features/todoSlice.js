import { createSlice, current } from "@reduxjs/toolkit"
import { act } from "react";

const initialState = []

const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        "add": (state, action) => {
            state.push({
                id: Date.now(),
                item: action.payload
            })
        },
        "edit": (state, action) => {
            // console.log(action.payload, "...Payload edit id item ");

            const { id, editItem } = action.payload;
            const todo = state.find(t => t.id === id)
            // console.log(JSON.stringify(todo), "Stringi Todo");

            if (todo) {
                todo.item = editItem
            }
        },
        "deleteTodo": (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { add, edit, deleteTodo } = toDoSlice.actions
export const todoReducer = toDoSlice.reducer