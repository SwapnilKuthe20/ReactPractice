import React from 'react'
import { NavLink } from 'react-router'

const Sidebar = () => {

    const navlinks = [
        { id: 1, to: "/", navlink: "Home" },
        { id: 2, to: "/reacthook", navlink: "React-Hook-Form" },
        { id: 3, to: "/custom", navlink: "Custom-React-Hook" },
        { id: 4, to: "/zod", navlink: "Zod Validations" },
        { id: 5, to: "/signup", navlink: "Sign-Up Form" },
        { id: 6, to: "/login", navlink: "Login Form" },
        { id: 7, to: "/profile", navlink: "ZOD Projects" },
    ]

    return (
        <div className='w-3xs bg-green-800 h-screen sticky top-0 left-0 px-3 py-9'>
            <NavLink to="/" className='text-2xl font-black text-center'> Form-handling </NavLink>
            <ul className='mt-12'>
                {
                    navlinks.map(({ id, to, navlink }) => (
                        <li key={id} className='py-3'>
                            <NavLink
                                to={to}
                                className={({ isActive }) => isActive ? 'font-bold text-pink-400' : 'text-white'}
                            >
                                {navlink}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Sidebar
