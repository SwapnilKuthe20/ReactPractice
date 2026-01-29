import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const CompoF = () => {

    const { name, age, address } = useContext(UserContext)
    // console.log(name, "name ....userConData");
    // console.log(age, "age ....userConData");
    // console.log(address.city, "city ....userConData");


    return (
        <div>
            <h1> COmpo F </h1>

            <p> Name : {name} </p>
            <p> Age : {age} </p>
            <p> City : {address.city} </p>
            <p> Pin : {address.pin} </p>
        </div>
    );
}

export default CompoF;
