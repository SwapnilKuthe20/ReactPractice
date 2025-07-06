import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogIn, setIsLogin] = useState(false)

    const logIn = () => {
        setIsLogin(true)
    }

    const logOut = () => {
        setIsLogin(false)
    }

    return (
        <AuthContext.Provider value={{ isLogIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
