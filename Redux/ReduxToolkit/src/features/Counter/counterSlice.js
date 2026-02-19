import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counterToolkit",
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            // console.log(state.count, "...state createSlice");
            // console.log(action, "...action");

            state.count += action.payload
        },

        decrement(state, action) {
            state.count -= action.payload
        },
        reset(state) {
            state.count = 0
        }
    }
})

// console.log(CounterSlice, "...counter Slice ");

export const { increment, decrement, reset } = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;
