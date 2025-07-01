import React from 'react';

const Massage = ({ name, profile }) => {

    return (
        <div>
            <h2>Hello I am {name}</h2>
            <h3> {profile} </h3>
        </div>
    );
}

export default Massage;
