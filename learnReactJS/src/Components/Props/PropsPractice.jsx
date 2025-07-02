import React from 'react';
import Card from './Card';

const PropsPractice = () => {

    const cardData = [
        { id: "1", name: "Swap", age: 21, location: "Nagpur" },
        { id: "2", name: "Neel", age: 22, location: "Pune" },
        { id: "3", name: "Deep", age: 35, location: "Haidrabad" },
        { id: "4", name: "Tejas", age: 43, location: "Mumbai" },
        { id: "5", name: "Harsh", age: 77, location: "Bhandara" },
    ]

    return (
        <>
            <h3> Props Practice : </h3>
            {
                cardData.map(({ id, name, age, location }) => (
                    <Card key={id} name={name} age={age} location={location} />
                ))
            }


        </>
    );
}

export default PropsPractice;
