import { createSlice } from "@reduxjs/toolkit"

const initialState = { todoItems: [] }

// const list = { id: 1, todo: " ", complete: true }
// const filter = "All" / "Completed" / "Incompleted"

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state) => {
            console.log(state, "...addtodo");

        },
        deleteTodo: (state) => {
            console.log(state, "...deleteTOdo");

        },
        isCompleteTodo: (state) => {
            console.log(state, "...isCompleteTodo");

        }
    }
})

export const { addTodo, deleteTodo, isCompleteTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
