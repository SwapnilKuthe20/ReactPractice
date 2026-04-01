import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex '>
                <div className='w-3xs'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
