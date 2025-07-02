import React from 'react';
import ChildD from './ChildD';

const ChildC = ({ userData }) => {
    return (
        <div>
            <h3> Chils C </h3>
            <ChildD userData={userData} />
        </div>
    );
}

export default ChildC;
