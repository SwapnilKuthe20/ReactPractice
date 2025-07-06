import React from 'react';
import { NavLink } from 'react-router-dom';

const users = [
    { id: 1, name: "Swapnil", skill: "React" },
    { id: 2, name: "Aman", skill: "Node.js" },
    { id: 3, name: "Priya", skill: "UI/UX" },
];

const User = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>All Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} style={{ margin: "10px 0" }}>
                        <NavLink to={`/user/${user.id}`} className={({ isActive }) => isActive ? 'active' : ''}>
                            {user.name} - ({user.skill})
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;
