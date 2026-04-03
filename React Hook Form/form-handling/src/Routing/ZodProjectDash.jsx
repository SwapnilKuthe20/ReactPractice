import React from 'react'
import ZodSidebar from '../Components/ZodProjects/ZodSidebar'
import { Outlet } from 'react-router'

const ZodProjectDash = () => {
    return (
        <div>
            <div className='flex '>
                <div className='w-56'>
                    <ZodSidebar />
                </div>
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ZodProjectDash
