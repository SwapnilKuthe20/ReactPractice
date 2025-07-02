import React from 'react';

const DefaultPropsChild = ({ name = "Not Avilable", age = "Not Given", bio = "Blank" }) => {
    console.log(name, "child");

    return (
        <div>
            <h4> Profile Card </h4>
            <h3> Name : {name} </h3>
            <h3> Age : {age} </h3>
            <h3> Bio : {bio} </h3>
        </div>
    );
}

// DefaultPropsChild.defaultProps = {
//     name: "Not Available",
//     age: "Not mention",
//     bio: "Not available"
// }

// Bhai defaultProps --> Depricate hua h React 18+ version k bd se 


export default DefaultPropsChild;
