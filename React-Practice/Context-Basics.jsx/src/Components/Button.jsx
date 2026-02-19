import React from 'react';
import UseAuth from '../contexts/Auth/UseAuth';
import { AuthContext } from '../contexts/Auth/AuthContext';

const Button = () => {

    console.log("button render .....");


    const { count, setCount } = UseAuth(AuthContext)

    const handleCountInc = (count) => {
        console.log(count, "...count in inc");
        setCount(count + 1)
    }

    const handleCountDec = () => {
        console.log(count, "...count in dec");
        setCount(count - 1)
    }

    const handleCountReset = () => {
        console.log(count, "...count in reset");
        setCount(0)
    }


    return (
        <div>
            <button onClick={() => handleCountInc(count)}> Count ++ </button>
            <button onClick={() => handleCountDec(count)}> Count -- </button>
            <button onClick={() => handleCountReset(count)}> Count Reset </button>
        </div>
    );
}

export default Button;
