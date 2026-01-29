import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {


    const token = localStorage.getItem('token')

    if (token) {
        localStorage.removeItem('token')
    }

    return (
        <Navigate to={'/login'} />
    );
}

export default Logout;
