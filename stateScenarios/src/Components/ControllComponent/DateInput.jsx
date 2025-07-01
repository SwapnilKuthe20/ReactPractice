import React, { useState } from 'react';

const DateInput = () => {
    const [dob, setDOb] = useState("")

    const handleDate = (e) => {
        console.log(e.target.value, "...target");

        setDOb(e.target.value)
    }

    const today = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        day: "numeric",
        month: "long",
        weekday: "long"
    });
    
    // console.dir(today, "...today");
    // console.log(typeof today, "...today");


    return (
        <div>
            <h4>Date Input field</h4>

            <label htmlFor="date"> Select DOB : </label>
            <input
                id='date'
                type="date"
                // name='dob'
                value={dob}
                onChange={handleDate}
            // min={"2025-07-01"}
            // max={"2025-07-10"}
            />

            <p>My DOB is : {dob || "Please select your DOB "}</p>
        </div>
    );
}

export default DateInput;
