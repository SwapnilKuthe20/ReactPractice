import React from 'react';

const QuantitySelector = ({ handleQuantity, quantity }) => {
    return (
        <div>
            <button onClick={handleQuantity}> quantity+ {quantity} </button>
        </div>
    );
}

export default QuantitySelector;
