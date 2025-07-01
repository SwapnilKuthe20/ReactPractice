import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        setCount(count - 1)
    }

    const handlereset = () => {
        setCount(0)
    }

    return (
        <>
            <h2>Counter App</h2>
            <h3> Count : {count}</h3>

            <button onClick={handleInc}> Increament </button>
            <button onClick={handleDec}> Decreament </button>
            <button onClick={handlereset}> Reset </button>

        </>
    )
}
export default Counter;