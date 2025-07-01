import React, { useState } from "react";

const CounterPrev = () => {

    const [count, setCount] = useState(0);

    const handleWrongWay = () => {

        // Both will use same old count value
        setCount(count + 1);
        setCount(count + 1);      // 👈 This won't add correctly
        console.log(count, "...count");
    }

    const handleRightWay = () => {
        // Each gets the latest "prev" value
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);     // 👈 This will add correctly
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            <h3>Counter By Prev State Handler </h3>
            <p> Count : {count}</p>

            <button onClick={handleWrongWay}> Clik here </button>
            <button onClick={handleRightWay}> Click ME </button>
            <button onClick={handleReset}>Reset</button>

        </>
    )
}

export default CounterPrev;