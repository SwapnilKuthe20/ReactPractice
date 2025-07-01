import React, { useEffect, useState } from 'react'

const FunctionEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Swapnil")

    // Effect runs every time mount and update (no [])
    // useEffect(() => {
    //     console.log("Effect calls.." + count);
    // })   
    // --------------------------------------------------
    // Effect runs when component is mount ([])
    // useEffect(() => {
    //     console.log("Effect calls.." + count);
    // },[]) 

    // --------------------------------------------------
    // Effect runs when component is mount and count state update ([])
    // useEffect(() => {
    //     console.log("Effect calls.." + count);
    // }, [count])

    useEffect(() => {
        console.log("Effect calls.." + count);
    }, [count, name])

    let handleIncreament = () => {
        setCount(count + 2);
    }


    return (
        <div>
            <h2>Counter : {count}</h2>
            <h2>Name : {name}</h2>
            <button onClick={handleIncreament}>Increament + 2</button>
            <button onClick={() => setName("Neel")}>ChangeName</button>
        </div>
    )
}

export default FunctionEffect
