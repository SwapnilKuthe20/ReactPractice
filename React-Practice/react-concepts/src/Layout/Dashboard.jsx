import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Dashboard;
