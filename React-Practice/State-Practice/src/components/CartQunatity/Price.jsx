import React from 'react';

const Price = ({ quantity }) => {
    return (
        <div>
            <p> Total : {quantity * 100} </p>
        </div>
    );
}

export default Price;
