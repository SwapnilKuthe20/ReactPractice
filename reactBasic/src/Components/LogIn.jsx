import React, { useState } from "react";

const LogIn = () => {

    const [login, setlogin] = useState(true)

    const handleLogOut = () => {
        setlogin(!login)
    }

    return (
        <>
            <h3>Login Concept</h3>

            {login && <p> Welcome user !!</p>}

            <button onClick={handleLogOut}> {login ? "log Out" : "log In"} </button>
        </>
    )
}

export default LogIn;