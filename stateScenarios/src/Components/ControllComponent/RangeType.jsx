import React, { useState } from 'react';

const RangeType = () => {
    const [range, setRange] = useState(0)

    const handleRange = (e) => {
        setRange(e.target.value);
    }

    return (
        <>
            <h3> Range Type </h3>

            <label htmlFor="range"> Range : {range} % </label>

            <input
                type="range"
                id="range"
                onChange={handleRange}
                value={range}
                min={0}
                max={10}
                step={2}
                style={{ accentColor: "purple" }}
            />
        </>
    );
}

export default RangeType;
