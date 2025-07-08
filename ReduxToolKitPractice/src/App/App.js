import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: {},
    }
})

// console.log(store, "...store");
// console.log(store.getState(), "...combineReducer");

// const currentState = store.getState();
// console.log(currentState, "...currentState");           // to check current state

