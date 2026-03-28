import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const navlinks = [
        { id: 1, to: '/', navlink: "Home" },
        { id: 2, to: '/debouncing', navlink: "Debouncing" },
        { id: 3, to: '/infinteSrcolling', navlink: "Infinite-Scrolling" },
        { id: 4, to: '/instafeed', navlink: "InstaFeed" },
        { id: 5, to: '/controlForm', navlink: "Control-Form" },
        { id: 6, to: '/hookForm', navlink: "React-Hook-Form" },
    ]

    return (
        <div className=' h-screen bg-cyan-950 text-white font-bold sticky top-0 left-0'>
            <ul className='flex justify-center px-16 flex-col gap-3.5'>
                <NavLink
                    to={'/'}>
                    <h1 className='text-xl font-bold text-center py-12 text-purple-500 text-nowrap'> React-Projects </h1>
                </NavLink >

                {
                    navlinks.map(({ id, to, navlink }) => (
                        <NavLink
                            key={id}
                            to={to}
                            className={({ isActive }) => isActive ? 'text-amber-300 font-bold ' : 'text-white '}>
                            <h1 > {navlink} </h1>
                        </NavLink >
                    ))
                }
            </ul>
        </div >

    );
}

export default Sidebar;
