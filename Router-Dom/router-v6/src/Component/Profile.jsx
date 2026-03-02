import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1> Profile Page </h1>

            <Link to="/profile" > My Profile </Link>
            <Link to="/profile/profileDashboard"> Profile Dashboard </Link>
            <Outlet />
        </div>
    );
}

export default Profile;
