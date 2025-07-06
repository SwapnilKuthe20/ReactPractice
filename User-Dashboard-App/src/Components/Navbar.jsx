import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ routePaths }) => {

    return (
        <nav style={{ padding: "10px", background: "black", color: "red" }}>
            <ul style={{ listStyle: "none", display: 'flex', alignItems: "center", textAlign: "center" }}>
                {
                    routePaths.map(({ id, path, label }) => (
                        <li key={id} style={{ margin: "10px" }}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ""} > {label} </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Navbar;
