import React from 'react';
import AuthProvider from './Auth/AuthProvider';
import UserProvider from './ContextUser/UserProvider';

const AppProviders = ({ childern }) => {
    return (
        <div>
            <AuthProvider>
                <UserProvider>
                    {childern}
                </UserProvider>
            </AuthProvider>
        </div>
    );
}

export default AppProviders;
