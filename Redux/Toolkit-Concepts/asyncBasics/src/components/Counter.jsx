import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/features/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    // console.log(increment(5), "...increment");


    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-amber-800 text-amber-50 rounded-2xl mt-7 p-8'>
                <h1 className='text-2xl text-center font-bold'> Counter - toolkit Sync </h1>
                <h2 className='text-2xl font-extrabold text-center py-9'> Count = {count} </h2>


                <div className='flex flex-wrap justify-center'>
                    <button
                        onClick={() => dispatch(increment())}
                        className='bg-amber-300 font-black text-black py-2 px-7 rounded-2xl m-2'
                    > + 1
                    </button>

                    <button
                        onClick={() => dispatch(decrement())}
                        className='bg-amber-300 font-black text-black py-2 px-7 rounded-2xl m-2'
                    > - 1
                    </button>

                    <button
                        onClick={() => dispatch(reset())}
                        className='bg-amber-300 font-black text-black py-2 px-7 rounded-2xl m-2'
                    > Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
