import { createSlice } from "@reduxjs/toolkit"


const initialState = { count: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {

        "increament": (state) => {
            state.count = state.count + 1
        },

        "decreament": (state) => {
            // console.log(state, "...dec state");
            if (state.count > 0) {
                state.count = state.count - 1
            }
        },

        "increamentBy": (state, action) => {
            // console.log(state, "...incBy state");
            // console.log(action, "...incBy action ");

            state.count = state.count + action.payload
        },

        "decreamentBy": (state, action) => {
            // console.log(state, "...decBy state");
            // console.log(action, "...decBy action ");

            if (state.count - action.payload >= 0) {
                state.count = state.count - action.payload
            }
        }
    }
})

export const { increament, decreament, increamentBy, decreamentBy } = counterSlice.actions

export const counterReducer = counterSlice.reducer