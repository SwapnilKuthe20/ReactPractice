import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({ children }) => {

    const [user, setUser] = useState("")

    const login = (data) => {
        setUser(data)
    }

    const logout = () => {
        setUser("")
    }

    const data = {
        user,
        isLogin: !!user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
