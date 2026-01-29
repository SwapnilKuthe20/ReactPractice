import React, { useRef } from 'react';

const CoounterUseRef = () => {

    let count = useRef(0)

    const handleCount = () => {
        // console.log("Clicked...");
        count.current += 1

        console.log(count, "....count ref initial");
        console.log(count.current, "....count current");
    }


    return (
        <div>
            <h1> Counter By useRef Hook </h1>

            <p> Count {count.current} </p>

            <button onClick={handleCount}> Count+ </button>

        </div>
    );
}

export default CoounterUseRef;
