import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: 0 }


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        "Add": (state) => {
            state.value += 1;
        },
        "Sub": (state) => {
            state.value -= 1;
        },
        "IncBy": (state, action) => {
            state.value += action.payload
        },
        "DecBy": (state, action) => {
            state.value -= action.payload

        }
    }
})

export const { Add, Sub, IncBy, DecBy } = counterSlice.actions
export const counterReducer = counterSlice.reducer