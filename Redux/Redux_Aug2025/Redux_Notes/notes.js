
// :: IMP Points ::

// Redux ka flow kaise hota hai?
// Component (UI)  →  Dispatch(Action)  →  Reducer(State update karega)  →  Store(State save)  →  UI re-render

// Step-by-step:

// UI me koi event hua (button click, form fill, etc.)

// Tu dispatch karega ek action (object jisme type aur data hota hai).

// Redux ka reducer action dekhega aur purane state se naya state banayega.

// Store me wo naya state save ho jayega.

// State badalte hi jaha-jaha wo state use ho rahi thi, waha UI automatically re-render ho jayega.

// ---------------------------------------------------
// Redux store ek hi root reducer leta hai..

// configureStore() ek hi function me
// 👉 createStore() ka kaam karta hai +
// 👉 combineReducers() ka kaam bhi (agar tum object reducers pass karo to) +
// 👉 Middleware, DevTools, thunk ka default setup bhi free me de deta hai.

// configureStore() ek hi function me combineReducers + createStore + middleware + DevTools ka kaam karta hai.
// Isliye new projects me sirf yahi use karna best practice hai.
// --------------------------------------------------------------------
// ⚙️ configureStore() Internal Flow

// [1] Tum call karte ho:
//     configureStore({ reducer, middleware, devTools, preloadedState })

//       |
//       v

// [2] RTK check karta hai:
//     - Agar reducer ek object hai → 
//          rootReducer = combineReducers(object)
//     - Agar reducer ek function hai → 
//          rootReducer = reducer (as is)

//       |
//       v

// [3] Middleware setup hota hai:
//     - Default me redux-thunk add hota hai
//     - Agar tum custom middleware pass karo to merge hota hai
//       (serializableCheck + immutableCheck by default)

//       |
//       v


// [4] Redux DevTools setup:
//     - Agar devTools: true (default) & env !== 'production'
//         → connect Redux DevTools Extension automatically
//     - Agar false → skip

//       |
//       v

// [5] Internally `createStore()` call hota hai:
//     createStore(
//         rootReducer,
//         preloadedState,
//         applyMiddleware(...middleware)
//     )

//       |
//       v

// [6] Store return hota hai:
//     {
//       dispatch,
//       getState,
//       subscribe,
//       replaceReducer
//     }


// 📝 Simple English me samjho

// Tum configureStore() ko reducers + options dete ho

// Wo decide karta hai:

// Object mila → combineReducers() lagao

// Function mila → direct use karo

// Middleware & DevTools defaults set karta hai

// Peeche se normal Redux ka createStore() call hota hai

// Tumhe ek ready-to-use store milta hai
// ⚡ Is tarah RTK boilerplate hata ke ek opinionated aur safe setup deta hai.
// -----------------------------------------------------

// Migration Tips (vanilla Redux → RTK)

// combineReducers ko chhodo; configureStore use karo.

// createAction + createReducer se start kar sakte, par recommended createSlice.

// Thunks → createAsyncThunk.

// Custom middleware → same tarike se middleware: (g)=>g().concat(...).

// Data fetching custom code → prefer RTK Query.
// -----------------------------------------------------

// 4️⃣ Rule of Thumb

// “Global problems → Redux, Local problems → useState”

// Agar tumhare state ka impact multiple components me hai → Redux

// Agar wo sirf ek component ke andar ka kaam hai → useState
// ---------------------------------------------
// 5️⃣ MNC style code structure

// Typical MNC me:

// Redux slices for user, cart, products, settings

// RTK Query for API data fetch/caching

// Local UI state for forms, toggles, modals

// Sometimes React Query / Zustand for niche cases

// ---------------------------------------------




