import React, { useState } from "react";

const ToggleBtn = () => {

    const [btn, setBtn] = useState({
        btn1: true,
        btn2: true,
        btn3: true
    })

    const handleBtn = (btnName) => {
        setBtn(prev => ({
            ...prev,
            [btnName]: !btn[btnName]
        }))
    }


    return (
        <>
            <div style={{ height: "500px", width: "500px" }}>

                <h2>Toggle Buutons</h2>

                <button
                    style={{ backgroundColor: btn.btn1 ? "Green" : "Grey" }}
                    onClick={() => { handleBtn("btn1") }}>
                    Save
                </button>

                <button
                    style={{ backgroundColor: btn.btn2 ? "Green" : "Grey" }}
                    onClick={() => { handleBtn('btn2') }}>
                    Cancel
                </button>

                <button
                    style={{ backgroundColor: btn.btn3 ? "Green" : "Grey" }}
                    onClick={() => { handleBtn('btn3') }}>
                    Delete
                </button>
            </div >

        </>
    )
}

export default ToggleBtn;

