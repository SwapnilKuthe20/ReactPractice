import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isAuthenticate = localStorage.getItem('token')
    console.log(isAuthenticate, "isAuth");


    if (!isAuthenticate) {
        return <Navigate to={'/login'} replace />
    }

    return <Outlet />
}

export default ProtectedRoute;
