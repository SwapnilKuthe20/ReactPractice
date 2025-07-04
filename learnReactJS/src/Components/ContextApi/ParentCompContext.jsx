import React, { createContext } from 'react';
import ChildAComp from './ChildAComp';
import ChildBComp from './ChildBComp';
import ChildCComp from './ChildCComp';

export const userContext = createContext();
const ParentCompContext = () => {

    const userObj = [
        { user: "Swap", age: 21, location: "Nagpur" },
        { user: "Deep", age: 43, location: "Pune" },
        { user: "Neel", age: 23, location: "Mumbai" },
        { user: "Sneel", age: 28, location: "Bhandara" },
    ]

    // console.log(userData, "contextAPi");

    return (
        <div>
            <userContext.Provider value={userObj}>
                <ChildAComp />
                <ChildBComp />
                <ChildCComp />
            </userContext.Provider>
        </div>
    );
}

export default ParentCompContext;
