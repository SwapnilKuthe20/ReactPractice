import React from 'react';
import Card from './Card';

const UserCard = ({ name, city, age, bg, title }) => {
    return (
        <Card bg={bg} title={title} >
            <p>Name : {name} </p>
            <p>City :{city} </p>
            <p>Age  :{age} </p>
        </Card >
    );
}

export default UserCard;
