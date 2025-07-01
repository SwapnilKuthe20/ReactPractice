import React, { useState } from 'react';

// 🛠 Coding Challenge
// ✅ Create a component:
// Input field for typing name (controlled)
// Button to toggle visibility of greeting
// Greeting displays: “Hello, [name]!”

const InputShowHideGreet = () => {
    const [name, setName] = useState("");
    const [toggleShow, setToggleShow] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName(value)
    }

    const handleToggle = () => {
        setToggleShow(prevState => !prevState);
    }
    return (
        <>
            <h3> Mini Project </h3>

            <input type="text" onChange={handleChange} name="name" value={name} /> <br /><br />

            <button onClick={handleToggle}>{toggleShow ? "Hide Greet" : "Show Greet"}</button>
            {
                toggleShow &&
                < p > {`Hello ${name} !!`} </p >
            }
        </>
    );
}

export default InputShowHideGreet;
