import React, { useEffect, useState } from 'react';

// ✅ Scenario 1: Counter with Document Title Change
// 📌 Goal:
// Ek counter button banao (+)
// Jab bhi count badhe, tab document.title me updated count show ho
// 🧠 Focus: Dependency array, DOM side effect
// 🎯 Bonus: Initial title "React App" ho jab count = 0

const Scenario = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Swap")

    // document.title = count == 0 ? "React App" : `Count is ${count}`;     // bad practice

    // Good Practice 

    useEffect(() => {
        document.title = count == 0 ? "React App" : (`Count is : ${count}`);
        console.log('doc run..');
    }, [count])

    const countHandler = () => {
        setCount(prevState => prevState + 1)
    }

    const handleName = () => {
        setName("Neel")
    }

    return (
        <div>
            <h3>{count == 0 ? "React App" : count}</h3>

            <button onClick={countHandler}> Counter </button>

            <h4>{name}</h4>

            <button onClick={handleName}> Change Name </button>
        </div>
    );
}

export default Scenario;

