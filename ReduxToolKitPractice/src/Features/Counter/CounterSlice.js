import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increament: state => {
            state.value += 1;
        },
        decreament: state => {
            state.value -= 1;
        }
    }
})

// console.log(counterSlice, "....counterSlice");
// console.log(counterSlice.actions, "...Auto generate actions creator");
// console.log(counterSlice.reducer, "...autoGenerate reducer function ");


export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
