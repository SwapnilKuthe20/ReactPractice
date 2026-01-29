import React from 'react';

const ChildInput = ({ handleInput }) => {
    
    return (
        <div>
            <input type="text" onChange={handleInput} />
        </div>
    );
}

export default ChildInput;
