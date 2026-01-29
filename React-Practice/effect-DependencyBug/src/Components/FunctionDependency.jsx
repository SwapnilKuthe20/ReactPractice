import React, { useEffect, useState } from 'react';

const FunctionDependency = () => {

    const [count, setCount] = useState(0)

    console.log("Render...");

    const handleClick = () => {
        console.log("Button click");
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("Effect Run");

    }, [handleClick])



    return (
        <div>
            <h2> Function Dependency </h2>

            <button onClick={handleClick}> {count} </button>
        </div>
    );
}

export default FunctionDependency;
