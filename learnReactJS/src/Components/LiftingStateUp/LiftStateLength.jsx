import React from 'react';

const LiftStateLength = ({ formData }) => {
    const { name, profile } = formData;

    return (
        <div>
            <h3> Character Length Show Here : </h3>

            <p> Name lenght : {name.length} </p>
            <p> Profile length :{profile.length}</p>
        </div>
    );
}

export default LiftStateLength;
