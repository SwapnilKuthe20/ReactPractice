import React from 'react';
import CompoC from './CompoC';
import CompoD from './CompoD';
import Compo3 from './Compo3';

const Compo2 = () => {
    return (
        <div>
            <h1> Compo 2 </h1>
            <Compo3 />
            <CompoC />
            <CompoD />

        </div>
    );
}

export default Compo2;
