import React from 'react';
import DefaultPropsChild from './DefaultPropsChild';

// Make a ProfileCard component:
// Props: name (string), age (number), bio (optional string)

// 1. Add defaultProps for bio = "No bio available"
// 2. Add PropTypes validation for all props

const profileData = [
    { name: "Swap", age: 21 },
    { name: "neel", bio: "Developer" },
    { age: 21, bio: "Developer" }
]

const DefaultProps = () => {

    return (
        <>
            <h3> Default Props Practice</h3>
            {
                profileData.map((data, ind) => (
                    <DefaultPropsChild key={ind} {...data} />
                ))
            }

        </>
    );
}

export default DefaultProps;
