import React, { useState } from "react";

const PassShowHide = () => {
    const [show, setShow] = useState(false)

    const passShowHandler = () => {
        setShow(prevState => !prevState)
    }

    return (
        <>
            <div style={{ width: "500px", height: "500px", backgroundColor: "yelow", border: "1px solid White", margin: "auto" }}>
                <h4 style={{ textAlign: "center" }}> Password Show Hide Mini Project</h4>

                <label htmlFor=""> Password : &nbsp;
                    <input type={show ? "text" : "password"} style={{}} />
                    <i style={{ cursor: "pointer", color: show ? "Yellow" : "white" }} onClick={passShowHandler}>{show ? "Hide pass" : "show pass"}</i>
                </label> <br />
                {/* <button onClick={passShowHandler}>{show ? "Hide Pass" : "Show Pass"}</button> */}
            </div >
        </>
    )
}

export default PassShowHide;
