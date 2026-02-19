import { createSlice } from "@reduxjs/toolkit"


const initialState = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {

        increment: (state) => {
            // console.log({ ...state }, "...state");
            // console.log(state.count, "...state");

            state.count = state.count + 1

        },

        decreament: (state) => {
            state.count = state.count - 1
        },

        incrementBy: (state, action) => {
            // console.log(action, "...action inc payload");

            state.count = state.count + action.payload

        },

        decreamentBy: (state, action) => {
            // console.log(action, "...action dec payload");
            state.count = state.count - action.payload

        }
    }

})

export const { increment, decreament, incrementBy, decreamentBy } = counterSlice.actions

export const counterReducer = counterSlice.reducer