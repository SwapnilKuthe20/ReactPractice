import React, { useState } from "react";

const ShowHide = () => {

    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }
    return (
        <>
            <h2>Show / Hide Text</h2>

            <h3>{show && <p>Show Message</p>}</h3>

            <button onClick={handleClick}> {show ? "Show" : "Hide"} text </button>
        </>
    )
}

export default ShowHide;