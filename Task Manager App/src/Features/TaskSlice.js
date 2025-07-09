import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            console.log(state, ',,,state');
            console.log(action, ',,,action');

            state.push({ id: Date.now(), name: action.payload, completed: false })
        },

        deleteTask: (state, action) => {

            return state.filter((task) => {
                // console.log(state, "fileter");
                return task.id !== action.payload;
            })
        },

        completeTask: (state, action) => {
            const completedTask = state.find(task => task.id === action.payload)

            completedTask && (completedTask.completed = !completedTask.completed)
        }
    }
})

// console.log(taskSlice, "...taskSlice");
// console.log(taskSlice.reducer, "...taskSlice.reducer");
// console.log(taskSlice.actions, "...taskSlice.actions");

export const { addTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
