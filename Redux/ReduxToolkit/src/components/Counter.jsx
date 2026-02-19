import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../features/Counter/counterSlice';
import { darkTheme } from '../features/Theme/theme';

const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();

    const theme = useSelector(state => state.theme.isDark)

    return (
        <div className='flex justify-center'>
            <div className={`${theme ? 'bg-black text-amber-50' : 'bg-emerald-400'} w-1/2 p-12 rounded-2xl`}>

                <button
                    onClick={() => dispatch(darkTheme())}
                    className='bg-amber-950 text-amber-50 rounded-2xl py-1 px-6 cursor-pointer my-6'
                >
                    {theme ? "Light" : "Dark"}
                </button>
                <h1 className='text-2xl text-center font-bold'> Counter App - By redux toolkit </h1>

                <h2 className='text-2xl font-bold text-center text-red-800 my-12'> Count : {count} </h2>

                <button
                    onClick={() => dispatch(increment(5))}
                    className='py-2 px-7 bg-emerald-900 text-white rounded-2xl cursor-pointer m-2'> + </button>
                <button
                    onClick={() => dispatch(decrement(3))}
                    className='py-2 px-7 bg-emerald-900 text-white rounded-2xl cursor-pointer m-2'> - </button>
                <button
                    onClick={() => dispatch(reset())}
                    className='py-2 px-7 bg-emerald-900 text-white rounded-2xl cursor-pointer m-2'> Reset </button>

            </div>
        </div>
    );
}

export default Counter;
