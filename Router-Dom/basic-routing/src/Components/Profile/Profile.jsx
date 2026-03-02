import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {

    const profileDash = [
        { id: 1, to: ".", nav: "My Profile" },
        { id: 2, to: "profileDash", nav: "Profile Dashboard" },
        { id: 3, to: "profSeg", nav: "Profile Segment" },
        { id: 4, to: "profileCreate", nav: "Profile Create" },
        { id: 5, to: "profileUpdate", nav: "Profile Update" },
    ]

    return (
        <div className='flex'>
            <ul className='w-60 bg-green-700 flex flex-col py-12 px-7 gap-6 h-screen '>
                {
                    profileDash.map(({ id, to, nav }) => (
                        <li key={id} className=''>
                            <NavLink
                                to={to}
                                end
                                className={({ isActive }) => isActive ? 'text-cyan-300 font-bold' : "text-yellow-400"}
                            >
                                {nav}
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
            <Outlet />
        </div>
    );
}

export default Profile;
