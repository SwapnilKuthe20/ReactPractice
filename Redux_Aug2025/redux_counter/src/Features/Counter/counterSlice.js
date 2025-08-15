import { createSlice, current } from "@reduxjs/toolkit"

// console.log(createSlice, "...createSlice");
// console.log(current, "...current");

// current --> 
//  Proxy state ko plain JavaScript object me convert karna, taaki tu uska snapshot easily console me dekh sake.

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: "counter",        // counter slice    
    initialState,           // initial state
    reducers: {             // 
        increament: (state) => {
            // console.log(state.value, "....state Inc");
            state.value += 1;
            // console.log(state.value, "....state Inc222");
        },
        decreament: (state) => {
            // console.log(state, "....state Dec");
            state.value -= 1;

        },
        increaseAmountBY: (state, action) => {
            console.log(current(state), "....state Inc By amount");
            // console.log(action, "....action Inc By amount");
            state.value += action.payload
        }
    }
})

// action :: Ye ek object hota hai jisme:
// {
//   type: 'sliceName/reducerName', // string
//   payload: someValue             // jo tum dispatch me pass karte ho
// }

// Kahan se aata hai?
// Jab tum dispatch(increaseAmountBY(5)) karte ho, Redux automatically reducer ko action object deta hai.

// 💡 Bottom line:
// Naam (state, action) → tum badal sakte ho, function fir bhi chalega.
// Meaning → fix hote hain:
// First param → current slice state
// Second param → action object (jisme payload hota hai)

export const { increament, decreament, increaseAmountBY } = counterSlice.actions

export const counterReducer = counterSlice.reducer
