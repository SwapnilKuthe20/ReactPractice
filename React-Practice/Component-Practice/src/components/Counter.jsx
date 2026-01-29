import React, { useState } from 'react';

const Counter = () => {

    // let count = 0
    const [count, setCount] = useState(0)

    console.log(count, "...count");

    const handleInc = () => {
        // count = count + 1
        // console.log(count, "...count inc");
        setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // setCount(prev => prev + 1)
        // setCount(prev => prev + 1)
        // setCount(prev => prev + 1)

    }

    const handleDec = () => {
        // count = count - 1
        // console.log(count, "...count dec");
        if (count != 0) {
            setCount(count - 1)
        }
    }

    const handleReset = () => {
        // count = 0
        // console.log(count, "...count reset");
        setCount(0)
    }


    return (
        <div style={{
            width: "500px",
            backgroundColor: "yellowgreen",
            color: "black",
            borderRadius: "15px"
        }}>
            <div style={{ textAlign: "center" }}>

                <h3 style={{ margin: "15px" }}> Counter App </h3>

                <h1 style={{ margin: "15px" }}> {count} </h1>

                <button onClick={handleInc} style={{ margin: "15px" }}> + </button>
                <button onClick={handleDec} style={{ margin: "15px" }} > - </button>
                <button onClick={handleReset} style={{ margin: "15px" }}> Reset </button>
            </div>
        </div>
    );
}

export default Counter;
