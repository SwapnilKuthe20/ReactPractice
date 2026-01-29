import React, { useEffect, useState } from 'react';

const ObjectDependency = () => {

    const [count, setCount] = useState(0)

    console.log("Render...");


    const obj = {            // hr render m naya obj create hoga
        select: 1
    }
    
    // ➡️ Har render me naya object ban raha hai
    // ➡️ New reference
    // ➡️ React bolta hai: dependency changed
    // ➡️ Effect runs again

    useEffect(() => {

        console.log("Effect runs....");

    }, [obj])

    return (
        <div>
            <h1> Dependency Bugs </h1>

            <button onClick={() => setCount(count + 1)}> {count} </button>

        </div>
    );
}

export default ObjectDependency;
