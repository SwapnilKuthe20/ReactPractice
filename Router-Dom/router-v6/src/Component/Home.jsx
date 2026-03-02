import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className=''>
                <h1> Home Page </h1>

                <NavLink to='/about'> About </NavLink>
                <NavLink to="/profile"> Profile </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
                <NavLink to="/login"> Login </NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default Home;
