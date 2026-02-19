import React, { useReducer } from 'react';

const initialState = {
    quantity: 1,
    price: 500,
    stock: 5,
    total: 500,
    error: null
}

const cartReducer = (state, action) => {

    switch (action.type) {

        case "ADD":

            if (state.stock < 0) {
                return {
                    ...state,
                    error: "Stock limit reach"
                }
            }

            const netQuantity = state.quantity + action.payload;

            return {
                ...state,
                quantity: netQuantity,
                stock: state.stock - action.payload,
                total: state.total + action.payload * state.price,
                error: null
            }

        case "DEC":

            return {
                ...state,
                quantity: state.quantity - action.payload,
                stock: state.stock + action.payload,
                total: state.total - action.payload * state.price,
                error: null
            }

        case "REMOVE":
            return initialState

    }
}

const CartUsereducer = () => {

    const [state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-gray-700 text-amber-100 rounded-2xl m-5 p-10'>
                <h1 className='my-5 font-bold text-cyan-500'> Cart Item - useReducers() </h1>

                <h2> Quantity : {state.quantity} </h2>
                <h2> Price : {state.price} </h2>
                <h2> Stock : {state.stock} </h2>
                {
                    state.error && (
                        <p className='text-red-600 font-bold'> {state.error} </p>
                    )
                }

                <h1 className='font-bold my-5'> Total : {state.total} </h1>

                <button
                    onClick={() => dispatch({ type: "ADD", payload: 1 })}
                    className='py-2 px-7 rounded-2xl bg-cyan-700 m-2'
                > Add item +
                </button>

                <button
                    onClick={() => dispatch({ type: "DEC", payload: 1 })}
                    className='py-2 px-7 rounded-2xl bg-cyan-700 m-2'
                > Add item -
                </button>

                <button
                    onClick={() => dispatch({ type: "REMOVE", payload: 1 })}
                    className='py-2 px-7 rounded-2xl bg-cyan-700 m-2'
                > Remove Item </button>

            </div>
        </div>
    );
}

export default CartUsereducer;
