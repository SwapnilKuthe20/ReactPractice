import React from 'react';
import ChildC from './ChildC';

const ChildB = ({ userData }) => {
    return (
        <div>
            <h3>Child B</h3>
            <ChildC userData={userData} />
        </div>
    );
}

export default ChildB;
