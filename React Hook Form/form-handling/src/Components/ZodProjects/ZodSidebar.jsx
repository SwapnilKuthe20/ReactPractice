import React from 'react'
import { NavLink } from 'react-router'

const ZodSidebar = () => {
    return (
        <div className=' bg-gray-800 h-screen p-8 text-nowrap'>

            <ul className='flex flex-col mt-12 justify-center gap-4'>
                <li>
                    <NavLink
                        to={'/profile'}
                        end
                        className={({ isActive }) => isActive ? 'text-pink-600 font-black' : "text-amber-200"}
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/profile/editProfile"}
                        className={({ isActive }) => isActive ? 'text-pink-600 font-black' : "text-amber-200"}
                    >
                        Edit Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/profile/updateProfile"}
                        className={({ isActive }) => isActive ? 'text-pink-600 font-black' : "text-amber-200"}
                    >
                        Update Profile
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ZodSidebar
