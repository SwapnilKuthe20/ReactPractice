import React, { useState } from 'react';
import ChildInput from './ChildInput';
import ChildData from './ChildData';

const ParentInputState = () => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <ChildInput handleInput={handleInput} />
            <ChildData input={input} />
        </div>
    );
}

export default ParentInputState;
