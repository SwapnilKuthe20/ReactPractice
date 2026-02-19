import React, { useReducer } from 'react';

const initialState = 0;

const countReducer = (state, action) => {
    // console.log(state, "...state");
    // console.log(action, "...action");

    switch (action.type) {

        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        case "RESET":
            return initialState;

        case "INCREMENT_5":
            return state + action.payload;

        case "DECREMENT_5":
            return state - action.payload;

        default:
            return state
    }
}

const CountReducer = () => {


    const [count, dispatch] = useReducer(countReducer, initialState)

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-indigo-700 p-9' >

                <h1 className='text-center text-2xl'> Count - By Using useReducer </h1>

                <p className='my-5'> Count : {count} </p>

                <button
                    onClick={() => dispatch({ type: "INCREMENT" })}
                    className='py-2 px-6 bg-indigo-900 rounded-2xl m-1 cursor-pointer'
                > + 1
                </button>

                <button
                    onClick={() => dispatch({ type: "DECREMENT" })}
                    className='py-2 px-6 bg-indigo-900 rounded-2xl m-1 cursor-pointer'
                > - 1
                </button>

                <button
                    onClick={() => dispatch({ type: 'RESET' })}
                    className='py-2 px-6 bg-indigo-900 rounded-2xl m-1 cursor-pointer'
                > Reset
                </button>

                <button
                    onClick={() => dispatch({ type: "INCREMENT_5", payload: 5 })}
                    className='py-2 px-6 bg-indigo-900 rounded-2xl m-1 cursor-pointer'
                >
                    + 5
                </button>

                <button
                    onClick={() => dispatch({ type: "DECREMENT_5", payload: 5 })}
                    className='py-2 px-6 bg-indigo-900 rounded-2xl m-1 cursor-pointer'
                >
                    - 5
                </button>


            </div>
        </div>
    );
}

export default CountReducer;
