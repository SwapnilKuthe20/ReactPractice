import React from 'react';
import UseAuth from '../contexts/Auth/UseAuth';
import { AuthContext } from '../contexts/Auth/AuthContext';

const Display = () => {

    console.log("displ  render ....");


    const { count } = UseAuth(AuthContext)

    console.log(count, "...resp");

    return (
        <div>
            <h1>  Count :  {count} </h1>
        </div>
    );
}

export default Display;
