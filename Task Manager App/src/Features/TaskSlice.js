import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {

        },
        deleteTask: (state, action) => {

        },
        toggleTask: (state, action) => {

        }
    }
})

// console.log(taskSlice, "...taskSlice");
// console.log(taskSlice.reducer, "...taskSlice.reducer");
// console.log(taskSlice.actions, "...taskSlice.actions");

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;





