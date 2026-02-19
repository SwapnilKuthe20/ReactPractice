import React, { useCallback, useState } from 'react';
import CallBasic_Child from './CallBasic_Child';

const CallBackBasic = () => {

    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Click...");
        setCount(count + 1)
    }, [count])

    const name = "swap"

    console.log("Parent re render....");

    return (
        <div className=' flex justify-center '>
            <div className='w-1/2 bg-cyan-800 text-white p-8 mt-10'>

                <h2> Parent Count : {count} </h2>

                <button
                    onClick={() => setCount(count + 1)}
                    className='cursor-pointer py-1.5 px-7 bg-amber-900 rounded-2xl'
                >
                    Count +
                </button>

                <CallBasic_Child onClick={handleClick} name="Swap" />

            </div>
        </div>
    );
}

export default CallBackBasic;
