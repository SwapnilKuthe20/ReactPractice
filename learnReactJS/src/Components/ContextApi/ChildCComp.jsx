import React, { useContext } from 'react'
import { userContext } from './ParentCompContext';

const ChildCComp = () => {

    const userObj = useContext(userContext);
    // console.log(userObj, "....userContext");
    // console.log(Array.isArray(userObj), "...isArray");

    return (
        <div>
            <h3> Child C Component : ContextApi</h3>
            {
                userObj.map(({ user, age, location }, i) => (
                    <div key={i} style={{ backgroundColor: "red", color: "white", width: "400px", height: "200px", marginBottom: "5px" }}>
                        <h2>{user}</h2>
                        <h2>{age}</h2>
                        <h2>{location}</h2>
                    </div>
                ))
            }


        </div>
    );
}

export default ChildCComp;
