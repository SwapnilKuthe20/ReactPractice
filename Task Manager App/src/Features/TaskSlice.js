import { createSlice } from "@reduxjs/toolkit";

const savedLocalStorage = localStorage.getItem("tasks")

const initialState = savedLocalStorage ? JSON.parse(savedLocalStorage) : { tasks: [], filter: "ALL" }

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            // console.log(state, ',,,state');
            // console.log(action, ',,,action');

            state.tasks.push({ id: Date.now(), name: action.payload, completed: false })
        },

        deleteTask: (state, action) => {

            return state.tasks.filter((task) => {
                // console.log(state, "fileter");
                return task.id !== action.payload;
            })
        },

        completeTask: (state, action) => {
            const completedTask = state.tasks.find(task => task.id === action.payload)

            completedTask && (completedTask.completed = !completedTask.completed)
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

// console.log(taskSlice, "...taskSlice");
// console.log(taskSlice.reducer, "...taskSlice.reducer");
// console.log(taskSlice.actions, "...taskSlice.actions");

export const { addTask, deleteTask, completeTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
