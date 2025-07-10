import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../Features/TaskSlice'

// console.dir(taskReducer, "...taskReducer in store");

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

// console.log(store, "...store");
console.log(store.getState(), "...store.getState()");

store.subscribe(() => {
    const state = store.getState();
    const todoState = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", todoState)
})
