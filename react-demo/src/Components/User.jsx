import React from 'react';

const User = () => {
    const users = [
        { id: 1, name: "Amit" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Neha" }
    ];

    const handleClick = (name) => {
        alert(`hello ${name}`)
    }

    const handleBtn = (e, name) => {
        console.log(e, "...events");
        console.log(name, "....name");

    }

    return (
        <div>
            <h1> User Component : </h1>
            <ul>
                {
                    users.map(({ id, name }) => (
                        <li key={id} onClick={() => handleClick(name)} style={{ cursor: "pointer" }}>{name} </li>
                    ))
                }
                <button onClick={(e) => handleBtn(e, name)}> Click me !! </button>
            </ul>

        </div>
    );
}

export default User;
