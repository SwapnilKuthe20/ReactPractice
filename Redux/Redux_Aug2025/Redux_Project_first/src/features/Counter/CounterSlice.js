const { createSlice } = require("@reduxjs/toolkit")

// createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, 
// and automatically generates a slice reducer with corresponding action creators and action types.

// createSlice() automatically:

// Action creator banata hai → increment()
// Action type banata hai → "counter/increment"
// Reducer logic ko store me register karta hai.
// ----------------------

const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',    // slice ka naam
    initialState,       // starting state
    reducers: {         // yaha tum actions + reducers define karte ho
        increament: (state) => {
            // increament --> Action name   
            // increament --> ← Reducer ka naam (ye hi action ka naam ban jayega)  
            // state --> current state in store 
            state.value += 1;    // immer.js ki wajah se direct mutate kar sakte ho
        },

        decreament: (state) => {
            state.value -= 1;
        },
        increamentByAmount: (state, action) => {
            state.value += action.payload
            // state → Current slice ka state (draft state, kyunki Immer use ho raha hai).
            // action → Jo data (payload) dispatch se aaya hai, plus type.

            // Draft state = purane state ka ek temporary editable clone jo Immer banata hai,
            // tum direct change kar sakte ho, aur wo automatic immutable naya state bana ke store me save kar deta hai.
        }
    }
})

export const { increament, decreament, increamentByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

// export default counterSlice.reducer;
// Yeh kya hai?
// counterSlice.reducer wo main reducer function hai jo tumhare store me state update karega.
// Store banate waqt is reducer ko pass karte ho:

// Reducer ka kaam ::::

// Redux store me aane wale har action ko check karta hai.
// Agar action ka type match kare (counter/increment, counter/decrement, etc.) to state update karta hai.
// Agar match na kare to state as-is return karta hai.

// Summary :::

// counterSlice.actions → saare action creator functions ka bundle.
// Destructuring → shortcut se export karna easy.
// counterSlice.reducer → wo function jo store me state update karega.
// -------------------------------------------------------------------------

// Action object ka origin :::::

// Redux/RTK me har baar jab tum store ko bolte ho "state badal", tum ek action bhejte ho.
// Ye action object ek simple JS object hota hai:

// {
//   type: 'counter/incrementByAmount',
//   payload: 5
// }

// type → String jo batata hai kaunsa reducer chalega.
// payload → Extra data jo tum bhej rahe ho (yaha 5).
// -----------------------------------------------
//  Iska matlab  ::::::

//  increment → function ka naam(action type ka bhi naam banega)
//  (state) → parameter, jo current state ka value hold karega
//  { state.value += 1 } → function ka body(reducer ka kaam)

// -------------------
//   createSlice() yaha se:

// 1.  Ek action creator banata hai:
//   increment(); // returns { type: 'counter/increment' }

// 2.  Ek action type banata hai: "counter/increment"

// 3. Reducer function banata hai:
//             function reducer(state, action) {
//                 if (action.type === 'counter/increment') {
//                     state.value += 1;
//                 }
//                 return state;
//             }
// ---------------------
// 4. Syntax aisa kyu hota hai?

// Ye object literal + arrow function ka combo hai.
// Ek hi jagah pe tum action name aur logic define kar do.
// Pure Redux me ye 3 jagah likhna padta tha(action, action creator, reducer), RTK me ye sab ek hi syntax se ho jata hai.
// ---------------------

//  bhai function m return keyword q nhi likhte ????

//  Bhai mast sawal hai — RTK me jo tu likh raha hai:
//    increment: (state) => {state.value += 1 }
// isme return keyword isliye nahi likhna padta kyunki Immer.js ka magic chal raha hota hai.

// -----------------
//  1. Pure Redux me return compulsory hota hai

// Pure Redux reducer me:
// State immutable hota hai → direct change nahi kar sakte.
// Tumhe naya object return karna padta hai.
// -------------------

// 2. RTK me direct mutate kyu kar sakte ho ????

// RTK internally Immer.js use karta hai:
// Tu jo state.value += 1 likhta hai, wo actually draft state pe hota hai.
// Immer us draft ka immutable copy bana ke return kar deta hai automatically.
// Isliye tujhe return likhne ki zarurat nahi.

// Simple analogy ::
// Pure Redux = Tumhe khud se purana state copy karke naya banana padta hai.
// RTK = Tum draft state pe kaam karo, baaki copy ka kaam Immer karega.

// Line-by-line Explanation:

// createSlice → ek hi jagah pe actions + reducers define karne ka shortcut
// state.value += 1 → normally Redux me immutable copy banani padti thi, RTK me immer library ka magic hai
// incrementByAmount → payload handle karna easy

// ------------------------------------------------------------------------------


// Kyun (state) parameter hota hai  ???????

// Ye current state ka object hota hai jo store me pada hai.
// RTK Immer.js use karta hai internally, isliye tum directly state.value += 1 likh sakte ho.
// Pure Redux me tumhe immutable update karna padta tha:

// Pure Redux me :
// case 'INCREMENT':
//   return { ...state, value: state.value + 1 };


// RTK me:
// increment: (state) => { state.value += 1 }

// Immer background me isko immutable bana deta hai.
// -------------------------------

// 3. reducers object ka kaam

// Har key (jaise increment) ek action type ka naam hota hai.

// Har value ek function hota hai jo reducer logic define karta hai.

// createSlice() automatically:

// Action creator banata hai → increment()
// Action type banata hai → "counter/increment"
// Reducer logic ko store me register karta hai.
// ------------------------------
// 4. Short me flow

// Tu dispatch(increment()) call karega.

// RTK ka slice is action type ko match karega.

// increment reducer run hoga → state mutate karega.

// Immer immutable copy banake naya state store karega.

// UI update ho jayega.

// --------------------------------
// 1. Action object ka origin

// Redux/RTK me har baar jab tum store ko bolte ho "state badal", tum ek action bhejte ho.
// Ye action object ek simple JS object hota hai:

// {
//   type: 'counter/incrementByAmount',
//   payload: 5
// }

// type → String jo batata hai kaunsa reducer chalega.
// payload → Extra data jo tum bhej rahe ho (yaha 5).

// 2. RTK me action kaise banta hai

// RTK me createSlice() jab tum likhte ho:

// reducers: {
//   incrementByAmount: (state, action) => {
//     state.value += action.payload;
//   }
// }

// To wo automatically ek action creator function bana deta hai:

// incrementByAmount(5)

// Jo return karta hai:
// { type: 'counter/incrementByAmount', payload: 5 }

//3. Ye action reducer me kaise aata hai

// Flow:

// Component se tum dispatch karte ho:
// dispatch(incrementByAmount(5));

// incrementByAmount(5) → Action object banata hai.

// dispatch() store ko bhejta hai.

// Store us action.type ko check karta hai aur jo reducer match kare usko run karta hai.

// Reducer me wo action object dusra parameter ban ke aata hai:

// (state, action) => {
//   // action = { type: 'counter/incrementByAmount', payload: 5 }
// }
// --------------------------------





