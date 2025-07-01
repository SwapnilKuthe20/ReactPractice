import React, { useState } from 'react';

const Dropdown = () => {
    const countryList = ["India", "USA", "South Africa", "America", "Brasil"]
    const [country, setCountry] = useState("")

    const handleDropdown = (e) => {
        setCountry(e.target.value)
    }

    return (
        <>
            <h3> DropDown </h3>
            <label htmlFor="country">Select Country : </label>
            <select id="country" value={country} onChange={handleDropdown}>
                <option value="">-- Select Country --</option>
                {
                    countryList.map((countryName, ind) => (
                        <option value={countryName} key={ind}> {countryName} </option>
                    ))
                }
            </select>

            <p>Selected Country : {country || "None Selected"}</p>
        </>
    );
}

export default Dropdown;
