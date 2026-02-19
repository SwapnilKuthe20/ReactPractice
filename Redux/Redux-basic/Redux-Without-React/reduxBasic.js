import { createStoreHook } from 'react-redux'
import { createStore } from 'redux'

let storeState = {
    count: 0
}

const action = {
    type: "INC"
}

const reducer = (storeState, action) => {

    if (action.type === "INC") {
        return {
            count: storeState.count + 1
        }
    }

    return storeState
}


const dispatch = (action) => {

    storeState = reducer(storeState, action)
    subscribe()
    return storeState;
}

const subscribe = () => {
    console.log("Subscribe...", storeState);

}

const res = store.dispatch(action)
const res1 = store.dispatch(action)
const res2 = store.dispatch(action)

// console.log(res, "...result");
// console.log(res1, "...result");
// console.log(res2, "...result");

// console.log(res === res1 === res2);


const store = createStore(reducer)

console.log(store, "..store");
console.log(store.getState(), "..state");
console.log(store.subscribe(), "..store subscribe");

