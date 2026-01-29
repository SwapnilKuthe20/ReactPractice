import React, { useState } from 'react';
import { off, on } from '../assets/Images';
import { FaRegLightbulb } from "react-icons/fa";
import { CiTextAlignCenter } from 'react-icons/ci';

const ToogleLamp = () => {

    const [isOn, setIsOn] = useState(false)

    const handleOnOff = () => {
        setIsOn(prev => !prev)
    }

    return (
        <div style={{ display: "block", textAlign: "center" }}>
            <h1 style={{ margin: "5px" }}> Lamp ON / OFF </h1>

            {/* <img src={isOn ? on : off} alt={isOn ? "onLamp-img" : "offLampImg"} /> */}

            <FaRegLightbulb size={"100px"} fill={isOn ? "yellow" : ""} />

            <button onClick={handleOnOff} style={{ display: "block", backgroundColor: "red", margin: "auto" }}>{isOn ? "Off" : "On"}</button>
        </div>
    );
}

export default ToogleLamp;
