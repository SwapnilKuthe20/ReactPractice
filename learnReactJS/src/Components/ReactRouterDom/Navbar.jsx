import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyle = {
        color: 'red',         // ✅ string, not variable
        fontWeight: 'bold',   // ✅ correct spelling & capitalization
    };

    return (
        <nav>
            {/* <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link> */}

            <NavLink to='/' style={(({ isActive }) => isActive ? activeStyle : undefined)}> Home </NavLink>
            <NavLink to='/about' style={(({ isActive }) => isActive ? activeStyle : undefined)}> About </NavLink>
            <NavLink to='/contact' style={(({ isActive }) => isActive ? activeStyle : undefined)}> Contact </NavLink>
        </nav>
    );
}

export default Navbar;
