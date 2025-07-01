import React, { useState } from "react";

const DarkLight = () => {

    const [darktheme, setDarktheme] = useState(true)

    const handleDarkMode = () => {
        setDarktheme(!darktheme)
    }

    const appStyle = {
        backgroundColor: darktheme ? "black" : "white",
        color: darktheme ? "white" : "black",
        minHeight: "50vh"
    }

    return (
        <>
            <div style={appStyle} >

                <h2>Hello World </h2>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, voluptatum molestias,
                    excepturi optio sequi nostrum nam dolor provident tempora incidunt ab pariatur.
                    Reprehenderit voluptatibus fuga a nostrum quas sint cupiditate eveniet dolorum aspernatur
                    totam! Quae eveniet quo voluptate dicta hic doloremque et alias sint eius? Nesciunt consequuntur eligendi mollitia repellendus
                </h3>
                <button onClick={handleDarkMode}> {darktheme ? "lightMode" : "darkmode"} </button>
            </div>


        </>
    )
}

export default DarkLight;