import React, { useState } from 'react';

const RadioLogic = () => {
    const genders = ["male", "female", "other"];
    const [gender, setGender] = useState("");
    console.log(gender, "...gender");

    const handleGender = (e) => {
        console.log(e.target.value, "...value");
        setGender(e.target.value)
    }

    return (
        <>
            <h3> Radio Button Logic </h3>
            {
                genders.map((item, index) => (
                    < label htmlFor={`${item}`} key={index} >
                        <input
                            type="radio"
                            id={`${item}`}
                            name='gender'
                            checked={gender === item}
                            onChange={handleGender}
                            value={item}
                        />
                        {item}
                    </label >
                ))
            }
        </>
    );
}

export default RadioLogic;
