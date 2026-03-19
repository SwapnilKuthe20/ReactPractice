import React from 'react';

const UsersList = ({ userData }) => {

    return (
        <div>
            <h1> Users List Component </h1>

            {
                userData.map(({ id, name, address, phone }) => (
                    <div key={id} style={{ width: "400px", borderRadius: "2px", border: "2px solid yellow", margin: "10px" }}>
                        <p> Name : {name}</p>
                        <p> City :{address.city}</p>
                        <p>Phone :{phone}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default UsersList;
