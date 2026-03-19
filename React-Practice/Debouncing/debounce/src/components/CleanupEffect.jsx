import React, { useEffect, useState } from 'react';

const CleanupEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

        return () => {
            console.log("Cleanup run");
        }

    }, [count])

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
        <div style={{ width: "40%", height: "300px", backgroundColor: "red", margin: "0px auto", color: "white" }}>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1 style={{ textAlign: 'center' }}> Counter </h1>

                <h1 style={{ textAlign: 'center' }}> Count : {count} </h1>
                <div style={{ margin: "10px" }}>
                    <button onClick={handleInc}> + </button>
                    <button onClick={handleDec}> - </button>
                    <button onClick={handleReset}> Reset </button>
                </div>
            </div>

        </div>
    );
}

export default CleanupEffect;
