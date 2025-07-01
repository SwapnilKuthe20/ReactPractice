import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState("Swapnil");

    const stateHandler = () => {
        setName("Neel")
    }

    return (
        <>
            <h3>Hello {name} </h3>
            <button onClick={stateHandler}>Click</button>
        </>
    )
}

export default State
