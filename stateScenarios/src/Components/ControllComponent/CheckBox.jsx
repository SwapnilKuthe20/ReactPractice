import React, { useState } from 'react';

const CheckBox = () => {
    const [agrre, setAgree] = useState(false)

    const handleTermsCond = (e) => {
        // console.log(e.target.checked, "...Checkbox");
        setAgree(e.target.checked)
    }

    return (
        <div>
            <h3> CheckBox </h3>

            <label htmlFor="">
                <input
                    type="checkbox"
                    // value={agrre}        // use when form sub or multiCheckbox
                    checked={agrre}
                    onChange={handleTermsCond}
                />
                Accept Terms and Consitions.
            </label>


        </div>
    );
}

export default CheckBox;
