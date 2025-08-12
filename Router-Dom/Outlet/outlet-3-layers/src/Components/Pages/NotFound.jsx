import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-56 p-6 m-auto text-center bg-amber-950'>
            <h1> Page Not Found </h1>

            <NavLink to={'/'}> GO to Home Page </NavLink>
        </div>
    );
}

export default NotFound;
