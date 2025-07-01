import React, { useState } from 'react';

// ✅ 1. Age Calculator
// 🔹 Input: Date of birth
// 🔹 Output: Age in years, months, days
// 🔹 Concept: Date diff, formatting, validation

const AgeCalculator = () => {
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleAgeCalcii = () => {
        const dateBirth = new Date(dob);
        const today = new Date();

        let years = today.getFullYear() - dateBirth.getFullYear();
        let months = today.getMonth() - dateBirth.getMonth();
        let days = today.getDate() - dateBirth.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            // console.log(prevMonth, "...prevMonth");
            // console.log(prevMonth.getDate(), "...dateafter prevMonth");
            days += prevMonth.getDate();
            // console.log(days, "....days");
        }

        if (months < 0) {
            years--;
            months += 12;
            // console.log(months, "..months");
        }

        setAge(`${years} yrs ${months} months ${days} days`)
    }

    return (
        <>
            <h3> Age Calculator : Project</h3>

            <label htmlFor="dob"> Date of Birth : </label>
            <input
                type="date"
                id='dob'
                value={dob}
                onChange={handleDob}
                max={new Date().toISOString().split("T")[0]}
            />

            <p> DOB : {dob || "Please select DOB"}</p>

            <button type='button' onClick={handleAgeCalcii}> Find Age </button>

            {
                age &&
                <p> Your Age is : {age}</p>
            }
        </>
    );
}

export default AgeCalculator;
