import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UseUserContext = () => {

    const userContRes = useContext(UserContext)

    if (!userContRes) {
        throw new Error("userContRes must be inside UserProvider")
    }

    return userContRes;


}

export default UseUserContext;
