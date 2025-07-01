import React, { useState } from "react";

// 👉 Task:
// 1. Ek function banao jo count ko 2 se badhaye
// 2. Agar count >= 10 ho jaye, to usko 0 kar de

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(prev => (prev >= 10) ? 0 : prev + 2)
    }

    const handledec = () => {
        setCount(prev => prev - 2)
    }

    const handleReset = () => {
        setCount(0)
    }

    console.log(count, "...count");

    return (
        <>
            <h3> Counter App </h3>
            <div>
                <h3>Counter : {count}</h3>
                <button onClick={handleInc}> +2 </button>
                <button onClick={handledec}> -2 </button>
                <button onClick={handleReset}> reset </button>
            </div>


        </>
    )
}

export default Counter;
