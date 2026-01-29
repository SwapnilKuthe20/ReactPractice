import React from 'react';
import { useAuth } from '../Context/Auth/useAuth';

const Dashboard = () => {

    const { logOut, user } = useAuth()

    const handleLogout = () => {
        logOut()
    }


    return (
        <div>
            <h1> Dashboard </h1>

            <p> User :  {user?.name}  </p>

            <button onClick={handleLogout}> Logout </button>
        </div>
    );
}

export default Dashboard;
