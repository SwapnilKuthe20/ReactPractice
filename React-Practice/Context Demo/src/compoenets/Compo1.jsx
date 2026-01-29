import React from 'react';
import CompoA from './CompoA';
import CompoB from './CompoB';
import Compo2 from './Compo2';

const Compo1 = () => {
    return (
        <div>
            <h1> Compo 1 </h1>
            <Compo2 />
            <CompoA />
            <CompoB />

        </div>
    );
}

export default Compo1;
