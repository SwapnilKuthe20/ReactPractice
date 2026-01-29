import React from 'react'

function UserList({ data }) {

    console.log("Child render ");


    return (
        <div>
            <ul>
                {
                    data.map((user, ind) => (
                        <li key={ind}> {user} </li>
                    ))
                }
    
            </ul>
        </div>
    )
}

export default UserList
