import React from 'react';
import ChildB from './ChildB';

const ChildA = ({ userData }) => {
    return (
        <div>
            <h3> Chils A </h3>
            <ChildB userData={userData} />
        </div>
    );
}

export default ChildA;
