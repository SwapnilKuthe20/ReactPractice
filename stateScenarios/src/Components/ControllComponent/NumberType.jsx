import React, { useState } from 'react';

const NumberType = () => {

    const [quntity, setQuantity] = useState("")

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    return (
        <>
            <h3> Number Field HAndling .... </h3>

            <label htmlFor="quantity"> Quntity : </label>
            <input
                type="number"
                id='quantity'
                name='quntity'
                placeholder='Enter quntity..'
                onChange={handleQuantity}
                value={quntity}
                min={1}
                max={10}
                step={2}
            />


        </>
    );
}

export default NumberType;
