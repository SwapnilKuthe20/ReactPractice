import React, { useReducer } from 'react';

let initialState = {
    count: 0,
    error: null
}

const counterReducer = (state, action) => {
    switch (action.type) {

        case "INC":
            return {
                ...state,
                count: state.count + action.payload,
                error: null
            }

        case "DEC":

            const nextCount = state.count - action.payload;

            if (nextCount < 0) {
                return {
                    ...state,
                    error: "Count cannot be less than 0"
                }
            }
            return {
                ...state,
                count: state.count - action.payload,
                error: null
            }

        case "RESET":
            return initialState

        default:
            return state
    }
}

const CounterAppReducer = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)


    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-600 text-amber-50 p-10 rounded-2xl m-5'>

                <h1 className='text-center text-xl text-black font-bold'> Counter App - useReducer() </h1>

                <h1 className='m-5 font-bold'> Count = {state.count} </h1>
                {
                    state.error && (
                        <p className='text-red-600'> {state.error} </p>
                    )
                }

                <button
                    onClick={() => dispatch({ type: "INC", payload: 1 })}
                    className='py-2 px-6 bg-cyan-950 cursor-pointer rounded-2xl m-1'
                > + 1
                </button>

                <button
                    onClick={() => dispatch({ type: "DEC", payload: 1 })}
                    className='py-2 px-6 bg-cyan-950 cursor-pointer rounded-2xl m-1'
                > - 1
                </button>

                <button
                    onClick={() => dispatch({ type: "RESET", payload: 0 })}
                    className='py-2 px-6 bg-cyan-950 cursor-pointer rounded-2xl m-1'
                > Reset
                </button>

                <button
                    onClick={() => dispatch({ type: "INC", payload: 5 })}
                    className='py-2 px-6 bg-cyan-950 cursor-pointer rounded-2xl m-1'
                > + 5
                </button>

                <button
                    onClick={() => dispatch({ type: "DEC", payload: 5 })}
                    className='py-2 px-6 bg-cyan-950 cursor-pointer rounded-2xl m-1'
                > - 5
                </button>
            </div>
        </div>
    );
}

export default CounterAppReducer;
