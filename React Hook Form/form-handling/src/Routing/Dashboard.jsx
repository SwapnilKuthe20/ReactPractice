import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex '>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
