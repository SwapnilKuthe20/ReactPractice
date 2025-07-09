import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../Features/TaskSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

console.log(store, "...store");
console.log(store.getState(), "...store.getState()");


