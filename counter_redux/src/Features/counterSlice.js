import { createSlice } from "@reduxjs/toolkit"


const initialState = { value: 0 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        "Increament": (state) => {
            state.value += 1;
        },

        "deccreament": (state) => {
            state.value -= 1
        },

        "IncreamentBy": (state, action) => {
            state.value += action.payload

        },

        "DecreamentBy": (state, action) => {
            state.value -= action.payload
        },
    }
})

export const { Increament, deccreament, IncreamentBy, DecreamentBy } = counterSlice.actions

export const counterReducer = counterSlice.reducer