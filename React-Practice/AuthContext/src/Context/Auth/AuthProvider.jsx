import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const storedToken = localStorage.getItem('token')

        if (!storedToken) {
            setLoading(false)
            return
        }

        setToken(storedToken)
        setUser({
            id: 1,
            name: "swap"
        })
        setLoading(false)

    }, [])

    const logIn = () => {
        const fakeToken = "fake-token-12345"

        localStorage.setItem('token', fakeToken)

        setUser({
            id: 1,
            name: "swap"
        })

        setToken(fakeToken)
        setLoading(false)
    }

    const logOut = () => {

        localStorage.removeItem('token')
        setUser(null)
        setToken(null)
        setLoading(false)
    }


    const value = {
        user,
        token,
        loading,
        logIn,
        logOut,
        isAuthenticate: !!token
    }

    if (loading) {
        <p> Checking Authentication.... </p>
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider >
        </div>
    );
}

export default AuthProvider;
