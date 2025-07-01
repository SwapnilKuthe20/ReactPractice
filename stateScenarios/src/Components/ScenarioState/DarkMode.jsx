import React, { useEffect, useState } from 'react';

const DarkMode = () => {

    const [dark, setDark] = useState(() => {
        try {
            const localTheme = localStorage.getItem("theme")
            return localTheme ? JSON.parse(localTheme) : true;
        } catch (err) {
            console.log("Error no theme saved in localStorage", err);
            return true;
        }
    })

    // useEffect(() => {
    //     const getTheme = JSON.parse(localStorage.getItem("theme"))
    //     setDark(getTheme)
    // }, [])

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(dark))
    }, [dark])


    const handleDark = () => {
        setDark(prevState => !prevState)
    }

    return (
        <div style={{ backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black", height: "300px" }}>
            <button onClick={handleDark}> {dark ? "Light" : "Dark"}</button>

            <h3>Dark mode </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, adipisci. Exe quasi quis eius officia voluptate!</p>
        </div>
    );
}

export default DarkMode;
