import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className='w-2/6 bg-emerald-700 p-5 rounded-xl min-h-80'>
            <h1 className='text-center text-lime-300 text-3xl'> Counter App </h1>

            <h2 className='text-2xl my-10 text-center'> Count : {count} </h2>

            <div className='flex justify-center '>
                <button
                    onClick={handleInc}
                    className='px-4 py-1 bg-amber-600 rounded cursor-pointer '
                > +
                </button>

                <button
                    onClick={handleDec}
                    className='px-4 py-1 bg-amber-600 rounded cursor-pointer mx-4'

                > -
                </button>

                <button
                    onClick={handleReset}
                    className='px-4 py-1 bg-amber-600 rounded cursor-pointer '

                > Reset
                </button>

            </div>
        </div>
    );
}

export default Counter;
