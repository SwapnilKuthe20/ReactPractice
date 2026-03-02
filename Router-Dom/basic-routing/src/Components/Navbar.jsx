import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {

    const navlinks = [
        { id: 1, to: "/", nav: "Home" },
        { id: 2, to: "/about", nav: "About" },
        { id: 3, to: "/contact", nav: "Contact" },
        { id: 6, to: "/users", nav: "Users" },
        { id: 4, to: "/profile", nav: "Profile" },
        { id: 5, to: "/notification", nav: "Notification" },
    ]

    return (
        <div className='flex '>
            <div className='w-48 bg-purple-950 h-screen py-12 px-6'>
                <ul className='flex flex-col justify-center  gap-4'>
                    {
                        navlinks.map(({ id, to, nav }) => (
                            <li key={id} >
                                <NavLink
                                    to={to}
                                    className={({ isActive }) => isActive ? 'text-cyan-500 font-bold' : 'text-yellow-400'}
                                >
                                    {nav}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default Navbar;
