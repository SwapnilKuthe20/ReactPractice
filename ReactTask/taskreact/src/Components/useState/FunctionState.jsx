import React, { useState } from 'react'

const FunctionState = () => {
    const [count, setCount] = useState(0);

    let handleIncease = () => {
        setCount(count + 1)
    }

    let handleDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Counter APP</h3>
            <h4>Counter : {count}</h4>

            <button onClick={handleIncease}>Increament</button>
            <button onClick={handleDecrease}>Decreament</button>
        </div>
    )
}

export default FunctionState
