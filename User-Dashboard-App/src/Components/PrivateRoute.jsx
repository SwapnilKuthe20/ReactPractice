import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { isLogIn } = useContext(AuthContext)     // 👈 login status mil gaya

    if (!isLogIn) {
        return <Navigate to="/login" replace />      // ❌ Not logged in → go to login
    }
    return (
        children        // ✅ Logged in → show actual component
    );
}

export default PrivateRoute;
