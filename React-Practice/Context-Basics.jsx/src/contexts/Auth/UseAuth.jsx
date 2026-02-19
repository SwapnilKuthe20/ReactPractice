import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UseAuth = () => {

    const countContext = useContext(AuthContext)

    if (!countContext) {
        return Error("Context Errror...")
    }

    return countContext
}

export default UseAuth;
