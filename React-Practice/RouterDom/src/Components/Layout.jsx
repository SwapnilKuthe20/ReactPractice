import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home';

const Layout = () => {
    return (
        <div style={{ display: "flex" }}>
            <Home />
            <Outlet />
        </div>
    );
}

export default Layout;
