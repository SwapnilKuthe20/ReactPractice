import React from 'react';

const LiftStateLive = ({ formData }) => {
    const { name, profile } = formData;
    return (
        <div>
            <h3> Libe server Here : </h3>

            <p> Name : {name} </p>
            <p> profile : {profile} </p>
        </div>
    );
}

export default LiftStateLive;
